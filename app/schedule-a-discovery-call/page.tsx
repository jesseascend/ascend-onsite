import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Schedule a Discovery Call', description: 'Tell Ascend about your community, residents, current wellness program, and goals.', alternates: { canonical: '/schedule-a-discovery-call/' } };

export default function ContactPage() {
  return (
    <SiteShell pageId="C-CONTACT">
      <section className="contact-hero"><div className="shell contact-hero-grid"><div className="contact-hero-copy"><p className="eyebrow">Schedule a Discovery Call</p><h1>Let&rsquo;s talk about what would genuinely enrich your community.</h1><p className="hero-lede">A focused conversation about your community, your residents, and what a well-run wellness program could look like in your setting—no generic pitch, no pressure to commit.</p></div><div className="contact-form-sticky"><ContactForm /></div><div className="next-steps"><p className="eyebrow">What happens next</p><ol className="next-steps-list"><li><span aria-hidden="true">01</span><div><strong>Discovery</strong><p>Discuss your facility, population, current program, responsibilities, and priorities.</p></div></li><li><span aria-hidden="true">02</span><div><strong>Needs assessment</strong><p>If there is a fit, we clarify the program scope and operating support that makes sense.</p></div></li><li><span aria-hidden="true">03</span><div><strong>Evaluate solutions</strong><p>Ascend prepares a tailored recommendation for your community.</p></div></li></ol></div></div></section>
    </SiteShell>
  );
}
