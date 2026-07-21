# Feature: Contests

## Overview

Contests are a **completely separate feature from Case Studies** — no combined data model. A future phase may add a connection to auto-generate a Case Study for contest winners, and a future phase may add a leaderboard. Neither exists in this development phase.

Admin can create one or multiple contests. Contests are inherently **team-based competitions**, but individuals register; team assembly is a separate admin-driven process (see **Teams**).

---

## Contest — fields & lifecycle

| Field                            | Notes                                                                                                                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contest Title                    |                                                                                                                                                                                                                             |
| Contest Banner                   |                                                                                                                                                                                                                             |
| Description                      | Same logic as Event (Tiptap editor, JSON output)                                                                                                                                                                            |
| Judges                           | Admin selects one or more Mentors as Judges — same logic as Event Speakers, but with no session-related info (no topic/duration/start-end time)                                                                             |
| Contest Start Date/Time          |                                                                                                                                                                                                                             |
| Contest End Date/Time            |                                                                                                                                                                                                                             |
| Contest Result Publish Date/Time | Publicly visible target date; admin can change it any time up until the result is actually published. Publishing itself is a manual, separate action (see **Winner Selection**) — this date does not auto-publish anything. |
| Format                           | Same logic as Event (Online / Physical / Hybrid)                                                                                                                                                                            |
| Venue details                    | Same as Event; applicable if Format is Physical/Hybrid                                                                                                                                                                      |
| Videos                           | Same as Event                                                                                                                                                                                                               |
| Image Gallery                    | Same as Event (via Media Library)                                                                                                                                                                                           |
| FAQ                              | Same as Event                                                                                                                                                                                                               |
| Discussions                      | Same as Event — see **Discussions** below                                                                                                                                                                                   |
| Sponsors                         | Add one or more Tiers, and one or more Sponsors under each Tier. See `shared-features.md` → Sponsors.                                                                                                                       |
| Publishing Status                | Same logic as Event, including scheduled publish (Draft → Published, with optional `scheduled_publish_at`, computed at read-time, no background job)                                                                        |
| Registration Questions           | Same logic as Event                                                                                                                                                                                                         |

### Registration

