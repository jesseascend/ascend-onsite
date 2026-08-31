import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Thank You', robots: { index: false, follow: false } };

export default function ThankYouPage() { return <SiteShell pageId="C-THANKYOU"><section className="state-page"><div className="state-page-card"><CheckCircle2 aria-hidden="true" /><p className="eyebrow">Inquiry received</p><h1>Thank you for starting the conversation.</h1><p>Once live submission and scheduling are configured, this page will confirm the next approved step. No response-time promise is made here.</p><p>For now, contact <a href={`mailto:${site.publicEmail}`}>{site.publicEmail}</a>.</p><a className="button" href="/">Return home</a></div></section></SiteShell>; }
