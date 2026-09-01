import { env } from 'cloudflare:workers';

// Ascend On-Site base. Table/field names must match the live Airtable
// schema exactly -- see FORMS_IMPLEMENTATION_SUMMARY.md / API_INTEGRATION_GUIDE.md
// in the repo root's parent folder for the original spec this was built from.
const BASE_ID = 'app4rYzpkUqKmCpv9';

type FieldMapper = (fields: Record<string, string>) => Record<string, unknown>;

const TABLES: Record<string, { tableId: string; map: FieldMapper }> = {
  discovery: {
    tableId: 'tbl8SVy8Qxy1pe8IS', // Leads
    map: (f) => ({
      Name: f.name,
      Organization: f.organization,
      'Job Title': f.jobTitle,
      Email: f.email,
      Phone: f.phone,
      City: f.city,
      'Organization Type': f.organizationType,
      Notes: f.message,
      Status: 'New',
    }),
  },
  instructor: {
    tableId: 'tblAdzkqEDTWjAfUH', // Instructors
    map: (f) => ({
      'Full Name': f.name,
      Email: f.email,
      Phone: f.phone,
      City: f.city,
      'Years of Experience': f.yearsExperience,
      Availability: f.availability,
      Certifications: f.certifications,
      'Additional Information': f.message,
      Status: 'New',
    }),
  },
};

export type AirtableResult = { ok: true } | { ok: false; error: string };

// The AIRTABLE_TOKEN secret isn't declared as a typed binding (it's a plain
// Workers secret set via `wrangler secret put`), so it doesn't appear in the
// generated Env type -- narrow it explicitly here rather than widening Env.
function getAirtableToken(): string | undefined {
  return (env as unknown as { AIRTABLE_TOKEN?: string }).AIRTABLE_TOKEN;
}

export async function submitToAirtable(formType: string, fields: Record<string, string>): Promise<AirtableResult> {
  const table = TABLES[formType];
  if (!table) return { ok: false, error: `No Airtable mapping for form type "${formType}"` };

  const token = getAirtableToken();
  if (!token) return { ok: false, error: 'AIRTABLE_TOKEN is not configured' };

  const record = table.map(fields);
  // Drop unset/blank values so Airtable doesn't receive empty strings for
  // fields the form didn't collect (e.g. instructor-only fields on a
  // discovery submission).
  const cleaned = Object.fromEntries(Object.entries(record).filter(([, value]) => value !== undefined && value !== ''));

  let response: Response;
  try {
    response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${table.tableId}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ records: [{ fields: cleaned }], typecast: true }),
    });
  } catch (error) {
    return { ok: false, error: `Airtable request failed: ${error instanceof Error ? error.message : String(error)}` };
  }

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    return { ok: false, error: `Airtable API error ${response.status}: ${body}` };
  }

  return { ok: true };
}
