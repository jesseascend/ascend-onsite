# Ascend On-Site Wellness Website — Software Design Document

**Document status:** Implementation baseline 1.0  
**Companion product specification:** `PRD.md`  
**Target:** Production static website at `https://ascendonsite.com`  
**Audience:** Implementation agents, frontend developers, integration developers, QA tools, and maintainers

## 1. Purpose

This SDD translates the product requirements and the controlling `00–04` website package into an implementable system design. It defines the architecture, rendering contract, routes, shared components, data boundaries, integration seams, accessibility behavior, observability, testing, and delivery artifacts expected from the build tools.

The architecture is intentionally standards-first and host-agnostic. It must produce portable, pre-rendered HTML that can be deployed to a conventional static host or CDN without a browser-side application framework.

## 2. System Context

The website has four external concerns:

1. **Visitors** consume public marketing content and submit a Discovery Call inquiry.
2. **Lead services** receive the inquiry and may hand the visitor to a scheduler or CRM.
3. **Analytics/search services** receive approved behavioral events and crawl/index the public site.
4. **The deployment platform** serves static files, HTTPS, redirects, headers, and the true 404 response.

```text
Visitor
  │
  ├── GET pages/assets ───────► Static host/CDN
  │                                │
  │                                └── Pre-rendered HTML/CSS/JS/images
  │
  ├── Submit inquiry ─────────► Form adapter/server endpoint
  │                                ├── Lead destination/CRM
  │                                └── Optional scheduler
  │
  └── Approved events ────────► GTM/GA4

Search crawlers ──────────────► HTML + metadata + schema + sitemap/robots
```

## 3. Architecture Decisions

### 3.1 Rendering

- All public content routes shall be pre-rendered to semantic HTML at build time.
- Page meaning, navigation, forms, and legal content must not depend on client-side rendering.
- Shared layouts, metadata, header/footer, cards, CTA bands, and content modules shall be generated from reusable templates or components.
- The browser receives minimal JavaScript for navigation, progressive enhancement, analytics hooks, form UX, and optional program-selector behavior.
- The deployed output must remain ordinary static files that can move between hosts.

The implementation may use a lightweight static build tool if it materially reduces duplication. It may not add a client-side framework, CMS, database, or long-running application server without a recorded architectural decision and owner approval.

### 3.2 Content model

- Site-wide facts, navigation, contact details, service areas, CTA configuration, analytics configuration, and schema facts must exist in one central data/configuration layer.
- Page-specific content must be stored separately from shared components.
- Reusing layout is required; copying vertical-page prose is prohibited.
- Content should remain editable without changing component logic.

### 3.3 Integration model

- Forms, scheduler, analytics identifiers, and host behavior are external adapters, not hard-coded assumptions.
- Secrets must exist only in deployment/provider configuration or server-side integration code.
- The repository shall include safe example configuration and clear failure behavior when a production integration is absent.

### 3.4 Progressive enhancement

- Navigation links and Discovery Call links work without JavaScript.
- A native HTML form is preferred where supported by the approved provider.
- JavaScript may enhance validation, status messaging, attribution, and async submission, but it must not create a false success state.
- Optional selectors/accordions shall expose all essential content to crawlers and assistive technology.

## 4. Logical Project Structure

The exact build-tool filenames may differ, but the implementation must preserve these responsibilities:

