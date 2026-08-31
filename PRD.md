# Ascend On-Site Wellness Website — Product Requirements Document

**Document status:** Implementation baseline 1.0  
**Product:** Ascend On-Site Wellness marketing and lead-generation website  
**Production domain:** `https://ascendonsite.com`  
**Primary conversion:** Schedule a Discovery Call  
**Audience for this document:** Product owner, designers, developers, coding agents, content agents, QA tools, and launch reviewers

## 1. Purpose

This PRD defines the P0 website product, its users, required behavior, launch scope, acceptance criteria, and the boundary between decisions that may be made during implementation and facts that require owner input.

It is an implementation-facing synthesis of the controlling `00–04` documentation package. It does not replace that package. If this PRD conflicts with it, use this authority order:

1. `01_ Master_website_build_specification.md`
2. `02_AscendBrand_Web_Design_Guide.md`
3. `03_Website_Wireframe_Page_Architecture.md`
4. `04_Page_Content_Build_Matrix.md`
5. This PRD and the companion `SDD.md`

## 2. Product Summary

Ascend On-Site Wellness is a B2B/B2B2C service website for organizations that want professionally managed wellness programming inside their communities or facilities.

The website must communicate that Ascend can manage a focused program component, broader recurring programming, a comprehensive program, or a turnkey wellness operation. Turnkey is the maximum capability, not the mandatory package.

The website is not a resident membership site, class catalog, gym website, trainer marketplace, medical provider website, or ecommerce product.

### Product promise

Ascend helps a professional buyer provide a dependable, appropriate wellness experience without requiring the buyer's internal team to build and manage the entire operation.

### Required five-second understanding

A new visitor must be able to determine:

1. Ascend provides managed on-site wellness programs.
2. Ascend serves communities and facilities.
3. The offer is a professional B2B solution.
4. The scope can be adapted to the organization.
5. The next step is to schedule a Discovery Call.

## 3. Product Goals

### Primary goal

Generate qualified Discovery Calls from professional buyers in Central Florida.

### Supporting goals

- Establish Ascend as a credible managed wellness operator rather than a class provider.
- Demonstrate understanding of both the buyer's operating environment and the residents the buyer serves.
- Explain what Ascend can manage and how an engagement begins.
- Route the two priority buyer groups into specific, persuasive experiences.
- Create a technically sound foundation for future services, verticals, resources, and geographic expansion.
- Provide clear, crawlable information for search engines and AI answer systems.

### Non-goals for P0

- Selling memberships, classes, subscriptions, or packages online.
- Publishing prices, budgets, subsidies, savings, or cost comparisons.
- Resident booking, check-in, attendance, membership, or payment software.
- An instructor marketplace or full recruiting system.
- A CMS or authenticated administration interface.
- Publishing unvalidated P1–P3 keyword landing pages.
- Claiming nationwide coverage.
- Making medical, therapeutic, guaranteed-outcome, or unsupported safety claims.

## 4. Users

### Primary buyer

A professional responsible for community, facility, resident, lifestyle, wellness, engagement, property, or operating outcomes. Typical roles include:

- Lifestyle Director
- Activities Director or Coordinator
- Executive Director
- Community Director or Manager
- Wellness or Fitness Director
- Resident Engagement leadership
- HOA, property-management, developer, builder, or regional operations leadership

### Priority segments

#### Active Adult / 55+ communities

The buyer needs a reliable wellness amenity that supports the community's active-lifestyle promise while reducing scheduling, instructor, administration, coverage, and program-management burden.

#### Senior Living / Assisted Living

The buyer needs appropriate, professionally delivered wellness programming for residents with varying ability and mobility, without necessarily building an internal fitness team or outsourcing the entire wellness function.

### End users

Residents and patrons do not form the primary website audience, but the website must show that Ascend understands their needs: appropriate movement, strength, mobility, confidence, activity, social connection, variety, participation, and belonging.

## 5. User Journey

The primary journey is:

`Understand → Self-identify → See relevance → Understand capability → Develop confidence → Schedule a Discovery Call`

The corresponding page flow is:

`Home → Priority vertical or About/Process → Discovery Call page → Confirmation/scheduling`

