export type SubmitResult = { ok: true } | { ok: false; error: string };

const GENERIC_ERROR = 'Something went wrong. Please try again, or email info@ascendonsite.com directly.';

// Shared by every form on the site (Discovery Call, Instructor Application):
// posts to the single /api/contact route, tagged with formType so the email
// notification reads correctly. Adding a form later just means calling this
// with a new formType -- no new backend code required.
export async function submitInquiryForm(form: HTMLFormElement, formType: string): Promise<SubmitResult> {
  const formData = new FormData(form);
  formData.set('formType', formType);

  let response: Response;
  try {
    response = await fetch('/api/contact', { method: 'POST', body: formData });
  } catch {
    return { ok: false, error: 'Something went wrong. Please check your connection and try again.' };
  }

  const payload = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
  if (response.ok && payload?.ok) return { ok: true };
  return { ok: false, error: payload?.error ?? GENERIC_ERROR };
}