```text
/
├── PRD.md
├── SDD.md
├── README.md
├── .code-project.json              # Required by the parent workspace standard once the site project is runnable
├── .env.example                    # Public configuration names only; never secrets
├── package/build configuration
├── src/
│   ├── data/
│   │   ├── site                    # Entity facts, contact, geography, domain
│   │   ├── navigation              # Header/footer route definitions
│   │   ├── analytics               # Event names and public IDs/config keys
│   │   └── pages                   # Page-specific structured content
│   ├── layouts/
│   │   ├── base
│   │   ├── commercial
│   │   └── utility
│   ├── components/
│   │   ├── header
│   │   ├── footer
│   │   ├── hero
│   │   ├── cta
│   │   ├── form
│   │   ├── process
│   │   ├── cards
│   │   ├── proof
│   │   ├── faq
│   │   └── related-links
│   ├── pages/                      # One route entry per P0 page
│   ├── styles/
│   │   ├── tokens
│   │   ├── reset/base
│   │   ├── layout
│   │   ├── components
│   │   ├── utilities
│   │   └── print
│   ├── scripts/
│   │   ├── navigation
│   │   ├── cta
│   │   ├── form
│   │   ├── analytics
│   │   └── selector
│   └── assets/
│       ├── brand
│       ├── images
│       ├── icons
│       └── fonts
├── public/
│   ├── favicon and manifest assets
│   ├── robots.txt or template
│   └── static integration files
├── tests/
│   ├── unit/config
│   ├── accessibility
│   ├── browser/e2e
│   ├── links/metadata
│   └── performance
├── docs/
│   ├── DECISIONS.md
│   ├── EXTERNAL_INPUTS.md
│   ├── CONTENT_SOURCES.md
│   ├── DEPLOYMENT.md
│   └── QA_REPORT.md
└── dist/                            # Generated; never hand-edited
```

## 5. Route and Page Design

| Page ID | Output route | Layout | Required primary modules |
|---|---|---|---|
| `A-HOME` | `/index.html` | Commercial/home | Hero, category definition, vertical routing, pain, solution, resident fit, process, trust, CTA |
| `B-55PLUS` | `/active-adult-55-plus-communities/index.html` | Commercial/vertical | Vertical hero, environment, pain/outcome, solution/scope, resident fit, process, proof, FAQ, CTA |
| `B-SENIOR` | `/senior-assisted-living/index.html` | Commercial/vertical | Senior hero, environment, pain/outcome, solution/scope, resident fit, process, proof, FAQ, CTA |
| `C-ABOUT` | `/about/index.html` | Utility/content | Compact hero, purpose, operating history/methodology, who served, CTA |
| `C-CONTACT` | `/schedule-a-discovery-call/index.html` | Utility/conversion | Conversion hero, form, next steps, reassurance/contact fallback |
| `C-THANKYOU` | `/thank-you/index.html` | Utility | Confirmation, next step/scheduler, fallback links |
| `C-PRIVACY` | `/privacy/index.html` | Utility/legal | Title, reviewed date, legal content |
| `C-ACCESS` | `/accessibility/index.html` | Utility/legal | Title, commitment, measures, feedback/contact |
| `C-404` | Host-required output | Utility/error | Error explanation, recovery routes |

Every indexable page must define:

- Canonical production URL
- Unique title and meta description
- One H1
- Social title, description, and image
- Indexing directive
- Structured-data decision
- Breadcrumb decision
- Page-specific internal links
- Content-source/proof notes

## 6. Central Site Configuration

The implementation shall expose one validated configuration object equivalent to:

```js
{
  brandName: "Ascend",
  serviceName: "Ascend On-Site Wellness",
  productionOrigin: "https://ascendonsite.com",
  publicEmail: "info@ascendonsite.com",
  publicPhone: null,
  serviceRegion: "Central Florida",
  serviceCounties: [
    "Seminole County",
    "Orange County",
    "Volusia County",
    "Lake County",
    "Osceola County"
  ],
  discoveryRoute: "/schedule-a-discovery-call/",
  form: {
    mode: "unconfigured",
    endpoint: null,
    schedulerUrl: null
  },
  analytics: {
    gtmContainerId: null,
    gaMeasurementId: null
  }
}
```

Build validation shall fail for a production-mode build if required production values or approved legal content are absent. A local preview build may proceed with an unmistakable non-production integration status.

## 7. Component Contracts

### 7.1 Header

Inputs:

- Logo asset and accessible name
- Primary navigation list
- Discovery CTA ID derived from page ID
- Current route

Behavior:

- Desktop and mobile variants share the same navigation data.
- The current page is communicated without relying only on color.
- The mobile trigger uses a native button with `aria-expanded` and `aria-controls`.
- Opening moves focus only when appropriate; closing returns focus to the trigger.
- Escape closes the menu.
- Background-scroll behavior must not trap keyboard or screen-reader users.

### 7.2 Discovery Call CTA

Every instance shall render an anchor by default:

```html
<a
  id="cta-discovery-a-home-hero"
  class="cta-button cta-button--primary"
  data-cta-key="discovery-call"
  data-cta-location="hero"
  href="/schedule-a-discovery-call/"
>
  Schedule a Discovery Call
</a>
```

Contract:

- IDs are unique across a page.
- The shared data key is exact.
- The non-JavaScript destination is always valid.
- JavaScript may decorate or redirect centrally only when an approved scheduler flow requires it.
- Activation sends `discovery_cta_click` with page ID and CTA location, not user data.

### 7.3 Hero

Variants:

- Home
- Vertical
- Compact utility
- Error/confirmation

Required inputs:

- Eyebrow, optional
- H1
- Supporting copy
- Primary CTA, when appropriate
- Secondary link, optional
- Contextual visual with source, dimensions, and alt-decision

Hero markup must remain meaningful if the image fails to load.

### 7.4 Vertical routing cards

- Use real links, not clickable `div` elements.
- Each card identifies the organization type and the outcome Ascend helps create.
- Priority verticals receive stronger prominence than future segments.
- Card imagery is optional and must not replace the accessible link name.

### 7.5 Process module

- Use an ordered list in document order.
- Visual numbering is supplementary.
- P0 steps may be Discovery, Needs Assessment, Program Design/Proposal, Installation/Launch, and Ongoing Management.
- Avoid committing to a response time or step that the operating model has not approved.

### 7.6 Flexible-scope module

Explain the continuum without presenting price tiers:

1. Defined program component
2. Managed recurring programming
3. Comprehensive wellness program
4. Turnkey wellness operation

The module must explicitly state that the appropriate scope depends on the organization and that full outsourcing is not required.

### 7.7 FAQ

- Use page-specific questions and answers.
- Prefer native `<details>/<summary>` or an equivalently accessible disclosure.
- Essential answers remain in the DOM and crawlable.
- Do not add FAQ structured data unless visible content and current eligibility rules justify it.

### 7.8 Proof module

- Accept typed proof entries with source and approval status.
- Production rendering must exclude unapproved entries.
- P0 may use the approved Lake Mary operating-history statement, methodology, process, and standards.
- Empty testimonial/logo slots must disappear rather than displaying fake or “coming soon” proof.

### 7.9 Footer

- Render from central navigation and entity data.
- Omit phone/address/social fields when null.
- Include legal routes only when built.
- The email link must use `mailto:info@ascendonsite.com` and the visible address must match.

## 8. Form System

### 8.1 Data model

The form adapter shall support these logical fields:

```text
name
organization
jobTitle
email
phone
city
organizationType
approximatePopulation
currentProgramStatus
programmingInterests[]
frequency
message
consent
source
medium
campaign
content
term
landingPage
referrer
```

The UI may omit optional fields. The adapter maps logical field names to provider-specific names in one place.

### 8.2 Validation

- Use appropriate native input types and autocomplete tokens.
- Labels are always visible; placeholders are examples, not labels.
- Required state is exposed in markup and instructions.
- Client validation improves feedback but never substitutes for provider/server validation.
- Errors identify the field, explain how to correct it, and are associated programmatically.
- On failed submission, focus the error summary and link errors back to fields.
- Do not validate phone format more strictly than the business needs.
- Never put sensitive form content into query strings, analytics, console logs, or error URLs.

### 8.3 Submission states

