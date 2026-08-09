# Landing Pages: Static / Small Pages

> Part of `docs/requirements/landing-pages/` — grouped per the folder's convention: small/static pages together to avoid clutter. Covers 5 of the 22 indexed pages: Contact Us, Sponsors, Join Community, Register, Login. (Terms & Conditions and Privacy Policy moved to `shared-features.md` → Static/CMS Pages — they're records of a generic Admin feature now, not landing-page-specific content, so nothing page-layout-specific was left to document here.)

---

## 1. Contact Us

Business logic (form fields, submission handling, spam protection) is fully defined in `shared-features.md` → Contact Us — this section covers page layout only.

- **Hero**: short intro copy explaining what Contact Us is for.
- **Form**: Contact Type (General Inquiry / Sponsorship), Name, Email, Phone, Message — per `shared-features.md`.
- **Sidebar/secondary content** (optional): social links, general community email if one exists.
- **Success state**: after submission, show an on-page confirmation (not a redirect) — e.g. "Thanks, we'll get back to you soon."
- No personalization by login state — same form for Guest and Member (Member's account is captured server-side per existing spec, not via a different UI).
- No email verification step for Guests submitting the form — spam protection (CAPTCHA/honeypot) is the only gate, per existing spec.

---

## 2. Sponsors

Business logic (entity fields, Tier attachment) lives in `shared-features.md` → Sponsors — this section covers page layout, and resolves how sponsors are shown _independent_ of any single Event/Contest.

- **Sponsor showcase grid**: shows the **entire master Sponsor list** — every Sponsor Admin has created, full stop. **Not filtered by Event/Contest attachment at all.** This is the key fix: a Sponsor is a standalone record the moment Admin creates it; attaching it to an Event/Contest (via Tier) is optional, not a precondition for existing or being shown here. This naturally covers **general platform sponsors** — a web-hosting/IT-support partner, a community T-shirt sponsor, etc. — some of whom may never be attached to any Event/Contest, and others who might _also_ separately sponsor specific Events/Contests on top of their general platform support. Either way, they show up here the same: full attachment history isn't what gates visibility on this page.
- **Card fields**: logo, name, optional link to sponsor website (from Sponsor's `Sponsor Website URL` field).
- **Featured pinning**: the Sponsor field renamed **`Featured on Homepage` → `Featured`** (see `shared-features.md`, updated) now does double duty — Featured sponsors are pinned in a highlighted row at the top of this page, in addition to still populating Home's Sponsors Strip. One flag, two placements, no separate "which sponsors show where" logic to maintain.
- **No tier-grouping on this page** — unlike an Event/Contest's own details page, there's no single global tier ranking across all sponsors (Tier↔Sponsor pairing is scoped per Event/Contest, per `shared-features.md`). Flat grid here, not grouped by tier — this also sidesteps the "which tier does a general platform sponsor belong to" question entirely, since tiers simply don't apply outside an Event/Contest context.
- **"Become a Sponsor" CTA** → Contact Us page, pre-selecting Contact Type = "Sponsorship" on arrival (via query param, e.g. `?type=sponsorship`).
- **Deferred**: showing which specific Events/Contests a sponsor supported (a full sponsor history list) — out of scope this phase, simple logo grid only.

---

## 3. Join Community

A marketing/persuasion page distinct from the actual Register Page (#5 below) — answers "why join" before sending the visitor to sign up.

- **Hero**: headline + subheadline, primary CTA "Join Now" → Register Page.
- **Benefits / value props**: **reuses About's Values entity directly** — same repeatable list (icon, title, description), shared data, not a separately-maintained duplicate. Same resolution pattern as Stats below: one Admin-managed source, displayed on both pages.
- **Stats**: **same live source as Home's Stats bar / About's Stats section** — already resolved for About (`about-us.md`), same answer applies here. One shared live query, displayed on Home, About, and Join Community alike.
- **Testimonials**: reuse Home's Testimonials block/data (same Admin-managed list) — no separate entry needed, just re-displayed here.
- **FAQ**: included, but **totally static for now** — hardcoded copy in the page itself, not an Admin-manageable CRUD feature. If it later needs to become dynamic, it'd follow the same Q&A pattern as Event/Contest FAQ, but that's not built this phase.
- **Final CTA**: "Join Now" → Register Page.
- **Guest only** — hidden from logged-in Members. If a Member navigates here directly (e.g. an old bookmark), they're redirected to their Member Dashboard Overview rather than seeing Join Community content, consistent with the Join Community CTA elsewhere (Home, About) already being hidden for Members.

---

## 4. Register Page

- **OAuth buttons only**: "Continue with Google", "Continue with LinkedIn" — no email/password fields, consistent with `roles-and-auth.md`.
- **Legal consent**: checkbox or inline text — "By continuing you agree to our Terms & Conditions and Privacy Policy" with links to both.
- **Post-auth flow**: account + backend-generated username created automatically on first OAuth success; redirect to Member Dashboard (Overview page). No forced "complete your profile" onboarding step — Member fills in Bio/Skills/Experience/etc. later from Profile Settings whenever they choose.
- If the OAuth email/account already exists as a Member, this page transparently logs them in rather than erroring (standard OAuth upsert behavior).

---

## 5. Login Page

- **OAuth buttons only**: "Continue with Google", "Continue with LinkedIn" — same as Register; functionally these can be the same underlying action (OAuth upsert), just different page copy/framing ("Log In" vs "Join").
- No Forgot Password flow (no passwords exist) — confirmed in `progress-report.md`'s Resolved notes.
- This Login page belongs to `apps/web` (public site + Member Dashboard) and is for **Members only**. Admin/Super Admin login lives on `apps/dashboard` and is out of scope for the Landing Pages folder — not one of the 22 indexed pages.
- Post-login redirect: back to whatever page the user was on, or Member Dashboard Overview if they arrived directly at Login.

---

## Cross-feature dependencies

- **Rich Text Editor** (`packages/text-editor`) — Join Community's shared Values/Stats content (via About).
- **Media Library** — Sponsor logos (already uploaded via Sponsor entity, just displayed here).
- **Roles & Auth** (`roles-and-auth.md`) — Register/Login OAuth flow.
- **Contact Us** (`shared-features.md`) — Sponsors page's "Become a Sponsor" CTA target.
- **Static/CMS Pages** (`shared-features.md`) — Terms & Conditions, Privacy Policy live there now, not in this file. Register's legal-consent links point to those Pages.
- **About Us** (`about-us.md`) — Join Community's shared Values (Benefits) and Stats content.

## Deferred / explicitly out of scope for this phase

- Sponsor history (which Events/Contests a sponsor supported) on the Sponsors page.
- Making Join Community's FAQ Admin-manageable (static/hardcoded for now).
