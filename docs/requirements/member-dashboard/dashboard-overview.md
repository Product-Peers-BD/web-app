# Member Dashboard: Overview

> Part of `docs/requirements/member-dashboard/` — see `README.md` in this folder for the full page index.

## Purpose

Landing page after login — a personalized summary + navigation hub into the rest of the dashboard.

## Sections

### 1. Greeting

- "Welcome back, {first name}" — same contextual-upcoming logic as Home's Hero (if an Event/Mentorship session is within 48 hours, surface that instead, per `home.md`).

### 2. Quick stats cards

- Upcoming registered Events (count)
- Upcoming Mentorship sessions (count, as mentee)
- Active Contest participations (count)
- Content in Pending Review (count, across Articles/Case Studies/Products)
- Follower count (from Follow System)

### 3. Quick links

- Profile Settings, Payment History, Event History, Contest History, Library.

### 4. Mentor Tools (conditional — only if the Member holds the Mentor badge)

- Speaker assignments (upcoming Events where they're listed as Speaker).
- Judge assignments (Contests where they're an assigned Judge) — full judging workflow (team list, scoring, Judge Feedback, assignee) now lives on the dedicated **Contest Judging** page (`judging.md`); this section just links there with a count badge.
- If also **Mentorship-eligible**: incoming session request inbox and upcoming confirmed sessions — full management now lives on the dedicated **Mentorship Sessions** page (`mentorship-sessions.md`); this section just links there with a count badge.

### 5. Personal activity feed

- A private version of the public Activities Timeline (`roles-and-auth.md`), extended to include non-public states too — e.g. "Your Article is in Pending Review", "Your Case Study was Rejected — see reason", "Your Product submission was Blocked." Latest-to-oldest by default, same as the public timeline's default ordering.

## Structural gaps — resolved

Two gaps were surfaced while drafting this page; both are now resolved:

1. **Mentorship Sessions** — added as a dedicated **11th page**, `mentorship-sessions.md` (mentee booking history/cancel + mentor request inbox/availability for eligible mentors). Folder index updated accordingly.
2. **Products submissions** — folded into the Library page as a **My Products** tab, see `content-library.md`.

**Still open:**

- **Notifications** — no notification system is speced anywhere in the project yet (email, in-app, or otherwise). Booking accept/deny, Article rejection, Contest results, etc. all imply _some_ notification mechanism eventually. Not building this now, just flagging that the Overview's "what needs your attention" framing assumes notifications will eventually reinforce it.

## Cross-feature dependencies

- **Events, Contests, Mentorship, Articles/Case Studies, Products** — all contribute counts/links here.
- **Follow System** (`shared-features.md`) — follower count.
- **Roles & Auth** (`roles-and-auth.md`) — Mentor badge gating for Mentor Tools section.

## Deferred / explicitly out of scope for this phase

- Full notification system.
