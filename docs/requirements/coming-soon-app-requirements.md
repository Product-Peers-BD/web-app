# Coming Soon App

> New, standalone app — not part of the core product feature set tracked in `progress-report.md`. Temporary pre-launch placeholder for `productpeersbd.org`, retired once the production `apps/web` build goes live on that domain. Documented separately since it has its own lifecycle (built once, deployed, then deprecated) rather than an ongoing feature.

---

## 1. Purpose & lifecycle

- A single-page "coming soon" site that occupies the root domain **`productpeersbd.org`** before the main product (`apps/web`) is ready for production release.
- Once `apps/web` ships to production, this app is swapped out at the domain/DNS level and retired. No content migration needed — it never holds real user data.
- Public-facing and indexable — this **is** the live brand presence at the root domain during this period, not a staging/internal page. Must not be `noindex`; it's the first thing search engines and shared links will show for the brand.

## 2. Page content

Single route (`/`), no other pages except a fallback that renders the same content for any unknown path (no real 404 page needed — everything on this domain is this one page for now).

- **Logo** — Product Peers BD mark/lockup, light/dark variants (same assets as `apps/web/public/logo`, reused by copying into this app's own `public/` — see §4, apps don't share `public/`).
- **Headline** — "Coming Soon" (or equivalent), plus the existing tagline: _"Bangladesh's community for product people."_ (from `apps/web/configs/site.ts`).
- **Short description** — reuse `siteConfig.description`: _"Events, mentorship, contests, and real case studies — run by product, business, design, and analytics professionals across Bangladesh."_
- **Countdown timer** — **conditionally shown**:
    - No launch date has been locked yet. Until one is, the countdown is **not displayed at all** — show static "Launching soon" messaging instead.
    - Once a date is locked, the page displays a live days/hours/minutes/seconds countdown to it.
    - Implementation: a single config value (e.g. `NEXT_PUBLIC_LAUNCH_DATE`, ISO 8601, unset by default). Countdown UI renders only when this value is present and parses to a future date. No admin UI/backend needed to set it — it's a redeploy-time config change, consistent with this app having no backend.
- **Social links** — reuse `apps/web/configs/footer.ts`'s `socialLinks` (LinkedIn, Facebook, YouTube) so visitors can follow progress elsewhere in the meantime.
- **Contact / inquiry link** — `mailto:` link to `siteConfig.contactEmail` (`hello@productpeers.bd`) for partnership/press inquiries before launch. No contact form, no backend submission — this app makes no network calls (see §3).
- **Theming** — dark/light via `next-themes`, same pattern as `apps/web`/`apps/dashboard` (`d` hotkey toggle), using the shared `packages/ui` design tokens so the visual identity matches the eventual production site.
- **"What we're building" teaser** — one line beneath the description, to give visitors more than just "coming soon" if they land here cold.
- **SEO / social sharing** — proper `<title>`, meta description, and Open Graph/Twitter Card image, since this URL will get shared directly. The OG image is a distinct static asset (branded card), not a generic screenshot, since it's what renders when the link is shared on LinkedIn/Facebook/etc. Favicon reused from the existing brand favicon.

## 3. Explicitly out of scope for this app

- **No email capture / waitlist** — decided against for this phase. If added later, it would need a backend endpoint (`apps/api`) or a third-party embed, but that's not built now.
- **No backend calls of any kind** — the whole app is static (prerendered at build time, no runtime data fetching, no `apps/api` dependency).
- **No auth, no dashboard, no dynamic routes.**
- **No analytics** — decided against for this phase; no visit tracking during the pre-launch period.
- **No i18n** — single language (English), matching the rest of the product for now.

## 4. Technical / monorepo integration

Follows the same scaffold as `apps/web` and `apps/dashboard` (per root `CLAUDE.md` — Next.js 16, React 19, Tailwind v4, shared `@workspace/ui`), not a separate tech stack:

- **New workspace app**: `apps/coming-soon`.
- **Dev port**: `3600` (next free port after `web` 3300 / `dashboard` 3400 / `api` 3500).
- **Dependencies**: `@workspace/ui`, `next-themes`, `lucide-react` — same as `apps/web`. No `@workspace/api-services` or any data-fetching package, since there's nothing to fetch.
- **`next.config.ts`**: `transpilePackages: ['@workspace/ui']`, same as the other two apps.
- **`components.json`**: same shadcn config pointing at `packages/ui/src/components`, so any UI primitives (e.g. a Button for the contact link) come from the shared package rather than being reinvented.
- **Own `public/` assets**: apps don't share a `public/` folder, so the logo (mark + light/dark lockup SVGs) and favicon need to be copied into `apps/coming-soon/public/` at scaffold time.
- **Own `configs/site.ts` / `configs/footer.ts`**: content (site name, tagline, description, contact email, social links) is duplicated from `apps/web`'s configs rather than imported cross-app, since these are independent deployables. Acceptable duplication for a handful of static values on a short-lived app — not worth introducing a shared config package for this alone (would be reconsidered if a third app needed the same data).
- **Server Components / SSG**: entire page should be statically generated at build time — no client-side data fetching, minimal client JS (only what's needed for the countdown tick and theme toggle).
- Root `CLAUDE.md`'s Architecture section should get a new bullet for `apps/coming-soon` once it's scaffolded, consistent with how new workspace packages are already tracked there.

## 5. Deployment (flagged, not specified here)

- How `productpeersbd.org` DNS/hosting gets pointed at this app, and later cut over to production `apps/web`, is an infra/ops decision outside this document's scope. Flagging so it isn't forgotten: cutover needs to happen deliberately when `apps/web` is production-ready, not left running indefinitely.

## Resolved

- **Analytics**: no visit tracking on this app — decided against for this phase (see §3).
- **Launch date source**: a build-time env var (`NEXT_PUBLIC_LAUNCH_DATE`), no admin UI. Changing the date means a redeploy — accepted as fine given this app's short lifecycle (see §2, Countdown timer).
