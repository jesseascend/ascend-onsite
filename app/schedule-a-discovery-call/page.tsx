import type { Metadata } from 'next';
import { MessageSquareText, PencilRuler } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Schedule a Discovery Call', description: 'Tell Ascend about your community, residents, current wellness program, and goals.', alternates: { canonical: '/schedule-a-discovery-call/' } };

export default function ContactPage() {
  return (
    <SiteShell pageId="C-CONTACT">
      <section className="contact-hero"><div className="shell contact-hero-grid"><div><p className="eyebrow">Schedule a Discovery Call</p><h1>Start with your environment—not a predetermined package.</h1><p className="hero-lede">A focused conversation about your community, your residents, and what a well-run wellness program could look like in your setting—no generic pitch, no pressure to commit.</p><div className="next-steps"><p className="eyebrow">What happens next</p><ol className="next-steps-list"><li><MessageSquareText aria-hidden="true" /><div><strong>Discovery</strong><p>We discuss your facility, population, current program, responsibilities, and priorities.</p></div></li><li><PencilRuler aria-hidden="true" /><div><strong>Needs assessment</strong><p>If there is a fit, we clarify the program scope and operating support that makes sense.</p></div></li><li><span aria-hidden="true">03</span><div><strong>Proposal</strong><p>Ascend can prepare a tailored recommendation for the agreed opportunity.</p></div></li></ol></div></div><div className="contact-form-sticky"><ContactForm /></div></div></section>
    </SiteShell>
  );
}
