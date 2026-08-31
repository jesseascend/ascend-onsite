import Image from 'next/image';
import Link from 'next/link';
import { routes, site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image src="/ascend-logo.png" alt="Ascend" width={1800} height={600} />
          <p>Professionally managed on-site wellness programs for communities and facilities.</p>
        </div>
        <div>
          <h2 className="footer-heading">Who we serve</h2>
          <ul>{routes.slice(0, 2).map((route) => <li key={route.href}><Link href={route.href}>{route.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="footer-heading">Ascend</h2>
          <ul>
            <li><Link href="/about/">About</Link></li>
            <li><Link href={site.discoveryRoute}>Schedule a Discovery Call</Link></li>
            <li><a href={`mailto:${site.publicEmail}`}>{site.publicEmail}</a></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Service area</h2>
          <p>{site.serviceRegion}</p>
          <p className="footer-small">Seminole, Orange, Volusia, Lake, and Osceola counties.</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>&copy; {new Date().getFullYear()} Ascend. All rights reserved.</span>
        <span><Link href="/privacy/">Privacy</Link><Link href="/accessibility/">Accessibility</Link></span>
      </div>
    </footer>
  );
}
