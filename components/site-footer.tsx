import Image from 'next/image';
import { routes, site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer id="site-footer" className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image src="/ascend-logo-white-full.png" alt="Ascend" width={1200} height={400} unoptimized />
          <p>Professionally managed on-site wellness programs for communities and facilities.</p>
        </div>
        <div>
          <h2 className="footer-heading">Who we serve</h2>
          <ul>{routes.slice(0, 2).map((route) => <li key={route.href}><a href={route.href}>{route.label}</a></li>)}</ul>
        </div>
        <nav className="footer-company" aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading" className="footer-heading">Contact Us</h2>
          <ul>
            <li><a href={site.discoveryRoute}>Schedule a Discovery Call</a></li>
            <li><a href={`mailto:${site.publicEmail}`}>{site.publicEmail}</a></li>
            <li><a href="/about/">About Ascend</a></li>
          </ul>
        </nav>
        <div className="footer-service-area">
          <h2 className="footer-heading">Service area</h2>
          <p>{site.serviceRegion}</p>
          <p className="footer-small">Seminole, Orange, Volusia, Lake, and Osceola counties.</p>
          <a href="/instructor-application/">Instructor Application</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>&copy; {new Date().getFullYear()} Ascend. All rights reserved.</span>
        <span><a href="/privacy/">Privacy</a><a href="/accessibility/">Accessibility</a></span>
      </div>
    </footer>
  );
}
