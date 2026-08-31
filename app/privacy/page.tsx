import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy', description: 'Privacy information for the Ascend On-Site Wellness website.', alternates: { canonical: '/privacy/' } };

export default function PrivacyPage() {
  return <LegalPage pageId="C-PRIVACY" eyebrow="Privacy" title="Privacy information" intro="This code-complete preview does not yet include a live inquiry endpoint, scheduler, CRM, or analytics identifier. This page must be reviewed and updated to reflect the actual production stack before launch.">
    <p className="legal-status">Launch review required — legal business identity and final data processors remain owner inputs.</p>
    <h2>Information you choose to provide</h2><p>The Discovery Call page contains a preview inquiry form. Until a production form provider is configured, submitting that form does not transmit or store the entered information. Visitors may instead contact Ascend at <a href={`mailto:${site.publicEmail}`}>{site.publicEmail}</a>.</p>
    <h2>Website usage information</h2><p>The approved measurement direction is Google Analytics 4, potentially implemented through Google Tag Manager. No production identifiers are configured in this preview. Before those tools are activated, this notice and any required consent experience must be updated to describe the data and cookies actually used.</p>
    <h2>Future service providers</h2><p>A future form, scheduling, spam-protection, analytics, hosting, or CRM provider may process information on Ascend’s behalf. Those providers must be identified from the actual deployment rather than assumed in advance.</p>
    <h2>Contact</h2><p>Questions about this website’s privacy practices can be sent to <a href={`mailto:${site.publicEmail}`}>{site.publicEmail}</a>.</p>
  </LegalPage>;
}