The form is a finite-state interface:

```text
idle → validating → submitting → success
                    └──────────► error → retry
```

Requirements:

- Disable duplicate submission while a request is pending without making the page unusable.
- Do not clear the form before confirmed success.
- Do not display success based only on a client-side timer or click.
- Announce pending, success, and error results in an appropriate live region.
- Successful submission records the conversion only after provider acceptance.
- Redirect to `/thank-you/` or render an equivalent success state, but analytics must not double count both.

### 8.4 Adapter interface

Provider-specific code must implement an interface equivalent to:

```ts
type LeadSubmissionResult =
  | { ok: true; leadId?: string; schedulerUrl?: string }
  | { ok: false; fieldErrors?: Record<string, string>; message: string };

submitLead(payload): Promise<LeadSubmissionResult>
```

Local test mode may use a mock adapter. Production mode must refuse to present the form as live when no production adapter is configured.

### 8.5 Spam and security

- Spam verification must be performed by the form provider or a trusted server-side endpoint.
- Secret keys never enter the static bundle.
- Honeypots may supplement but not replace appropriate server-side protection.
- Rate limiting and request validation belong at the provider/endpoint layer.
- Uploaded files are not part of the P0 customer inquiry form.

## 9. Analytics and Attribution

### 9.1 Analytics layer

UI code emits implementation-neutral events. A centralized analytics adapter forwards them to GTM/GA4 only when configured and permitted.

Suggested event payload:

```js
{
  event: "discovery_cta_click",
  page_id: "A-HOME",
  cta_location: "hero",
  page_path: "/"
}
```

No event may include the Message value, email address, phone number, name, or other direct personal data.

### 9.2 Attribution

- Capture first landing URL, referrer, and approved UTM parameters.
- Store only for the duration and mechanism disclosed in the privacy policy.
- Attach values to the form submission through hidden fields or provider metadata.
- Do not create cross-site tracking beyond the approved stack.

### 9.3 Event deduplication

- CTA clicks are interaction events, not conversions.
- Form success fires once per accepted submission.
- Thank-you page views alone must not count as success unless protected by a short-lived submission marker or provider callback.
- Scheduler completion should be recorded only when the scheduling service supports a reliable completion signal.

## 10. SEO and Structured Data

### 10.1 Head contract

Every page supplies:

- UTF-8 charset and responsive viewport
- Unique title and description
- Canonical absolute URL
- Robots directive
- Open Graph title, description, URL, type, and image
- Twitter-compatible social metadata where appropriate
- Favicon and site identity assets
- Optional JSON-LD generated from central approved facts

### 10.2 Schema

P0 may implement:

- `Organization` on Home or globally where appropriate
- `WebSite` on Home
- `Service` on commercial pages when properties match visible copy
- `BreadcrumbList` on deeper pages

Do not invent a street address, phone, aggregate rating, review, price range, founder, credential, or service coverage in schema.

### 10.3 Robots and sitemap

- The production sitemap contains canonical indexable pages only.
- Thank-you and 404 do not appear in the sitemap.
- Staging and preview deployments must be blocked from indexing at the host and metadata levels.
- The production build must fail or warn prominently if it inherits staging `noindex` behavior.
- `robots.txt` must point to the production sitemap.

### 10.4 URLs

- Use lowercase, hyphenated, trailing-slash canonical routes.
- Do not create county/city doorway pages.
- URL changes after launch require permanent redirects and sitemap/internal-link updates.

## 11. Styling System

### 11.1 Required design tokens

```css
:root {
  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray-700: #545454;
  --color-blue-100: #bedbf4;
  --color-blue-400: #5facf7;
  --color-blue-700: #1054ad;
  --color-navy-900: #0c3974;
  --color-turquoise-400: #33ffed;

  --font-sans: "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --content-width: 75rem;
  --content-narrow: 48rem;
  --measure: 68ch;
  --focus-ring: 0 0 0 0.1875rem #ffffff, 0 0 0 0.375rem #1054ad;
}
```

