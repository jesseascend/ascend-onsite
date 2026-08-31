import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

export default function NotFound() { return <SiteShell pageId="C-404"><section className="state-page"><div className="state-page-card"><span className="error-code">404</span><p className="eyebrow">Page not found</p><h1>This page is not part of the program.</h1><p>The address may have changed or the link may be incomplete. Use one of the paths below to continue.</p><div className="state-actions"><Link className="button" href="/">Return home</Link><Link className="text-link" href="/schedule-a-discovery-call/">Schedule a Discovery Call</Link></div></div></section></SiteShell>; }
