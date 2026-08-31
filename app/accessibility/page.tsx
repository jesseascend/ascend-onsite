import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Accessibility', description: 'Accessibility commitment and contact information for Ascend On-Site Wellness.', alternates: { canonical: '/accessibility/' } };

export default function AccessibilityPage() {
  return <LegalPage pageId="C-ACCESS" eyebrow="Accessibility" title="A more accessible experience" intro="Ascend On-Site Wellness aims to make this website useful to visitors with a wide range of abilities and technologies.">
    <h2>Our approach</h2><p>The site is being built with semantic structure, keyboard-accessible navigation, visible focus, responsive text and layout, meaningful image alternatives, labeled forms, accessible error feedback, adequate contrast, and reduced-motion support. The production target is WCAG 2.2 Level AA.</p>
    <h2>Ongoing work</h2><p>Accessibility is an ongoing practice. Final claims about audit status or compliance will only be made after the production experience and integrations have been reviewed.</p>
    <h2>Feedback</h2><p>If you encounter a barrier or need information in another format, email <a href={`mailto:${site.publicEmail}`}>{site.publicEmail}</a>. Please include the page and a brief description of the issue if possible.</p>
  </LegalPage>;
}
