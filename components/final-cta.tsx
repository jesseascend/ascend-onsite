import { DiscoveryCta } from '@/components/discovery-cta';

export function FinalCta({ pageId, heading, copy }: { pageId: string; heading: string; copy: string }) {
  return (
    <section className="final-cta" id="discovery-call">
      <div className="shell final-cta-inner">
        <div><p className="eyebrow">A thoughtful first step</p><h2>{heading}</h2><p>{copy}</p></div>
        <DiscoveryCta id={`cta-discovery-${pageId.toLowerCase()}-final`} location="final" className="button button-light" />
      </div>
    </section>
  );
}