- Same flow as Event, **except a Contest always requires registration** (no `has_registration` toggle — it's implicitly always on). This includes Event's `registration_start_at` countdown/scheduled-open behavior and the WhatsApp/phone requirement.
- Payment (`is_premium`): same logic as Event (Bkash, invoice, free vs paid).
- Capacity: optional. If set, caps the number of **individually registered participants**; if unset, unlimited. No waitlist feature for contests.

### Discussions (per contest)

Same logic as Event's Discussions:

- Admin or any authenticated platform user can start a thread (lightweight, "minimalistic Facebook post" style).
- User-created threads require **admin approval** before appearing.
- Admin-created threads can be marked **Announcement**.
- Admin can **pin** any thread.
- Admin can **unapprove** a previously-approved thread, and can **edit or delete** any thread.
- Threads support **top-level comments**, each with **one level of replies** (no nested replies-to-replies).
- Users can **@mention** other users by username within a comment or reply.
- A comment or reply can have **up to 3 images** attached; a Discussion thread (the original post) can have **up to 5 images** attached.
- Discussion threads are powered by the shared **Thread system** package; comments/replies are powered by the separate **Global Commenting system** package — same as Events (see `docs/requirements/events.md`).

---

## Teams

Teams are an **admin-managed construct**, independent of any single contest — they can be created at any time, not only during an active contest.

- Only Admin can create/manage teams and team membership.
- **Team creation form**: Team Name (required), Team Description (optional, max 250 chars), Team Profile Image (optional), Team Banner Image (optional).
- Admin adds one or more platform members to a team.
- **A member can belong to only one team at a time** (globally, not just per-contest) — no multi-team membership.
- Admin can add/remove members, and "swap" a member to another team (implemented as: remove from current team, then add to target team — no special swap logic beyond the one-team-at-a-time constraint).

### Public profile pages

**Team public profile page** shows:

- Team creation data (name, description, profile image, banner).
- Current list of team members.
- List of contests attended, with participating members per contest, winner badge (if any), and ranking.

**Member public profile page** shows:

- Profile photo (set via the member's own user profile settings — a Users/foundational concern, not Contest-specific).
- Bio (optional; user profile settings).
- Title/designation (optional, e.g. "Senior Product Manager"; user profile settings).
- Company (optional; user profile settings) — the company the member currently works at.
- List of contests attended, with team(s) and members, winner badge (if any), and ranking.

_(Note: profile photo/bio/title fields live in the core Member profile — see `docs/requirements/roles-and-auth.md`. Contest feature only consumes and displays them here.)_

### Teams within a specific contest

- Once contest registration is open, admin can add teams to that contest, any time up until the contest's end date/time.
- Member swapping _within a contest's participating teams_ stays allowed until the contest end date/time, then **freezes** from contest end until result publishing (no swaps during that window).
- Team + member list is **public** on the contest details page.
- A team member only appears in that team's public list **if they've personally registered for the contest** — being on the team roster isn't sufficient; registration is what makes them visible as a contest participant.
- Admin can ban/remove a team or an individual team member from a contest at any time; banned entities disappear from the public contest page.
- **Per-contest membership snapshot**: since a team's roster can differ across contests (admin swaps members over time), the system must store _which members represented a given team in a given contest_ — analogous to a football club's squad differing by season/competition. This is not just "current team roster" — it's a historical, per-contest record.
- Team Leader: admin can designate one member as leader when adding the team to a contest (only if the team doesn't already have one), and can reassign it any time among the contest's registered team members. Beyond this ornamental designation, the Team Leader has one functional capability: when authenticated and browsing the Team's own Public Profile page, they see an **Edit** option to update the team's Name, Description, Profile Image (team logo), and Banner (see `shared-features.md` → Team Public Profile).
- **Team size**: a team can exist with zero members (created empty by admin). Per-contest settings define **minimum and maximum members per participating team**, defaulting to **min 1 / max 5**. A team can only be _added to a contest_ once its member count satisfies that contest's min/max range. Adding a team to a contest also still requires a Team Leader to be set (see above).

---

## Submission

- A **participating team**'s submission is a form, due before the contest's end date/time.

| Field               | Required      | Notes                                                                                                                               |
| ------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Title of Submission | Yes           |                                                                                                                                     |
| Summary             | Yes           | Max 255 words                                                                                                                       |
| Supporting Document | Yes (default) | URL — Google Doc, GitHub, or any other doc link. Freeform (no domain/type restriction), but must be validated as a well-formed URL. |
| Prototype           | Yes (default) | URL — Figma, Google Slides, GitHub, or other                                                                                        |
| Presentation        | Yes (default) | Either a document upload (via Media Library) **or** a URL — user chooses which                                                      |
| Video               | No            | YouTube URL                                                                                                                         |

- Admin can make the last 5 fields (all except Title) **optional** via that contest's settings — a per-contest override of the defaults above.
- Any registered member of a participating team can:
    - Submit the form from the contest details page or their user panel.
    - Edit submitted values until the contest's end date/time (from the user panel).
    - View their submitted assets permanently — even after results are published — via their participated-contest history in the user panel.
- User panel shows a member's current + past participated contests, lets them submit/edit for currently-running ones, and shows a **winner badge** on contests their team won.

---

## Judging

- Admin assigns one or more Mentors as Judges for a contest, any time between contest creation and result publishing.
- Only assigned Judges see that contest in their own dashboard and can perform judging actions.
- Judges can view the contest details page (read-only — only Admin edits contest details).
- Judges see the list of participating teams; clicking a team opens a right-side drawer showing team details, registered members, and submitted assets.

**Per-submission judge actions (drawer):**

- Flag whether they've checked/reviewed a submission.
- Score out of 10, to 2 decimal places (e.g. `8.75`).
- Any judge can edit a score previously entered by another judge.
- A per-submission **comment/reply thread** for judges to discuss — any judge (and Admin) can comment/reply.
- Admin can also comment, change scores, and toggle the checked flag.
- **Judge Feedback**: an optional textarea field (max 450 chars) on each team's submission, meant as feedback for the team (what to improve, what was strong). Any judge or Admin can fill it in, and any judge can override/edit a note left by another judge. Visible only to Admin, Judges, and the specific team it belongs to — never public.
- **Judge assignment for workflow purposes**: Admin — or any judge, for themselves or another judge — can assign a specific judge as the "assignee" for judging one or more team submissions. This is a workflow/organization aid only: it does **not** restrict other judges from still scoring or commenting on that submission.

**Admin + Judges can, on the team list:**

- Sort by: score, submission datetime (asc/desc), team name (asc/desc).
- Filter by: submitted or not, checked-flag status, score-submitted or not, judge assigned/unassigned.
- Filter to a specific judge's assigned submissions.

---

## Winner Selection & Result Publishing

Per-contest settings define:

- **Winner selection mode**: `Automatic` or `Pick and choose`.
- **Number of winner tiers** (default 3 — e.g. Champion, 2nd Runner-up, 3rd Runner-up; admin can set a different count, e.g. 5 → Champion through 4th Runner-up).

**Automatic mode**: highest-scored team = Champion, next = 2nd Runner-up, etc. **Ties are allowed** — multiple teams can jointly hold the same tier if their scores are equal.

**Pick and choose mode**: Admin manually assigns each tier to whichever team(s) they choose.

**Publishing:**

- Admin finalizes via a **"Publish Result"** action with a confirmation modal — this is the only thing that makes results public; nothing publishes automatically off the target date.
- After publishing, Admin can still **change winners later**, again behind a confirmation step.
- Once published, winning teams appear in a **Winners** section on the public contest details page.
- Per-contest settings include two independent visibility switches for the public contest page (both **default: hidden**):
    1. Show/hide **participant team scores**.
    2. Show/hide **winner team submission** (i.e. the winning team's submitted assets).

**Judges never decide winners or publish results** — their role is strictly scoring + commenting; only Admin selects winners and publishes.

### Participant Team Ranking (public page)

- Per-contest setting (switch): show/hide participant team **ranking** on the public page.
- **Independent of** the "show/hide participant team scores" setting above — ranking can be shown while raw scores stay hidden, or vice versa.
- When shown: teams are listed in score order, each displaying its **Rank** (Rank 1, Rank 2, etc.).

> Future phase: a criteria-based scoring feature (breaking the single 0–10 score into weighted criteria) is planned but not part of this development phase.

---

## Cross-feature dependencies

- **Rich text editor** (Tiptap) — Description field.
- **Media Library** — Image Gallery, and the Presentation field's document-upload option.
- **Thread system** — powers Discussion threads (own Turborepo package, shared with Events).
- **Global Commenting system** — powers comments/replies within Discussion threads (own Turborepo package, shared with Events, Articles, Case Studies).
- **Sponsors** — Tier + Sponsor master lists managed globally by Admin; attached per-Contest via Tier→Sponsors association. See `shared-features.md` → Sponsors.
- **Publishing/scheduling pattern** — reuses Events' read-time visibility computation (no background job) for both contest publish and result-publish target date.
- **Slugs & UUIDs** — same project-wide convention as Events (backend-generated unique slug; UUID exposed externally, never the internal id).
- **Roles & Auth** — Judges are Mentor-badge holders (Mentor is a badge/capability, not a distinct role — see `docs/requirements/roles-and-auth.md`). Participation rule (revised): any Member can participate in a Contest regardless of Mentor badge, subject to an Admin-configurable setting (default `true`); the only hard exclusion is that a badge holder assigned as **Judge on a specific Contest** cannot also participate in _that same Contest_. Admin accounts still cannot be Contest participants.

## Deferred / explicitly out of scope for this phase

- Auto-generating a Case Study from a contest's winning submission (possible future connection, not built now).
- Leaderboard (future phase).
- Waitlist (contests have no waitlist at all, unlike Events where it's phase 2/3).
- Criteria-based team submission scoring (replacing the single 0–10 score) — future phase.
