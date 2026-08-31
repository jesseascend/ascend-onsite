# Deployment guide

## Current state

The project is configured for Sites hosting through `.openai/hosting.json`. The deployment build is `npm run build`.

## Required production configuration

Before public launch, configure and verify:

1. Form endpoint/provider and server-side validation.
2. Spam protection.
3. Scheduler and CRM routing, if used.
4. Approved consent and privacy language.
5. GA4/GTM identifiers and Search Console ownership.
6. Production hostname `https://ascendonsite.com`, HTTPS, redirects, headers, and DNS.
7. A real production lead through the complete route.

The current preview is safe because the form does not claim success or send information when unconfigured.
