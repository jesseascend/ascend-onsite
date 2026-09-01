import type { Metadata } from 'next';
import { InstructorApplicationForm } from '@/components/instructor-application-form';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Instructor Application', description: 'Apply to lead wellness programming with Ascend On-Site Wellness in Central Florida.', alternates: { canonical: '/instructor-application/' } };

export default function InstructorApplicationPage() {
  return (
    <SiteShell pageId="C-INSTRUCTOR">
      <section className="contact-hero"><div className="shell contact-hero-grid"><div><p className="eyebrow">Instructor Application</p><h1>Bring your expertise to communities that need it.</h1><p className="hero-lede">Ascend works with professional instructors across Seminole, Orange, Volusia, Lake, and Osceola counties. Tell us about your background and the populations you enjoy working with.</p></div><div className="contact-form-sticky"><InstructorApplicationForm /></div></div></section>
    </SiteShell>
  );
}
