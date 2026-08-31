# Material decision log

## 2026-08-30 — Use the Sites Vinext scaffold

- **Decision:** Implement the multi-route site with the required Sites Vinext scaffold and reusable React server/client components.
- **Reason:** The current task runs through Sites; the scaffold provides pre-rendered HTML behavior, metadata routes, a Cloudflare-compatible deployment build, and shared components without a CMS or database.
- **Alternative considered:** Hand-authored independent static HTML files.
- **Owner approval required:** No for code-complete preview; deployment still requires owner approval.
- **Status:** Implemented.

## 2026-08-30 — Keep Senior and Assisted Living combined for P0

- **Decision:** Use `/senior-assisted-living/` as the combined P0 route.
- **Reason:** The PRD sets this as the implementation baseline pending focused SERP validation.
- **Owner approval required:** Yes before freezing the production search architecture.
- **Status:** Provisional P0 implementation.

## 2026-08-30 — Refuse false form success

- **Decision:** Render the full accessible inquiry interface but do not transmit data or redirect to success while the production adapter is unconfigured.
- **Reason:** No approved endpoint, scheduler, CRM, consent language, or spam-protection system was supplied.
- **Alternative considered:** A mock success response, which could mislead visitors in a hosted preview.
- **Owner approval required:** Integration selection required before launch.
- **Status:** Implemented.

## 2026-08-30 — Use two Pexels launch-image candidates

- **Decision:** Use two locally stored, free-to-use stock-photo candidates in the private build while retaining source records.
- **Reason:** The brand guide makes contextual photography important and permits launch stock imagery.
- **Owner approval required:** Yes before public launch.
- **Status:** Provisional.
