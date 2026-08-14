# Product Peers BD — Website Requirements Summary

_A consolidated overview of product/business requirements decided so far, for management and product/project stakeholders. Technical implementation details are intentionally kept light — this is a decisions summary, not an engineering spec._

---

## 1. Project Context

Product Peers BD (PPBD) is Bangladesh's community for product, business analysis, marketing, design, and analytics professionals — founded October 2025, 1,000+ members. Today the community runs on LinkedIn posts, Google Forms, WhatsApp, and spreadsheets. This website replaces that ad-hoc setup with one structured platform that:

1. **Proves PPBD is active** — showcasing events run, upcoming sessions, member count, and past work.
2. **Runs actual community operations** — event RSVPs, mentor bookings, contest entries, article/case study submissions.
3. **Produces visible proof of work** — case studies, articles, and recaps that double as content marketing.

**User types**: Members, Prospective members (visitors), Mentors (a capability, not a separate account type — see Section 3), Admins, and Sponsors.

---

## 2. Core Features

| Feature      | What it is                                                               |
| ------------ | ------------------------------------------------------------------------ |
| Events       | Mentor Sessions, Panel Discussions, Community Adda, Meetups              |
| Contests     | Team-based competitions with judging and winners                         |
| Case Studies | In-depth write-ups of real projects/outcomes                             |
| Articles     | Member/mentor-written content, with a "Curated Content" spotlight system |
| Mentorship   | 1:1 mentor booking system                                                |
| Products     | Directory of member-built products                                       |
| Sponsor Us   | Sponsor showcase + inquiry page                                          |
| Contact Us   | General inquiry / sponsorship contact form                               |

---

## 3. People & Roles

Three account types: **Super Admin** (one, created at setup, full control), **Admin** (day-to-day operators), **Member** (the community). Members sign in with Google or LinkedIn — no passwords to manage or reset.

**"Mentor" is a capability, not a separate account** — any Admin or Member can be granted a "Mentor badge" by an Admin (or can request it, if Admins choose to allow self-applications). Holding the badge lets someone:

- Speak at Events or judge Contests.
- Publish Articles/Case Studies without needing approval first.
- Be booked for 1:1 Mentorship sessions (once separately approved as "Mentorship-eligible" — a deliberate second check, since not every mentor wants to take bookings).

Every user gets one public profile page (bio, photo, skills, work experience, social links) at a simple URL based on their username. Teams (from Contests) get their own public profile too. Both support a "Follow" button and a public activity timeline (contests attended/won, events spoken at, articles published, etc.).

---

## 4. Feature Highlights

### Events

- Four formats — Mentor Sessions, Panel Discussions, Community Adda, Meetups — all created manually by Admin.
- Optional registration (free or paid via Bkash), with capacity limits.
- Scheduled publishing, speaker lineups, FAQs, image galleries, sponsor showcases.
- A discussion thread per event.
- Registration can open immediately or on a scheduled date with a countdown.

### Contests

- Team-based competitions. Admin creates contests and manages team rosters.
- Individuals register; Admin assigns them into teams (with size limits and a designated leader).
- Teams submit their work (title, summary, prototype link, presentation, etc.) before the deadline.
- Assigned Mentor-badge holders act as judges — scoring submissions, leaving private feedback, and discussing internally.
- Only **Admin** finalizes winners and publishes results.
- Winner tiers (Champion, Runner-up, etc.) support ties.
- Admin controls whether scores/rankings are shown publicly.

### Case Studies

- In-depth write-ups of real projects/outcomes, sharing the same editor and review system as Articles.
- Members' submissions need one-time Admin approval before publishing; Mentor-badge holders and Admins publish directly.
- Supports likes, bookmarks, comments, view counts, estimated read time, and social sharing.
- Adds project-specific fields — client name, industry, tools used, problem solved.
- Can link to related Products or Contests.

### Articles

- Member/mentor-written content, sharing the same editor and review system as Case Studies.
- Members' submissions need one-time Admin approval before publishing; Mentor-badge holders and Admins publish directly.
- Supports likes, bookmarks, comments, view counts, estimated read time, and social sharing.
- Adds a **"Curated Content"** flag — Admin (or the author, if a Mentor) can spotlight standout articles, shown with a badge on the public article grid.

### Mentorship

- A dedicated 1:1 booking system, separate from Events.
- Only Mentor-badge holders who are separately marked "Mentorship-eligible" can be booked.
- Mentors set a weekly availability pattern and a fixed session length; Members request a slot, and the mentor accepts (sharing a meeting link) or declines.
- Sessions can be free or paid — controlled by a platform-wide setting with per-mentor overrides — with payment collected only once the mentor accepts, avoiding refund complexity.
- Phase 1 keeps this intentionally simple (manual completion marking, no ratings yet) with room to expand later.

### Products

- A directory where community members showcase what they're building.
- Anyone can submit a listing (name, banner, gallery, industry, stage — Idea/MVP/Beta/Live, tools, problem solved).
- Admin reviews Member and Mentor submissions before publishing (Admin's own listings publish directly).
- Listings support a company/team section where invited collaborators must accept before appearing publicly.
- Likes, comments, view counts, and an Admin-curated "Featured" flag.
- Case Studies can optionally link to a Product, and the product owner chooses which of those Case Studies to showcase on their listing.

### Sponsor Us & Contact Us

- Sponsors and sponsorship "tiers" (Title, Gold, Platinum, etc.) are managed centrally and attached to individual Events/Contests as needed — shown publicly grouped by tier.
- A simple contact form (General Inquiry or Sponsorship) captures leads for Admin to triage, with spam protection, search, and CSV export.

---

## 5. Shared Technical Building Blocks

A handful of features work behind the scenes across everything above — built once, reused everywhere, rather than rebuilt per feature:

- **Rich Text Editor** — used for all long-form content (Event/Contest descriptions, Articles, Case Studies).
- **Media Library** — a single place to upload and manage images/files, reused across every feature that needs them.
- **Discussion Threads & Comments** — powers Event/Contest discussion boards and direct comments on Articles/Case Studies/Products.
- **Payments** — currently Bkash only, built so additional payment methods can be added later without reworking Events, Contests, or Mentorship.
- **Follow System** — following Users and Teams, with follower counts (a future phase will add a personalized activity feed on top of this).

---

## 6. What's Intentionally Deferred (Not This Phase)

To keep the initial release focused, the following were explicitly discussed and pushed to a future phase:

- Waitlists for sold-out Events.
- Criteria-based (multi-factor) Contest scoring, and a public leaderboard.
- Auto-generating Case Studies from Contest-winning submissions.
- Per-edit re-approval and change history for Articles/Case Studies/Products (currently: one-time approval, then free editing).
- Ratings/feedback on completed Mentorship sessions.
- Direct messaging/queries to Product owners, and product reviews.
- A personalized activity feed based on who/what a user follows.
- Site-wide search across all content types.

### Future phase — new feature ideas (not yet scoped or specced)

Beyond refinements to the 8 core features above, the following larger additions have been noted as candidates for a future phase, once the current release is live:

- **Community Forum** — general discussion space beyond Event/Contest Discussion threads.
- **Job Portal** — job listings for the community.
- **Portfolio Builder** — a dedicated tool for members to build/showcase a personal portfolio, beyond the existing Products directory and public profile.
- **Chat Integration** — direct messaging between members.
- **Courses** — structured learning content, distinct from Articles/Case Studies.
- **Enhanced Payment System** — additional gateways beyond Bkash (e.g. SSLCommerz), building on the pluggable payment-provider architecture already in place.

None of these are part of the current requirements documentation — they're noted here as directional intent for later, not committed scope.
