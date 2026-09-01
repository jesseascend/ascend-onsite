import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Thank You', robots: { index: false, follow: false } };

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const isInstructor = type === 'instructor';

  return (
    <SiteShell pageId="C-THANKYOU">
      <section className="state-page">
        <div className="state-page-card">
          <CheckCircle2 aria-hidden="true" />
          <p className="eyebrow">{isInstructor ? 'Application received' : 'Inquiry received'}</p>
          <h1>{isInstructor ? 'Thank you for your interest in joining Ascend.' : 'Thank you for starting the conversation.'}</h1>
          <p>{isInstructor ? "We've received your application and will follow up if there's a fit with our current programming needs." : "We've received your message and will follow up soon to schedule a conversation."}</p>
          <a className="button" href="/">Return home</a>
        </div>
      </section>
    </SiteShell>
  );
}