The primary CTA label across commercial pages is exactly:

> **Schedule a Discovery Call**

Secondary links may help the visitor explore who Ascend serves, how the program works, or why Ascend is credible. They must not visually compete with the primary CTA.

## 6. P0 Scope and Routes

The following route map is the implementation baseline. The exact SEO wording may be refined before launch without changing the product architecture.

| Page ID | Route | Indexing | Purpose |
|---|---|---|---|
| `A-HOME` | `/` | Index | Master positioning, routing, trust, conversion |
| `B-55PLUS` | `/active-adult-55-plus-communities/` | Index | Active Adult / 55+ commercial page |
| `B-SENIOR` | `/senior-assisted-living/` | Index | Combined Senior/Assisted Living commercial page for P0 |
| `C-ABOUT` | `/about/` | Index | Company purpose, history, methodology, credibility |
| `C-CONTACT` | `/schedule-a-discovery-call/` | Index | Qualification form and next-step explanation |
| `C-THANKYOU` | `/thank-you/` | Noindex | Submission confirmation and scheduling handoff |
| `C-PRIVACY` | `/privacy/` | Indexing decision at launch | Accurate privacy disclosure for deployed stack |
| `C-ACCESS` | `/accessibility/` | Indexing decision at launch | Accessibility commitment and contact method |
| `C-404` | Host-specific 404 | Noindex; true 404 | Error recovery and navigation |

### P1, not required to close P0

- `/how-it-works/`
- Professional Network recruiting page, only if recruiting and legal wording are ready
- Independent Living, only after differentiation and search-intent validation
- Service, vertical, and resource pages marked HOLD in the source matrix

The site architecture must allow P1–P3 additions without redesigning navigation, components, metadata, or styles.

## 7. Page Requirements

### 7.1 Global header

- Display the approved ASCEND wordmark without modifying the artwork.
- Use surrounding text or page context to identify the service as Ascend On-Site Wellness.
- Provide accessible desktop and mobile navigation.
- Include a visible Discovery Call CTA on desktop and an easy-to-find equivalent on mobile.
- Support keyboard navigation, visible focus, Escape-to-close for the mobile menu, and correct expanded-state announcements.

### 7.2 Global footer

- Identify Ascend On-Site Wellness and briefly describe the service.
- Link to Home, priority verticals, About, Contact, Privacy, and Accessibility when live.
- Display `info@ascendonsite.com`.
- Display Central Florida and, where helpful, Seminole, Orange, Volusia, Lake, and Osceola counties.
- Do not display a phone number, street address, or invented social profile.
- Include an accurate copyright notice.

### 7.3 Homepage

The homepage must include or meaningfully combine:

- A category-defining hero and primary CTA.
- A plain-language explanation of managed on-site wellness.
- Routing to Active Adult / 55+ and Senior/Assisted Living pages.
- Buyer problems and the professionalized future state.
- Operating responsibilities Ascend can manage.
- Flexible scope from a defined component through comprehensive operation.
- Evidence that Ascend understands residents and facility context.
- The engagement process.
- Differentiation, methodology, and approved proof.
- A final Discovery Call CTA.

The homepage must not open with or be dominated by a list of class formats.

### 7.4 Active Adult / 55+ page

The page must be specific to Lifestyle Directors and community leadership. It must address the active-lifestyle experience, instructor coverage, manual scheduling or payment, administrative burden, program visibility, resident demand, ability variety, social connection, and amenity professionalism.

Residents must be depicted as active, capable, varied, and socially engaged. Avoid frailty stereotypes.

### 7.5 Senior/Assisted Living page

P0 uses one combined page unless search research demonstrates a material need to split it before launch.

The page must address varied resident ability, appropriate programming, reliable staffing, activity-team burden, flexible frequency, and the option to add a focused professional component without outsourcing the whole operation.

It must not imply medical treatment, therapy, disease prevention, guaranteed fall prevention, or clinical care.

### 7.6 About page

- Explain why Ascend On-Site Wellness exists.
- Connect Ascend's Lake Mary operating experience to the on-site service model.
- Use only verified founder, leadership, credential, history, and experience facts.
- Explain the operating philosophy or standards rather than relying on generic passion language.
- Include routes to priority verticals and the Discovery Call.

