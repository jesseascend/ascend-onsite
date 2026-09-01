# Ascend On-Site Wellness Website Structure

**Status:** Code-complete implementation with form integration pending.

---

## Quick Navigation

- **App routes** → `app/` — Next.js pages and routing
- **Components** → `components/` — Reusable React components
- **Styles** → `app/globals.css` — Global styles and theming
- **Config** → `lib/site.ts` — Site-wide settings, routes, contact info
- **Public assets** → `public/` — Images, logos, OG meta
- **Standalone forms** → Root level (`.html` files) — Lead & Instructor application forms

---

## Key Pages & Routes

| Page | Route | Purpose | Form Integration |
|------|-------|---------|-------------------|
| Homepage | `/` | Hero, verticals, process, proof | Lead form (`DiscoveryCta` component) |
| Active Adult 55+ | `/active-adult-55-plus-communities/` | Vertical-specific positioning | Lead form |
| Senior Assisted Living | `/senior-assisted-living/` | Vertical-specific positioning | Lead form |
| Schedule Discovery Call | `/schedule-a-discovery-call/` | Form entry point | Lead form (primary) |
| About | `/about/` | Team, credibility, story | Lead form |
| Privacy | `/privacy/` | Privacy policy | N/A |
| Accessibility | `/accessibility/` | Accessibility statement | N/A |
| Thank You | `/thank-you/` | Post-submission confirmation | N/A |

---

## Form Files & Integration Status

### Lead Form (Discovery Call)
- **File:** `ascend-onsite-lead-form.html` (standalone modal form)
- **Launcher button text:** "Partner With Us"
- **Submit button:** "Request a discovery call"
- **Airtable table:** `Leads` (tbl8SVy8Qxy1pe8IS)
- **Integration method:** Embedded as standalone HTML overlay
- **Locations on site:**
  - Homepage hero (CTA marked with `id="cta-discovery-a-home-hero"`)
  - Scope section (CTA marked with `id="cta-discovery-a-home-scope"`)
  - All vertical pages
  - Footer ("Schedule a Discovery Call" link → `/schedule-a-discovery-call/`)
  - Final CTA section (component: `FinalCta`)

**Status:** Ready to integrate. Airtable token needed.

### Instructor Application Form
- **File:** `ascend-onsite-instructor-form.html` (standalone modal form)
- **Launcher button text:** "Instructor Application" (needs to be set)
- **Submit button:** "Submit Application"
- **Airtable table:** `Instructors` (tblAdzkqEDTWjAfUH)
- **Integration method:** Embedded as standalone HTML overlay
- **Intended location:** Footer, near "Contact Us" section

**Status:** Ready to integrate. Needs to be added to footer component. Airtable token needed.

---

## Component Architecture

### Key Components

| Component | File | Purpose |
|-----------|------|---------|
| `DiscoveryCta` | `components/discovery-cta.tsx` | Lead form CTA button (used throughout site) |
| `FinalCta` | `components/final-cta.tsx` | Bottom-of-page conversion CTA |
| `SiteFooter` | `components/site-footer.tsx` | Site footer (instructor button should go here) |
| `SiteShell` | `components/site-shell.tsx` | Layout wrapper with header/footer |
| `SiteHeader` | `components/site-header.tsx` | Top navigation |

### Form Components
- Lead form is a standalone HTML file with embedded React-free modal (vanilla JS)
- Instructor form is a standalone HTML file with embedded React-free modal (vanilla JS)
- Both can be embedded directly into the Next.js pages via iframe or script injection

---

## Configuration & Secrets

**Site-wide config:** `lib/site.ts`
- `publicEmail` — Contact email address
- `discoveryRoute` — Link to discovery call page
- `serviceRegion` — Service area text
- `serviceCounties` — Counties served (for SEO)
- `productionOrigin` — Full domain URL

**Airtable Integration**
Both forms need Airtable credentials to be added to the HTML files:
- Token: Personal Access Token (scoped to On-Site base, data.records:write only)
- Base ID: `app4rYzpkUqKmCpv9` (On-Site)
- Lead form table ID: `tbl8SVy8Qxy1pe8IS`
- Instructor form table ID: `tblAdzkqEDTWjAfUH`

