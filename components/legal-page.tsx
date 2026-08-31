import type { ReactNode } from 'react';
import { SiteShell } from '@/components/site-shell';

export function LegalPage({ pageId, eyebrow, title, intro, children }: { pageId: string; eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <SiteShell pageId={pageId}><section className="utility-hero"><div className="shell narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></section><article className="legal-content shell narrow">{children}</article></SiteShell>;
}
