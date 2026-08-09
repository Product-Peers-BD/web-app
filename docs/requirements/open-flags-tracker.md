# Open Flags — Tracking Sheet

> Consolidated list of every unresolved `*(Flag: ...)*` note left across the Landing Pages and Member Dashboard docs, so they can be worked through one by one instead of hunting file-by-file. Check items off as we resolve them in conversation, then I'll fold the decision back into the source doc and remove the flag.

**0 open flags — everything is resolved as of 2026-08-01.** 🎉 Kept below as a historical record of every decision made; nothing left to action.

- [x] ~~`landing-pages/home.md` — Stats/Social Proof Bar exact metric set~~ → resolved, **expanded to 8 metrics**: Total Members, Events Hosted, Contests Held, Mentors Available, Articles Published, Case Studies Published, 1:1 Mentor Sessions, Products Listed. Shared 1:1 by `about-us.md` and `static-pages.md` (Join Community). Noted in `home.md` that 8 metrics likely needs a scrollable/wrapping layout rather than a single fixed strip — a design-phase detail.

---

## Landing Pages

### `landing-pages/about-us.md` — ✅ all resolved (2026-08-01)

- [x] ~~No Guest/Member personalization~~ → confirmed, page stays mostly static.
- [x] ~~Stats manually entered~~ → **changed**: now pulls from the same live source as Home's Stats bar (no manual entry, no drift).
- [x] ~~Team block standalone~~ → **changed**: now a picker of existing platform users (photo/name pulled live from their profile) + an About-specific caption, linking to their real `/u/{username}`.
- [x] ~~Join CTA shown to everyone~~ → **changed**: now Guest-only, hidden for logged-in Members, matching Home.
- [x] ~~Fixed section order, no Customizer~~ → **changed**: the Home Page Customizer is now extended to also manage About's section order/visibility (see `home.md`, also updated).
- [x] ~~Should About's Stats mirror Home's exact metric set 1:1~~ → confirmed, 1:1 mirror.
- [x] ~~Should a linked Team member's live Bio/Social Links show on the About card~~ → confirmed **no** — card shows only Photo, Name, and Admin-entered Designation (e.g. "Founder", "Head of Marketing"); Bio/Social Links stay on the person's own profile.

### `landing-pages/static-pages.md` — ✅ all resolved (2026-08-01)

- [x] ~~Contact Us: no email verification for Guests~~ → confirmed, CAPTCHA/honeypot only.
- [x] ~~Sponsors: data source~~ → **changed**: no Current/Past split at all — shows the full master Sponsor list regardless of Event/Contest attachment (this is also how general platform sponsors, e.g. IT/hosting partners or T-shirt sponsors, get shown). `Featured on Homepage` renamed to plain **`Featured`**, now pins sponsors at the top of this page too, not just Home.
- [x] ~~Sponsors: CTA pre-fill~~ → confirmed, query-param pre-select.
- [x] ~~Join Community: Benefits as own block~~ → **changed**: reuses About's Values entity directly (shared data).
- [x] ~~Join Community: Stats duplicated~~ → same resolution as About's Stats flag — shared live source with Home.
- [x] ~~Join Community: FAQ~~ → included, but static/hardcoded copy, not Admin-manageable this phase.
- [x] ~~Join Community: not login-gated~~ → **changed**: Guest-only, Members redirected to Dashboard Overview if they land here.
- [x] ~~Register: no forced onboarding~~ → confirmed.
- [x] ~~Login: scoping assumption~~ → confirmed.
- [x] ~~Terms/Privacy: editability~~ → **changed/expanded**: built via a new **Static/CMS Pages** feature (Admin Page CRUD — Title/Slug/Content/Draft-Published), added to `shared-features.md`. Terms & Privacy are just the first two Pages created through it.

### `landing-pages/public-profiles.md` — ✅ all resolved (2026-08-01)

- [x] ~~Content tab: only `Published` items shown~~ → confirmed.
- [x] ~~Contests tab: reuses Team snapshot data~~ → confirmed.
- [x] ~~Members: no visibility toggle~~ → confirmed.

### `landing-pages/events-page.md` — ✅ all resolved (2026-08-01)

- [x] ~~Upcoming/Past tabs~~ → **changed**: no tabs — a Status filter (Upcoming/Ongoing/Past) instead, default view shows all events combined (Ongoing → Upcoming soonest-first → Past most-recent-first), with a status badge on each card.
- [x] ~~Free-text search~~ → confirmed, Title only.
- [x] ~~Pagination style~~ → confirmed, Load More.

### `landing-pages/single-event-details.md` — ✅ all resolved (2026-08-01)

