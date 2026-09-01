import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://ascendonsite.com'),
  title: {
    default: 'Ascend On-Site Wellness | Managed Wellness Programs',
    template: '%s | Ascend On-Site Wellness',
  },
  description: 'Professionally managed on-site wellness programs for communities and facilities across Central Florida.',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '1500x1500' },
    ],
    shortcut: '/favicon.svg',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: site.serviceName,
    title: 'Ascend On-Site Wellness',
    description: 'Professionally managed wellness programs for communities and facilities.',
    url: site.productionOrigin,
    images: [{ url: '/og.png', width: 1734, height: 907, alt: 'Ascend On-Site Wellness' }],
  },
  twitter: { card: 'summary_large_image', title: 'Ascend On-Site Wellness', description: 'Professionally managed wellness programs for communities and facilities.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.serviceName,
    url: site.productionOrigin,
    email: site.publicEmail,
    areaServed: site.serviceCounties.map((name) => ({ '@type': 'AdministrativeArea', name })),
    description: 'Professionally managed on-site wellness programs for communities and facilities.',
  };

  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /></body></html>;
}