### 7.7 Discovery Call page

- Explain who should inquire and what happens after submission.
- Present an accessible, low-friction qualification form.
- Preserve source and UTM data where technically possible.
- Provide a functional success and error path.
- Route a successful lead to the configured destination and record a conversion event.
- If scheduling is separate, offer the scheduler after successful submission.
- Provide `info@ascendonsite.com` as the contact fallback.

Candidate form fields are:

- Name
- Organization
- Job title
- Email
- Phone
- City
- Organization type
- Approximate population
- Current program status
- Programming interests
- Expected frequency
- Message

The product owner must decide which fields are required. Until then, Name, Organization, Email, Organization Type, and Message are the provisional minimum required fields.

### 7.8 Thank-you page

- Confirm that the submission succeeded.
- Explain the expected next step without promising an unapproved response time.
- Display or link to scheduling when configured.
- Provide the contact-email fallback.
- Be marked `noindex`.

### 7.9 Privacy and accessibility pages

- Privacy copy must describe the actual deployed analytics, form, scheduler, CRM, cookies, and data processors.
- Accessibility copy must describe the actual commitment and contact process without claiming audit results or absolute compliance that has not been verified.
- Both pages must use a readable, semantic long-form layout.

### 7.10 404

- Return a true HTTP 404 status.
- Explain that the page was not found.
- Link to Home, both priority verticals, and the Discovery Call page.
- Remain visually consistent with the site.

## 8. Content and Claim Requirements

### Approved facts

- Brand: Ascend
- Service expression: Ascend On-Site Wellness
- Domain: `ascendonsite.com`
- Email: `info@ascendonsite.com`
- Public phone: none
- Service area: Central Florida, specifically Seminole, Orange, Volusia, Lake, and Osceola counties
- Approved launch authority: Ascend has refined its fitness operation in Lake Mary, Florida for approximately 10 years and brings that operating experience into client communities and facilities as an on-site amenity.

### Required message hierarchy

1. Professionally managed on-site wellness programs.
2. Understanding of the buyer's environment.
3. Understanding of the residents or patrons.
4. Configurable operating responsibility.
5. Programming tailored to population, facility, demand, current program, and goals.
6. Classes and formats are components, not the product definition.
7. Schedule a Discovery Call.

### Prohibited or approval-required claims

Do not publish invented or unverified:

- Clients, testimonials, logos, case studies, partnerships, results, statistics, or outcomes
- Credentials, certifications, insurance statements, or instructor-network size
- National coverage or unsupported service locations
- Prices, costs, budgets, subsidies, savings, or financial models
- Medical, therapy, treatment, disease, or guaranteed health claims
- Employment or independent-contractor classification statements
- Exact response times or service availability commitments
- Addresses, phone numbers, staff names, or biographies

Every factual claim outside the approved list must have a named source in the content or decision log.

## 9. Visual and Experience Requirements

- The visual tone is calm, professional, dependable, confident, sophisticated, human, and selectively energetic.
- The website must feel like wellness, operations, community, and fitness—not a gym, spa, yoga studio, medical provider, SaaS dashboard, or generic corporate template.
- Use Manrope for launch unless a documented implementation constraint requires the approved fallback.
- Use white as the primary canvas, navy for authority and primary CTAs, and turquoise only as a rare accent.
- Use strong typography, generous whitespace, restrained motion, and contextual photography.
- Photography should show realistic communities, active and older adults, social interaction, appropriate movement, and professional instructors.
- Every externally sourced asset must have a recorded source and license/usage status.
- The UI must provide intentional desktop, tablet, and mobile layouts.

## 10. Functional Requirements