The implementation shall also define a documented fluid type scale, spacing scale, border radii, shadows, layers, transitions, and breakpoints. Exact values are implementation decisions, but component CSS may not introduce arbitrary one-off values without a clear need.

### 11.2 Color rules

- Navy is the primary CTA and authority color.
- Ascend blue and turquoise are not used as ordinary text on white unless the resulting contrast passes.
- Turquoise is limited to small accents.
- Color is never the only signal for active, required, error, or success states.

### 11.3 Typography

- Self-host Manrope in WOFF2 when the font source and license are recorded; otherwise use an approved privacy/performance-conscious delivery method.
- Limit weights and subsets to what the UI uses.
- Use `font-display: swap` or equivalent non-blocking behavior.
- Body copy should remain readable at default and zoomed sizes with comfortable line length.

### 11.4 Responsive behavior

- Use mobile-first styles.
- Primary content becomes a single-column flow where needed.
- Components reflow rather than shrink text or cause horizontal scrolling.
- Images use explicit aspect ratios/dimensions and responsive sources.
- The Discovery Call action remains easy to find without obscuring content in a persistent mobile overlay.

### 11.5 Motion

- Motion is optional and never required to understand content.
- Default transitions are subtle and short.
- `prefers-reduced-motion: reduce` removes nonessential animation and smooth scrolling.
- Avoid parallax, autoplay motion, scroll-jacking, and kinetic typography.

## 12. Assets

### 12.1 Brand assets

Source package assets:

- `Ascend.png`: 1800 × 600 transparent PNG wordmark
- `Ascend A Logo - Blue.png`: 1500 × 1500 transparent PNG mark

The build process should:

- Preserve master assets unmodified.
- Generate appropriately sized derivative PNG/WebP/AVIF outputs only when visually safe.
- Obtain or create approved favicon and social-image treatments without altering the core mark.
- Prefer an owner-supplied vector master when available.
- Never append “On-Site Wellness” into the artwork.

### 12.2 Photography

Every image record includes:

- Source URL/provider
- Creator/credit if required
- License or approval status
- Intended page/module
- Crop/focal point
- Alt-text decision
- Original and generated dimensions

The production build must not ship unlicensed placeholders.

## 13. Accessibility Design

### 13.1 Document structure

- Include a skip link to main content.
- Use header, nav, main, section/article as appropriate, and footer landmarks.
- Heading levels reflect document hierarchy, not styling.
- Decorative images use empty alternatives; informative images receive concise alternatives based on their purpose.

### 13.2 Interactive components

- Native controls are preferred.
- Custom behavior exposes name, role, state, value, focus order, and keyboard operation.
- Focus is never removed without an accessible replacement.
- Touch targets target at least 24 by 24 CSS pixels and preferably 44 by 44 for primary actions.

### 13.3 Forms

- Labels, descriptions, required state, error state, and grouping are programmatic.
- Checkbox/radio groups use fieldsets and legends.
- Errors are not communicated only by red color.
- Browser autofill and password managers must not be unnecessarily blocked.

### 13.4 Test boundary

Automated checking is necessary but insufficient. The QA report must include manual keyboard navigation, focus order, navigation/menu operation, zoom/reflow, reduced motion, form errors, screen-reader smoke testing, and visual contrast review.

## 14. Performance Design

- Keep critical CSS and page-level JavaScript small; avoid global delivery of unused feature code.
- Load scripts with `defer` or modules and avoid blocking the first render.
- Preload only the primary above-fold font/image resources proven beneficial.
- Reserve image and embed space to prevent layout shift.
- Use `srcset`/`sizes` and modern formats with a fallback.
- Lazy-load below-fold images; do not lazy-load the LCP image.
- Do not load scheduler/form vendor scripts site-wide when they are needed only on the Contact/Thank-you flow.
- Third-party analytics and embeds must have a documented performance and privacy purpose.

