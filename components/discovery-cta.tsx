import { site } from '@/lib/site';

type DiscoveryCtaProps = {
  id: string;
  location: string;
  className?: string;
  label?: string;
};

export function DiscoveryCta({ id, location, className = 'button', label = 'Schedule a Discovery Call' }: DiscoveryCtaProps) {
  return (
    <a
      id={id}
      className={className}
      data-cta-key="discovery-call"
      data-cta-location={location}
      href={site.discoveryRoute}
    >
      {label}
    </a>
  );
}
