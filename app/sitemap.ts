import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/active-adult-55-plus-communities/', '/senior-assisted-living/', '/about/', '/schedule-a-discovery-call/', '/privacy/', '/accessibility/'];
  return paths.map((path) => ({ url: `${site.productionOrigin}${path}`, changeFrequency: path === '' ? 'monthly' : 'yearly', priority: path === '' ? 1 : path.includes('communities') || path.includes('living') ? 0.8 : 0.5 }));
}
