# QA report

## Automated checks

- Source-level route, CTA hook, metadata, sitemap, and prohibited-copy checks: passed on 2026-08-30.
- Lint: passed on 2026-08-30 (generated, unused shadcn source is excluded from the project lint target).
- Deployment build: passed on 2026-08-30 for all P0 routes.
- Local route smoke checks: Home, P0 pages, robots, and sitemap responded; trailing-slash behavior is configured in `next.config.ts` and requires the retained preview to restart.

## Manual checks still required before launch

- Keyboard, focus order, mobile menu, form errors, zoom/reflow, reduced motion, and screen-reader smoke test.
- Current Chrome, Safari, Edge, Firefox, iOS Safari, and Android Chrome.
- Production Core Web Vitals and performance.
- Real form delivery, spam protection, scheduler, analytics, Search Console, HTTPS, headers, redirects, and true host 404 behavior.
- Legal, copy, claim, source/license, and imagery approval.
