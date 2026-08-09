# Admin Dashboard: Contests

> Part of `docs/requirements/admin-dashboard/` — see `README.md` for the full page index. Covers 5 of the 40 indexed pages. Business logic source of truth: `contests-requirements.md`.

---

## 1. Contests List

- Table/grid of all Contests, any status, any Format.
- **Filters**: Format, Free vs Paid, Publishing Status, has-results-published.
- **Sort**: Title, Date.
- **Row actions**: View (→ Contest Details), Edit (→ Contest Edit Page), Delete.
- **Create** button → Contest Create Page.

---

## 2. Contest Create Page / 3. Contest Edit Page

Shared form, two entry points — full Contest field set per `contests-requirements.md`:

Contest Title, Banner, Description, Contest Start/End Date-Time, Contest Result Publish Date (target only, doesn't auto-publish), Format, Venue, Videos, Image Gallery, FAQ, Sponsors, Publishing Status.

- Registration is always-on for Contests (no `has_registration` toggle to configure — it's implicit), so unlike Events, there's no "enable registration" field here.
- `is_premium` + amount, `registration_start_at`, Capacity, and Registration Questions all live in the **Contest Details Settings drawer only** — same split as Events.
- **Post-creation reminder**: same pattern as Events — after saving a new Contest for the first time, remind Admin that registration/team-size/winner-tier settings haven't been configured yet, with an option to jump straight into Contest Details with the Settings drawer already open.

---

## 4. Teams Management (global)

Independent of any specific Contest — the persistent, cross-contest team roster.

- List of all Teams: name, current member count, current leader.
- **Create Team**: Name, Description (≤250 chars), Profile Image, Banner Image.
- **Add/remove members** — enforced: a Member can belong to only one Team at a time, globally.
- **Swap a member** — implemented as remove-then-add, no special swap logic.
- Note: this page manages _global_ team existence/membership, not which contests a team participates in — that's the per-Contest **Teams tab** below.

---

## 5. Contest Details

5 tabs, plus a page-level Publish Result button and Settings drawer.

### Tab: Details

Read-focused recap of the contest's info (same fields as Create/Edit, display-only — editing via the separate Edit Page).

### Tab: Contest Judges

- List of assigned Judges (Mentor-badge holders).
- **Assign/remove** a Judge, any time between contest creation and result publishing.
- A Judge already participating in this Contest as a Team member cannot be assigned (mutual exclusion enforced per `roles-and-auth.md`).

### Tab: Registrations/Attendees

- Individually-registered members for this contest — same shape as Event Attendees (registration date, Registration Question answers, payment status/invoice).
- Manual add beyond capacity, same pattern as Events.

### Tab: Teams

- **Add teams to this contest** — picker from the global Teams list (#4 above), subject to that contest's min/max team-size setting (checked at add-time).
- **Filterable, sortable** list: by score, submission status, checked-flag, judge-assigned status.
- **Team ranking** shown here (post-publish, or always visible to Admin regardless of the public ranking-visibility toggle).
- **Team Leader assignment** — Admin designates one member as leader when adding the team, reassignable anytime among the contest's registered team members.
- **Ban/remove** a team or individual member from this contest.
- Clicking a team opens a **right-side drawer**:
    - Registered members (per the per-contest snapshot — who represented this team _in this contest_, distinct from the team's current global roster).
    - Submitted assets (Title, Summary, Supporting Document, Prototype, Presentation, Video).
    - **Checked/reviewed flag** toggle.
    - **Score** (0-10, 2 decimals) — any judge or Admin can edit.
    - **Comment/reply thread** — judges + Admin discuss internally.
    - **Judge Feedback** textarea (≤450 chars, visible to Admin/Judges/that team only).
    - **Assign a specific judge** to this team's submission (workflow aid, doesn't restrict other judges).
    - **Manual winner-tier assignment** (Pick-and-choose mode) — Admin assigns this team to a tier directly from here.

### Tab: Discussion Moderation

Same pattern as Events — Approve/Reject/Unapprove/Pin/Announcement/Edit/Delete on threads, per `thread-system-requirements.md`.

### Page-level: Publish Result button

- Confirmation modal, per `contests-requirements.md`.
- **Automatic mode**: highest-scored team(s) auto-assigned to tiers (ties allowed).
- **Pick-and-choose mode**: uses whatever manual tier assignments were made in the Teams tab's drawers.
- After publishing, Admin can still change winners later (same confirmation-modal pattern).

### Page-level: Settings drawer

Per-contest configuration: Winner selection mode (Automatic/Pick-and-choose), number of winner tiers (default 3), submission field optional/required overrides (which of the 5 non-Title fields are required for this contest), min/max team size (default 1/5), show/hide participant scores toggle, show/hide winner submission toggle, show/hide ranking toggle, and the "allow Mentors to publish threads without approval on this contest" setting.

---

## Cross-feature dependencies

- **Contests** (`contests-requirements.md`) — full source of truth.
- **Media Library**, **Rich Text Editor** — Banner/Gallery, Description, Presentation submissions.
- **Thread System**, **Global Commenting** — Discussion Moderation tab, judge comment threads.
- **Roles & Auth** (`roles-and-auth.md`) — Judge eligibility (Mentor badge), Judge/participant mutual exclusion.

## Deferred / explicitly out of scope for this phase

- Leaderboard, criteria-based scoring (already deferred platform-wide per `contests-requirements.md`).
- Auto-generating a Case Study from a winning submission (already deferred).
