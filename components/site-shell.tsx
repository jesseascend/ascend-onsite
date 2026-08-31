import type { ReactNode } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export function SiteShell({ pageId, children }: { pageId: string; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader pageId={pageId} />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