| ID | Requirement |
|---|---|
| `FR-01` | All P0 routes render without client-side JavaScript. |
| `FR-02` | Global navigation and all internal links work at all supported viewport sizes. |
| `FR-03` | Every Discovery Call control uses `data-cta-key="discovery-call"` and a unique `cta-discovery-{page-id}-{location}` ID. |
| `FR-04` | Discovery Call behavior is configurable centrally and defaults to the Contact route, never a dead `href="#"`. |
| `FR-05` | The contact form validates required fields accessibly on client and server/provider sides. |
| `FR-06` | A valid submission reaches the approved lead destination exactly once and produces a success state. |
| `FR-07` | A failed submission retains entered data where safe, announces a useful error, and offers a retry or email fallback. |
| `FR-08` | Spam protection is present and accessible without exposing secrets in browser code. |
| `FR-09` | Successful submission can hand off to the approved scheduling tool without losing attribution data where supported. |
| `FR-10` | CTA clicks, form starts, form success, form failure, and scheduling events are available to the analytics layer. |
| `FR-11` | The mobile navigation works with pointer, keyboard, and screen-reader interaction. |
| `FR-12` | The 404 page is served with a true 404 response. |
| `FR-13` | The sitemap contains only canonical, indexable production URLs. |
| `FR-14` | Structured data matches visible content and approved facts. |
| `FR-15` | Legal and utility pages remain usable with CSS or JavaScript failures. |

## 11. Nonfunctional Requirements

### Accessibility

Target WCAG 2.2 AA. At minimum:

- Semantic landmarks and heading structure
- One H1 per page
- Full keyboard operation
- Visible focus
- Accessible navigation states
- Descriptive links
- Explicit form labels and instructions
- Programmatically associated error messages
- Status announcements for form results
- Meaningful image alternatives
- Adequate contrast and touch targets
- 200% text zoom and 320 CSS-pixel reflow without loss of content or function
- Reduced-motion support
- No essential information conveyed only through color or animation

### Performance

Target at the 75th percentile:

- LCP at or below 2.5 seconds
- INP at or below 200 milliseconds
- CLS at or below 0.1

Production pages should use optimized responsive images, minimal JavaScript, limited font files, lazy loading below the fold, and stable media dimensions.

### SEO and AI readability

- Unique title, description, canonical, H1, and social metadata for every indexable page
- Crawlable HTML content and navigation
- XML sitemap and robots file
- Organization, WebSite, Breadcrumb, and Service schema only where applicable and truthful
- Direct definitions and descriptive headings
- No doorway pages, keyword stuffing, or near-duplicate vertical pages

### Security and privacy

- HTTPS-only production delivery
- No client-side secrets
- Secure form handling and spam protection
- Privacy-conscious collection and retention
- Least-privilege deployment and integration credentials
- Recommended host-level security headers
- No analytics or marketing tool silently added outside the approved privacy disclosure

### Browser support

Support current mainstream Chrome, Safari, Edge, and Firefox, with explicit testing on iOS Safari and Android Chrome.

## 12. Analytics Requirements

The approved baseline is Google Analytics 4 and Google Search Console, with Google Tag Manager as the preferred implementation layer.

Required events:

- `discovery_cta_click`
- `lead_form_start`
- `lead_form_submit_success`
- `lead_form_submit_error`
- `scheduler_start`, when applicable
- `scheduler_complete`, when supported
- `email_click`
- `vertical_page_view`
- `program_selector_use`, if the interactive selector ships

Event payloads must not include sensitive free-text form content. Page, CTA location, organization-type selection where privacy-approved, source, medium, campaign, and referrer may be included.

## 13. External Inputs and Placeholder Policy

The following cannot be invented by a build tool:

| Input | Needed for | Permitted interim behavior |
|---|---|---|
| Form provider/endpoint | Live lead delivery | Build tested adapter and local/mock success path; label production integration pending |
| Scheduler | Automated booking | Hide scheduler and explain human follow-up, or use approved placeholder only in non-production |
| CRM destination | Lead routing | Send only to the approved form destination; do not invent a CRM |
| Required form fields | Final validation | Use provisional minimum and expose the decision in configuration |
| Legal entity details | Privacy/copyright/legal copy | Use a clearly marked non-production placeholder; do not deploy it |
| Privacy/cookie approval | Legal launch | Draft from the actual stack and flag for review |
| GA4/GTM identifiers | Production analytics | Provide configuration variables; do not use fake production IDs |
| Hosting/DNS access | Deployment | Produce a host-agnostic static build and deployment notes |
| Verified founder facts | About/proof | Use only the approved 10-year Lake Mary statement |

