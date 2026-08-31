import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { DiscoveryCta } from '@/components/discovery-cta';
import { FinalCta } from '@/components/final-cta';
import { SiteShell } from '@/components/site-shell';

export type VerticalPageContent = {
  pageId: string;
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  residentImage: string;
  residentImageAlt: string;
  environmentTitle: string;
  environmentCopy: string[];
  pressures: string[];
  outcomes: string[];
  solutionTitle: string;
  solutionCopy: string;
  management: string[];
  experiences: string[];
  residentTitle: string;
  residentCopy: string;
  faq: { question: string; answer: string }[];
  relatedHref: string;
  relatedLabel: string;
  finalHeading: string;
  finalCopy: string;
};

export function VerticalPage({ content }: { content: VerticalPageContent }) {
  return (
    <SiteShell pageId={content.pageId}>
      <section className="subpage-hero">
        <div className="shell subpage-hero-grid">
          <div><p className="eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p className="hero-lede">{content.lede}</p><DiscoveryCta id={`cta-discovery-${content.pageId.toLowerCase()}-hero`} location="hero" /></div>
          <div className="subpage-hero-image"><Image src={content.image} alt={content.imageAlt} width={1800} height={1200} priority sizes="(max-width: 920px) 100vw, 50vw" /></div>
        </div>
      </section>

      <section className="environment-section section-pad"><div className="shell editorial-grid"><div><p className="eyebrow">We understand your environment</p><h2>{content.environmentTitle}</h2></div><div className="editorial-copy">{content.environmentCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>

      <section className="pressure-outcome section-pad"><div className="shell two-column-cards"><article className="list-panel"><span className="panel-label">What makes it difficult</span><h2>The operational pressure</h2><ul>{content.pressures.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article><article className="list-panel list-panel-blue"><span className="panel-label">What good looks like</span><h2>A dependable future state</h2><ul>{content.outcomes.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article></div></section>

      <section className="vertical-solution section-pad"><div className="shell"><div className="section-heading"><p className="eyebrow">The Ascend approach</p><h2>{content.solutionTitle}</h2><p>{content.solutionCopy}</p></div><div className="solution-columns"><article><span>Ascend may manage</span><ul>{content.management.map((item) => <li key={item}>{item}</li>)}</ul></article><article><span>The resident experience may include</span><ul>{content.experiences.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>

      <section className="flexibility-banner"><div className="shell flexibility-inner"><div><p className="eyebrow">Focused or comprehensive</p><h2>Use Ascend for the level of support you need.</h2></div><p>A focused recurring program can be the right answer. So can a broader managed wellness operation. We shape the agreed scope around your facility instead of forcing a rigid package.</p></div></section>

      <section className="resident-fit section-pad"><div className="shell resident-grid resident-grid-reverse"><div className="resident-image"><Image src={content.residentImage} alt={content.residentImageAlt} width={1800} height={2700} sizes="(max-width: 920px) 100vw, 50vw" /></div><div><p className="eyebrow">Designed for your residents</p><h2>{content.residentTitle}</h2><p>{content.residentCopy}</p></div></div></section>

      <section className="process-section section-pad"><div className="shell"><div className="section-heading"><p className="eyebrow">A clear way forward</p><h2>From discovery to ongoing support.</h2></div><ol className="process-grid"><li><span>01</span><h3>Understand</h3><p>We learn about the environment, population, current program, and goals.</p></li><li><span>02</span><h3>Design</h3><p>We recommend an appropriate scope, delivery model, and programming mix.</p></li><li><span>03</span><h3>Install</h3><p>We coordinate the agreed staffing, schedule, systems, and launch details.</p></li><li><span>04</span><h3>Manage</h3><p>We support delivery, communication, quality, and thoughtful adjustments.</p></li></ol></div></section>

      <section className="faq-section section-pad"><div className="shell faq-grid"><div><p className="eyebrow">Questions buyers ask</p><h2>Clear answers before the first conversation.</h2><a className="text-link" href={content.relatedHref}>Explore {content.relatedLabel} <ArrowRight aria-hidden="true" size={18} /></a></div><div>{content.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>

      <FinalCta pageId={content.pageId} heading={content.finalHeading} copy={content.finalCopy} />
    </SiteShell>
  );
}