- [x] ~~Registration panel state machine~~ → confirmed correct.
- [x] ~~⚠ Member self-cancellation of Event registration~~ → **resolved as NO** (reversing the earlier informal "yes" in `history-pages.md`, which has now been corrected to match). Members cannot self-cancel Events or Contests — only Admin can, from the dashboard, triggered by the Member contacting them directly (WhatsApp/Contact form/phone).

### `landing-pages/contests-page.md` — ✅ all resolved (2026-08-01)

- [x] ~~Whole listing structure is a new decision~~ → confirmed, modeled after Events; also updated to mirror Events' resolved Status-filter pattern (no tabs) for actual consistency.
- [x] ~~Free-text search~~ → confirmed, Title only, not Description.

### `landing-pages/single-contest-details.md` — ✅ all resolved (2026-08-01)

- [x] ~~Judges shown publicly~~ → confirmed.

### `landing-pages/case-studies-page.md` — ✅ all resolved (2026-08-01)

- [x] ~~Tools/Stack not filterable~~ → confirmed.
- [x] ~~Free-text search~~ → confirmed, scoped to Title + Client/Company Name.

### `landing-pages/single-case-study-details.md` — ✅ all resolved (2026-08-01)

- [x] ~~Related content algorithm~~ → resolved with a tiered query: shared Product/Contest → same Category → shared Industry → recency fallback. Also synced back to `articles-and-case-studies-requirements.md`.

### `landing-pages/single-article-details.md` — ✅ all resolved (2026-08-01)

- [x] ~~Related content algorithm~~ → resolved with a tiered query: same Category+author → same Category → same author → recency fallback. Also synced back to `articles-and-case-studies-requirements.md`.

### `landing-pages/mentorship-page.md` — ✅ all resolved (2026-08-01)

- [x] ~~Pagination style~~ → confirmed, Load More.
- [x] ~~Booking flow entry point~~ → confirmed, right-side drawer (not modal), same pattern as Contest Judging.

### `landing-pages/articles-page.md` — ✅ all resolved (2026-08-01)

- [x] ~~Curated Picks ordering~~ → confirmed, most-recently-published first, no drag-and-drop.
- [x] ~~Author filter~~ → confirmed, multi-select (one or multiple authors).
- [x] ~~Free-text search~~ → confirmed, Title only.

### `landing-pages/products-listing-page.md` — ✅ all resolved (2026-08-01)

- [x] ~~Sort options~~ → confirmed, Latest / Oldest / Most Popular.
- [x] ~~Free-text search~~ → confirmed, Product Name only.
- [x] ~~Stage badge on card~~ → confirmed.

## Core Feature Docs

### `products-requirements.md` — ✅ resolved (2026-08-01)

- [x] ~~Stage enum: add `IDEA`~~ → confirmed, enum is now `IDEA` / `MVP` / `BETA` / `LIVE`.
- [x] ~~Stage enum: add a terminal `PAUSED`/`SUNSET` state?~~ → confirmed, both added as distinct values: full enum is `IDEA` / `MVP` / `BETA` / `LIVE` / `PAUSED` / `SUNSET`.

---

## Member Dashboard

### `member-dashboard/profile-settings.md` — ✅ resolved (2026-08-01)

- [x] ~~No account deletion/deactivation flow~~ → confirmed **future phase**, not built in this initial development phase.

### `member-dashboard/history-pages.md` — ✅ all resolved (2026-08-01)

- [x] ~~Payment status enum~~ → resolved: `Pending` / `Paid` / `Failed` / `Refunded` (reserved for the future refund feature), independent of the existing `manual`/`gateway` tag.
- [x] ~~Event registration self-cancellation~~ → **resolved as NO**, see `single-event-details.md` above — doc corrected to match.
- [x] ~~Event attendance tracking~~ → confirmed, doesn't exist this phase.
- [x] ~~Team's private score/ranking view~~ → confirmed, always shown regardless of public visibility toggles.

### `member-dashboard/content-library.md` — ✅ resolved (2026-08-01)

- [x] ~~Products create/edit form~~ → confirmed, cross-reference to `products-requirements.md` is sufficient.

### `member-dashboard/mentorship-sessions.md` — ✅ all resolved (2026-08-01)

- [x] ~~Withdraw a still-`Requested` booking~~ → confirmed allowed.
- [x] ~~Mentor earnings view~~ → confirmed simpler option: just filtered Payment/Transaction records, no separate summary/payout mechanism.

---

## Notes

- Items marked ⚠ indicate a known cross-file inconsistency (a decision made in one doc that hasn't been synced back to where the original flag lives).
- "New addition" flags (search bars, sort, pagination) are generally low-stakes UX conveniences added on top of the original feature docs — good candidates to batch-confirm quickly rather than debate individually.
- Once a flag is resolved, I'll update the source `.md` file directly (removing the flag or converting it to a confirmed decision) rather than just noting it here.
