import { env } from 'cloudflare:workers';
import { submitToAirtable } from '@/lib/airtable';

// Human-readable labels for the fields either form on the site may submit.
// Route stays generic on purpose: adding a field to a form doesn't require
// touching this file, it just shows up in the email with its raw key.
const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  organization: 'Organization',
  jobTitle: 'Job title',
  email: 'Email',
  phone: 'Phone',
  city: 'City',
  organizationType: 'Organization type',
  message: 'Message',
  yearsExperience: 'Years of experience',
  certifications: 'Certifications',
  availability: 'Availability',
};

const FORM_SUBJECTS: Record<string, string> = {
  discovery: 'New Discovery Call request',
  instructor: 'New Instructor Application',
};

const HONEYPOT_FIELD = 'company_website';

// FormData.get() types as FormDataEntryValue (string | File | null). These
// forms never submit files, but stringifying a File gives "[object File]",
// so normalize explicitly instead of trusting String() on the raw value.
function asString(value: FormDataEntryValue | null): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return Response.json({ ok: false, error: 'Invalid form submission.' }, { status: 400 });
  }

  // Honeypot: a hidden field real visitors never see or fill. If it has a
  // value, silently report success without sending -- no need to tip off
  // whatever filled it in.
  if (asString(data.get(HONEYPOT_FIELD)) !== '') {
    return Response.json({ ok: true });
  }

  const formType = asString(data.get('formType')) || 'discovery';
  const name = asString(data.get('name'));
  const email = asString(data.get('email'));

  if (!name || !email) {
    return Response.json({ ok: false, error: 'Name and email are required.' }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  const rows: [string, string][] = [];
  for (const [key, value] of data.entries()) {
    if (key === 'formType' || key === HONEYPOT_FIELD) continue;
    const stringValue = asString(value);
    if (!stringValue) continue;
    fields[key] = stringValue;
    rows.push([FIELD_LABELS[key] ?? key, stringValue]);
  }

  const subject = FORM_SUBJECTS[formType] ?? 'New website inquiry';
  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');
  const html = `<h2>${subject}</h2><table cellpadding="0" cellspacing="0">${rows
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top;">${label}</td><td>${value}</td></tr>`)
    .join('')}</table>`;

  // Send the email notification and create the Airtable record in parallel.
  // Either channel reaching the business counts as success; a failure in one
  // is logged, not surfaced, so a temporary outage in one doesn't block a
  // submission the other channel handled fine.
  const [emailResult, airtableResult] = await Promise.allSettled([
    env.EMAIL.send({
      to: 'info@ascendonsite.com',
      from: { email: 'noreply@ascendonsite.com', name: 'Ascend On-Site Wellness Website' },
      replyTo: email,
      subject: `${subject} from ${name}`,
      text,
      html,
    }),
    submitToAirtable(formType, fields),
  ]);

  const emailOk = emailResult.status === 'fulfilled';
  if (!emailOk) console.error('Email send failed', emailResult.reason);

  const airtableOk = airtableResult.status === 'fulfilled' && airtableResult.value.ok;
  if (!airtableOk) {
    const reason = airtableResult.status === 'fulfilled' ? airtableResult.value : airtableResult.reason;
    console.error('Airtable submission failed', reason);
  }

  if (!emailOk && !airtableOk) {
    return Response.json(
      { ok: false, error: 'We could not send your message. Please email info@ascendonsite.com directly.' },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
