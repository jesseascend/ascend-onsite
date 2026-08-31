# Ascend On-Site Wellness website

Multi-route website implementation based on the controlling Ascend 00–04 specification package plus `PRD.md` and `SDD.md`.

## Status

The project is intended to reach **code-complete** status with mock/unconfigured integration seams. It is not launch-complete until the form, scheduler/CRM decision, spam protection, analytics, legal identity and privacy text, production imagery approval, hosting, and production QA are resolved.

## Commands

- `npm ci` — install the locked dependencies
- `npm run dev` — start the local preview
- `npm run build` — create the production deployment build
- `npm run lint` — run static lint checks
- `npm run test` — run source-level acceptance checks
- `npm run check` — run lint, acceptance checks, and the deployment build

## Configuration

Shared public facts and integration status live in `lib/site.ts`. Discovery Call controls use the shared `DiscoveryCta` component and retain a valid non-JavaScript path to `/schedule-a-discovery-call/`.

The preview form intentionally refuses to show a false success state while the production form adapter is unconfigured.