No placeholder may appear as an unstated fact on a production deployment.

## 14. Delivery States

### Code-complete

May be achieved with the information currently available. It requires:

- All P0 pages and responsive states built
- Final-quality draft copy based only on approved facts
- Central CTA system
- Form adapter, validation, success/error states, and integration configuration
- Complete SEO, accessibility, analytics hooks, and technical files
- Automated and manual QA passing with mock/test integrations
- An explicit external-input register

### Integration-complete

Requires owner-supplied service decisions or credentials. It requires:

- Production form delivery verified
- Scheduler and CRM behavior verified, if used
- Analytics and Search Console connected
- Spam protection configured
- Production privacy disclosure updated for the real stack

### Launch-complete

Requires:

- Integration-complete status
- Approved legal copy and entity details
- Approved final copy, images, and claims
- Production hosting, DNS, HTTPS, redirects, and 404 behavior
- Accessibility, browser, performance, SEO, analytics, and form-delivery QA against the production URL
- No unresolved P0 placeholder or fabricated fact

Tools must state which delivery state has been reached. They must not use the word “done” without identifying the state.

## 15. Definition of Done

The P0 website is launch-complete only when all of the following are true:

- [ ] A five-second review correctly identifies what Ascend does, who it serves, and the primary CTA.
- [ ] The offer is consistently framed as managed wellness, not classes.
- [ ] Home, both verticals, About, Contact, Thank You, Privacy, Accessibility, and 404 are complete.
- [ ] Active Adult and Senior/Assisted pages contain materially distinct copy, examples, imagery, FAQs, and buyer contexts.
- [ ] Every CTA has the standard hook, a unique ID, and a working destination.
- [ ] A real test lead reaches the intended destination and attribution is preserved where supported.
- [ ] Success, error, retry, and scheduling states work.
- [ ] No unsupported claim, price language, nationwide claim, medical claim, or fabricated proof appears.
- [ ] No placeholder legal or business fact remains in the production output.
- [ ] Mobile navigation, forms, layout, and CTA visibility work on physical or representative mobile devices.
- [ ] Keyboard and screen-reader smoke tests pass.
- [ ] Automated accessibility checks report no serious or critical issues, and manual checks cover items automation cannot validate.
- [ ] Contrast, focus, reflow, reduced motion, alt text, headings, labels, errors, and touch targets pass review.
- [ ] Titles, descriptions, canonicals, social metadata, schema, sitemap, robots, and index/noindex states are correct.
- [ ] Analytics events are verified in debug/realtime tools without leaking form-message content.
- [ ] The true 404 response, redirects, HTTPS, and security configuration work in production.
- [ ] Performance is tested on mobile and material regressions are resolved or documented.
- [ ] All images are optimized and have a recorded usage/source status.
- [ ] Current Chrome, Safari, Edge, Firefox, iOS Safari, and Android Chrome receive a usable experience.
- [ ] A decision log, external-input register, deployment guide, and QA report are included in the handoff.

## 16. Product Decisions Made by This PRD

- P0 uses one combined Senior/Assisted Living route, subject to pre-launch search validation.
- The Discovery Call page is the default destination for all Discovery Call CTAs.
- Name, Organization, Email, Organization Type, and Message are the provisional minimum form requirements until the owner approves the final field policy.
- Accessibility is included as a P0 utility page, but its language must reflect the actual implementation and review status.
- P1–P3 landing pages remain unbuilt and unpublished unless their research gates are satisfied.
- The current documentation is sufficient to reach code-complete status without further business input.

## 17. Approval Inputs Still Required

Before launch, the owner must provide or approve:

1. Form, scheduling, CRM, and spam-protection selections.
2. Final required form fields and consent language.
3. Legal business identity and privacy/cookie copy.
4. Analytics/Search Console access or identifiers.
5. Hosting and domain deployment access.
6. Verified founder/company facts beyond the approved Lake Mary statement.
7. Final production copy and imagery.
8. The combined-versus-split Senior/Assisted Living decision after a focused search review.