## 15. Security and Deployment Configuration

Where supported, production hosting should apply:

- HTTPS redirect and HSTS after HTTPS is verified
- `Content-Security-Policy` appropriate to actual font, analytics, form, and scheduler origins
- `Referrer-Policy`
- `X-Content-Type-Options: nosniff`
- `Permissions-Policy` with unused capabilities disabled
- Frame restrictions through CSP `frame-ancestors`

The final policy must be tested with the real integrations; do not deploy a copied generic CSP that breaks submissions or silently allows unnecessary origins.

Preview deployments shall be non-indexable and clearly distinguishable from production. Secrets and production identifiers must not be committed.

## 16. Build and Validation Pipeline

The project must expose stable commands, documented in `README.md` and `.code-project.json`, equivalent to:

```text
install     Install locked dependencies
dev         Start local preview with live rebuild
build       Generate production static output
test        Run the fast automated test suite
test:e2e    Run browser and integration tests
test:a11y   Run automated accessibility tests
test:links  Check internal links, routes, metadata, and sitemap
test:perf   Run performance checks against a production-like build
check       Run formatting/linting/build/automated acceptance checks
```

The exact package manager is an implementation decision. The lockfile must be committed, dependency count kept low, and build output reproducible.

### Production build gates

A production-mode build should fail for:

- Duplicate CTA IDs
- Discovery CTAs without the required data key or valid href
- Missing title, description, H1, canonical, or index status
- Broken internal links
- Missing source/approval status for production images
- Prohibited placeholder markers
- Fake or absent production form configuration when the form is presented as live
- Sitemap entries for noindex/404 routes
- Production origin differing from `https://ascendonsite.com`
- Unapproved factual proof entries

## 17. Test Plan

### 17.1 Automated unit/config tests

- Central facts and route uniqueness
- Navigation destinations
- Metadata presence/uniqueness
- CTA ID and data-hook validation
- Approved proof filtering
- Form field mapping and required-field configuration
- Analytics event payload exclusion of personal data
- Sitemap/indexing consistency

### 17.2 Browser tests

- Every P0 route loads and contains expected landmarks/H1
- Desktop and mobile navigation works by pointer and keyboard
- Every Discovery CTA reaches the Contact page in the default configuration
- Contact form validation, error summary, pending state, success, and retry behavior
- Duplicate submission prevention
- Thank-you/scheduler handoff behavior
- 404 response and recovery links
- No horizontal overflow at representative widths
- No uncaught console errors in normal paths

### 17.3 Accessibility tests

- Automated scan on every page template and form state
- Keyboard-only traversal
- Visible focus and logical order
- Mobile menu announcements and focus behavior
- Form label/error/status behavior
- 200% zoom and narrow reflow
- Reduced-motion mode
- Screen-reader smoke test on at least one desktop and one mobile combination where practical

### 17.4 SEO tests

- Unique metadata and one H1
- Canonical URLs use production origin and match route
- Indexing directives match the route table
- Valid JSON-LD and visible-content parity
- Sitemap and robots correctness
- Open Graph assets resolve
- Redirects and 404 status behave correctly on the target host

### 17.5 Performance tests

- Production build tested under mobile throttling
- LCP resource identified and optimized
- CLS sources identified and removed
- JavaScript execution and third-party cost reviewed
- Image/font payload reviewed per route
- Any failure against PRD targets documented with cause and remediation

### 17.6 Integration tests

In test and production environments:

- Submit a labeled test lead.
- Confirm one lead arrives at the intended destination with correct fields.
- Confirm consent and attribution values are preserved as approved.
- Confirm success is not emitted on provider rejection.
- Confirm spam protection rejects an invalid token/request.
- Confirm scheduling starts and completion events only when supported.
- Confirm analytics events appear once and contain no prohibited personal data.

## 18. Content and Decision Traceability