Currently set to placeholder: `"PASTE_YOUR_SCOPED_AIRTABLE_TOKEN_HERE"`

---

## Development

```bash
# Install dependencies
npm ci

# Start dev server
npm run dev

# Preview at http://localhost:3000

# Build for production
npm run build

# Run all checks (lint, test, build)
npm run check
```

---

## Form Integration Checklist

### Lead Form
- [x] HTML file created and styled
- [x] Airtable table created (`Leads`)
- [ ] Form embedded in page or linked to `/schedule-a-discovery-call/`
- [ ] Airtable token added to form
- [ ] Test submission end-to-end
- [ ] Success message displays correctly

### Instructor Form  
- [x] HTML file created and styled
- [x] Airtable table created (`Instructors`)
- [ ] Button added to footer component with text "Instructor Application"
- [ ] Form embedded/linked on site
- [ ] Airtable token added to form
- [ ] Test submission end-to-end
- [ ] Success message displays correctly

---

## Deployment

**Platform:** GitHub (pending setup)
**Hosting:** (TBD — Vercel recommended for Next.js)
**Domain:** ascendonsite.com (configured in metadata)

### Pre-launch checklist
- [ ] Airtable tokens configured for both forms
- [ ] Production domain configured
- [ ] SEO/OG images optimized
- [ ] Forms tested end-to-end
- [ ] Analytics configured
- [ ] Privacy policy reviewed and finalized
- [ ] Spam protection enabled (optional: CAPTCHA, honeypot)
- [ ] GitHub repo initialized
- [ ] GitHub secrets configured (Airtable tokens)
- [ ] CI/CD pipeline set up
- [ ] Production build tested
- [ ] Domain SSL verified

---

## Next Steps

1. **Integrate lead form** into `/schedule-a-discovery-call/` page or embed globally
2. **Add instructor button** to footer component
3. **Configure Airtable tokens** in both forms
4. **Test both forms** with real Airtable submissions
5. **Initialize GitHub repo** and push all files
6. **Set up CI/CD** and configure deployment
7. **Go live** on ascendonsite.com

---

## File Locations

```
ascend-onsite Website Files/
├── app/                           # Next.js routes & pages
│   ├── layout.tsx
│   ├── page.tsx                   # Homepage
│   ├── about/page.tsx
│   ├── active-adult-55-plus-communities/page.tsx
│   ├── senior-assisted-living/page.tsx
│   ├── schedule-a-discovery-call/page.tsx
│   ├── thank-you/page.tsx
│   ├── privacy/page.tsx
│   ├── accessibility/page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/                    # Reusable components
│   ├── site-header.tsx
│   ├── site-footer.tsx            # ← Add instructor button here
│   ├── discovery-cta.tsx
│   ├── final-cta.tsx
│   ├── site-shell.tsx
│   └── ...
├── lib/
│   └── site.ts                    # Configuration
├── app/
│   └── globals.css                # Global styles
├── public/                        # Static assets
│   ├── ascend-logo-white-full.png
│   ├── ascend-mark.png
│   ├── og.png
│   └── ...
├── ascend-onsite-lead-form.html   # ← Standalone form
├── ascend-onsite-instructor-form.html # ← Standalone form
├── README.md
├── package.json
└── vite.config.ts
```

---

## Quick Commands for Common Tasks

### Add new page
1. Create `app/new-route/page.tsx`
2. Wrap with `<SiteShell>` component
3. Add route to `lib/site.ts` if navigation is needed

### Update footer
Edit `components/site-footer.tsx` — add instructor button in Contact Us section

### Update global styles
Edit `app/globals.css` — all typography, colors, spacing

### Test forms
Open `ascend-onsite-lead-form.html` or `ascend-onsite-instructor-form.html` directly in browser

---

## Troubleshooting

**Forms not submitting?** → Check Airtable token in the HTML file (search for `AIRTABLE_TOKEN`)

**Styles not matching?** → Verify Manrope font is loaded in CSS and tailwind config

**Build errors?** → Run `npm ci` to reinstall exact dependencies

**Page not rendering?** → Check that component is wrapped in `<SiteShell>` and exported as default

---

**Last updated:** August 31, 2026  
**Maintained by:** Development team
