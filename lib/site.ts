export const site = {
  brandName: 'Ascend',
  serviceName: 'Ascend On-Site Wellness',
  productionOrigin: 'https://ascendonsite.com',
  publicEmail: 'info@ascendonsite.com',
  publicPhone: null,
  serviceRegion: 'Central Florida',
  serviceCounties: [
    'Seminole County',
    'Orange County',
    'Volusia County',
    'Lake County',
    'Osceola County',
  ],
  discoveryRoute: '/schedule-a-discovery-call/',
  form: { mode: 'unconfigured' as const, endpoint: null, schedulerUrl: null },
  analytics: { gtmContainerId: null, gaMeasurementId: null },
};

export const routes = [
  { href: '/active-adult-55-plus-communities/', label: 'Active Adult & 55+' },
  { href: '/senior-assisted-living/', label: 'Senior & Assisted Living' },
  { href: '/about/', label: 'About' },
];

export function absoluteUrl(path: string) {
  return new URL(path, site.productionOrigin).toString();
}