The repository shall include:

- `docs/CONTENT_SOURCES.md`: every nontrivial business/proof claim and its approved source
- `docs/DECISIONS.md`: material implementation decisions, reasoning, alternatives, approval requirement, and status
- `docs/EXTERNAL_INPUTS.md`: owner-supplied integration/legal/content inputs and current state
- `docs/QA_REPORT.md`: checks run, environment, results, exceptions, and reviewer
- `docs/DEPLOYMENT.md`: platform setup, configuration keys, build/deploy steps, redirects, rollback, and post-deploy verification

Trivial styling choices do not require decision-log entries.

## 19. Tool Execution Protocol

An implementation tool or coding agent shall:

1. Read the complete `00–04` source package, `PRD.md`, and `SDD.md` before generating production copy or code.
2. Inventory the workspace and preserve unrelated user changes.
3. Create the decision and external-input registers before resolving material open choices.
4. Build shared data, layouts, components, and validation before multiplying page instances.
5. Implement Home, then the 55+ template, then fully re-contextualize the Senior/Assisted page.
6. Use only approved facts and record each additional claim source.
7. Keep integration-specific behavior behind adapters/configuration.
8. Test incrementally at mobile and desktop widths.
9. Run the complete acceptance suite against a production-like build.
10. Report code-complete, integration-complete, or launch-complete status accurately.

The tool must stop and flag an issue rather than inventing:

- Legal entity or privacy facts
- Credentials, clients, results, testimonials, partnerships, or staff biographies
- Form/scheduler/CRM credentials or endpoints
- Service locations or national coverage
- Medical or worker-classification claims

The tool may independently decide:

- Static build implementation details
- Component markup and CSS organization
- Responsive breakpoints and spacing within the approved system
- Accessible interaction patterns
- Non-material microcopy
- Stock-image candidates, provided source/license status is recorded and owner approval is obtained before launch

## 20. Implementation Sequence

### Phase 1 — Foundation

- Scaffold project, commands, manifest, and documentation registers.
- Import brand assets without altering masters.
- Define central site/route/content configuration.
- Implement tokens, base styles, layouts, header, footer, CTA, metadata, and schema helpers.

### Phase 2 — P0 commercial experience

- Home
- Active Adult / 55+
- Senior/Assisted Living with genuinely distinct content
- About

### Phase 3 — Conversion and utility

- Discovery Call form and adapter
- Thank-you state/page
- Privacy and Accessibility layouts/copy placeholders gated from production
- 404 and host behavior

### Phase 4 — Technical completion

- Analytics hooks and attribution
- Sitemap, robots, canonicals, social metadata, structured data
- Responsive images, fonts, performance, and security configuration
- Automated tests and build gates

### Phase 5 — External integrations and launch

- Configure form, spam protection, scheduler, CRM, analytics, Search Console, hosting, and DNS.
- Finalize legal text, proof, imagery, copy, and search mapping.
- Run production QA and document results.

## 21. Software Definition of Done

The software is code-complete when:

- [ ] The repository structure, manifest, README, lockfile, and stable commands exist.
- [ ] All P0 routes build to portable static output.
- [ ] Shared content/configuration prevents entity, contact, CTA, and navigation drift.
- [ ] Components satisfy the contracts in this SDD.
- [ ] The form adapter supports mock/test and production modes without false success.
- [ ] All P0 responsive and interaction states are implemented.
- [ ] Metadata, schema, robots, sitemap, favicon, and 404 outputs exist.
- [ ] No secret, prohibited placeholder, unapproved claim, or fake proof exists in production output.
- [ ] Automated config, route, CTA, link, metadata, accessibility, and browser tests pass.
- [ ] Manual accessibility and responsive checks are recorded.
- [ ] The decision, content-source, external-input, deployment, and QA documents are current.

The software is launch-complete only after every launch item in `PRD.md` is satisfied against the production URL.

