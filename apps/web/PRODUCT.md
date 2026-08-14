# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are Bangladeshi product, business analysis, marketing, design, and analytics professionals:

- **Prospective members (visitors)** — evaluating whether the community is active and worth joining before signing up.
- **Members** — the core community; sign in with Google or LinkedIn (no passwords). Attend/register for Events, book Mentorship, enter Contests, submit Articles/Case Studies/Products, follow other members and teams.
- **Mentors** — a capability (a "Mentor badge"), not a separate account type. Any Admin or Member can be granted the badge, unlocking: speaking at Events / judging Contests, publishing Articles/Case Studies without approval, and (with a separate "Mentorship-eligible" flag) being booked for 1:1 sessions.
- **Admins** (day-to-day operators) and one **Super Admin** — run the platform, approve submissions, manage Events/Contests/Sponsors, finalize Contest winners.
- **Sponsors** — shown publicly grouped by tier (Title, Gold, Platinum, etc.) on Events/Contests/Sponsors page; also a lead-gen audience via the Sponsor Us contact form.

## Product Purpose

Product Peers BD (PPBD) is Bangladesh's community for product, business, marketing, design, and analytics professionals, founded October 2025. Today the community runs on LinkedIn posts, Google Forms, WhatsApp, and spreadsheets. This website replaces that ad-hoc setup with one structured platform to:

1. **Prove PPBD is active** — showcasing events run, upcoming sessions, member count, and past work.
2. **Run actual community operations** — event RSVPs, mentor bookings, contest entries, article/case study submissions.
3. **Produce visible proof of work** — case studies, articles, and recaps that double as content marketing.

Success means visitors convert to members, members actually use the operational features (not just browse), and the site's own output (case studies, articles, event recaps) becomes credible proof of the community's activity.

## Positioning

A neighboring product (a generic events platform, a generic community forum, or a generic mentorship marketplace) could not truthfully copy this: PPBD combines event management, 1:1 mentorship booking, team-based contests with judging, and a peer-reviewed content system (Articles/Case Studies with Admin approval and a "Curated Content" spotlight) into one platform purpose-built for a single niche professional community in Bangladesh — not a general-purpose tool rented by many unrelated communities.

## Operating Context

- **8 core features**: Events, Contests, Case Studies, Articles, Mentorship, Products, Sponsor Us, Contact Us.
- **apps/web scope**: 21 of 22 public landing pages fully specced (`docs/requirements/landing-pages/`) — Home, About Us, Contact Us, Sponsors, Events (list + detail), Contests (list + detail), Case Studies (list + detail), Mentorship, Articles (list + detail), Products (list + detail), Join Community, public profiles (`/u/{username}` and `/t/{teamSlug}`), Register, Login, Terms & Privacy. Global Search is deferred, not built this release.
- **apps/web also hosts the logged-in Member Dashboard**: 12 pages fully specced (`docs/requirements/member-dashboard/`) — overview, profile settings, payment/event/contest history, a content Library (Case Studies/Articles/Products drafts + bookmarks), Mentorship Sessions (mentee bookings + mentor request inbox for eligible mentors), and Contest Judging for badge-holding judges.
- **apps/dashboard** is the separate Admin/Super Admin app (40 pages specced) — out of scope for apps/web work.
- Every publicly addressable entity (Events, Contests, Sponsors, Articles, Case Studies, etc.) gets a backend-generated slug; every user/team gets a public profile URL.
- Rich content (Event/Contest descriptions, Articles, Case Studies) is authored in a shared Tiptap-based rich text editor, persisted as JSON.

## Capabilities and Constraints

- **Auth**: Google/LinkedIn OAuth only — no password flows to design for.
- **Payments**: Bkash only for now (Event registration, paid Mentorship sessions), built behind a pluggable provider interface.
- **Submissions and approval**: Members' Articles/Case Studies/Products need one-time Admin approval before publishing; Mentor-badge holders and Admins publish directly. Once approved, editing is free (no re-approval per edit, this phase).
- **Contests**: Admin creates contests and assigns individuals into teams; Mentor-badge holders judge; only Admin finalizes and publishes winners; Admin controls whether scores are shown publicly.
- **Mentorship**: mentors set weekly availability + fixed session length; Members request a slot; mentor accepts (with meeting link) or declines; payment (if any) collected only on acceptance.
- **No background jobs for scheduled visibility** — publish/registration-open timing is computed at read time, not via cron.
- **Deferred, not this phase**: Waitlists, multi-factor Contest scoring + public leaderboard, auto-generated Case Studies from Contest winners, per-edit re-approval/change history, Mentorship ratings, Product DMs/reviews, personalized activity feed, site-wide search.

## Brand Commitments

- Name: **Product Peers BD**, short name **PPBD**.
- Tagline: "Bangladesh's community for product people."
- Description: "Events, mentorship, contests, and real case studies — run by product, business, design, and analytics professionals across Bangladesh."
- Real logo assets exist at `apps/web/public/logo/` (mark, light/dark lockups) and `apps/web/components/snippets/logo/logo.tsx`.
- Founded October 2025; community claims 1,000+ members (per `docs/requirements/project-summary.md`) — treat as directional business context, not a verified live figure (see Evidence on Hand).

## Evidence on Hand

- **No real evidence is available yet.** All content currently in `apps/web/constants/home.ts` — member/event/contest counts, mentor names, case study titles and clients, article titles/authors, product listings — is fabricated placeholder data for development, not real proof. Future work must not treat any of it as a real testimonial, statistic, or case study, and must not fabricate new ones beyond what's explicitly provided.
- Social links in `apps/web/configs/footer.ts` (linkedin.com, facebook.com, youtube.com) are also placeholders, not PPBD's real handles.
- Real logo/brand assets do exist (see Brand Commitments) — these are the one confirmed real asset class today.

## Product Principles

1. **Prove activity before asking for commitment.** Visitor-facing pages (Home, About, Events, Case Studies) exist to demonstrate the community is real and active — design and content choices should favor concrete, specific proof over generic claims, once real evidence exists.
2. **Operational features are the product, not a bolt-on.** Registration, booking, judging, and submission flows are core, everyday-use surfaces for Members — treat them with the same care as the marketing pages, not as an afterthought.
3. **Approval gates protect quality without blocking Mentors/Admins.** The Member-approval / Mentor-badge-bypass pattern recurs across Articles, Case Studies, and Products — preserve this distinction rather than flattening all submitters into one flow.
4. **One community, one platform.** Every feature serves the same single Bangladeshi professional community — avoid designing any part of apps/web as if it were a general-purpose, multi-tenant product.
5. **Don't fabricate proof.** Given no real evidence is on hand yet, placeholder content must stay clearly placeholder-shaped and easy to swap, not dressed up as authentic testimonials or stats.

## Accessibility & Inclusion

Target: **WCAG 2.1 AA**. No additional site-specific user accessibility need has been documented beyond this baseline standard.
