'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { routes } from '@/lib/site';
import { DiscoveryCta } from '@/components/discovery-cta';

export function SiteHeader({ pageId }: { pageId: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Ascend On-Site Wellness home" onClick={() => setOpen(false)}>
          <Image src="/ascend-logo.png" alt="Ascend" width={1800} height={600} priority />
          <span>On-Site Wellness</span>
        </Link>
        <nav aria-label="Primary navigation" className="desktop-nav">
          {routes.map((route) => <Link href={route.href} key={route.href}>{route.label}</Link>)}
        </nav>
        <DiscoveryCta id={`cta-discovery-${pageId.toLowerCase()}-header`} location="header" className="button button-small header-cta" />
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className={`mobile-nav ${open ? 'mobile-nav-open' : ''}`}>
        <div className="shell mobile-nav-inner">
          {routes.map((route) => <Link href={route.href} key={route.href} onClick={() => setOpen(false)}>{route.label}</Link>)}
          <DiscoveryCta id={`cta-discovery-${pageId.toLowerCase()}-mobile`} location="mobile-nav" />
        </div>
      </nav>
    </header>
  );
}
