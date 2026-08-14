# Member Dashboard: Contest Judging

> Part of `docs/requirements/member-dashboard/` — see `README.md` in this folder for the full page index. **New page (12th)**, added to resolve a gap flagged while drafting `dashboard-overview.md`: `contests-requirements.md` defines the Judge actions in detail but never specified where in the Member Dashboard a badge-holding Member accesses that work. Business logic source of truth: `contests-requirements.md` → Judging.

## Scope

Visible only to Members holding the Mentor badge who are currently assigned as **Judge** on at least one Contest. If assigned to zero contests, this page/nav item is hidden (or shows an empty state) rather than a permanently-visible empty page.

---

## 1. My Judging — Contest list

- List of Contests where this Member is an assigned Judge (per `contests-requirements.md` — only assigned Judges see a given contest here).
- Per contest: title, dates, submission-count summary (e.g. "8/12 teams submitted, 5 scored"), link into that contest's team list (below).
- Contest details themselves are **read-only** from here — only Admin edits contest details (per source doc); this page is judging-actions only.

## 2. Team list (per contest)

- List of participating teams for the selected contest.
- **Sort**: score, submission datetime (asc/desc), team name (asc/desc) — per `contests-requirements.md`.
- **Filter**: submitted/not, checked-flag status, score-submitted/not, judge assigned/unassigned, filter to a specific judge's assigned submissions.
- Clicking a team opens the **judging drawer** (below), consistent with the "right-side drawer" pattern already specced.

## 3. Judging drawer (per team submission)

- Team details, registered members, submitted assets (Title, Summary, Supporting Document link, Prototype link, Presentation, Video).
- **Checked/reviewed flag** — toggle.
- **Score** — out of 10, 2 decimal places. Any judge can edit a score another judge entered.
- **Comment/reply thread** — judges (and Admin) discuss internally on this submission.
- **Judge Feedback** — optional textarea (max 450 chars), meant for the team; any judge/Admin can fill in or edit; visible to Admin, Judges, and that specific team only (surfaces on the team's own **Participated Contest Details** page, per `history-pages.md`).
- **Assign judge** — Admin, or any judge (for themselves or another judge), can set a workflow "assignee" for this submission — organizational only, doesn't restrict other judges from also scoring/commenting.

## Cross-feature dependencies

- **Contests** (`contests-requirements.md`) — full source of truth for judging actions, scoring, winner selection (winner selection/result publishing itself stays Admin-only, not available from this page).
- **Member Dashboard — History Pages** (`history-pages.md`) — Judge Feedback surfaces on the team's own Contest Details page.
- **Roles & Auth** (`roles-and-auth.md`) — Mentor badge + Judge assignment gating.

## Deferred / explicitly out of scope for this phase

- Winner selection / result publishing (Admin-only, not a Judge action — stays in the Admin Dashboard, not this page).
- Criteria-based scoring (already deferred platform-wide per `contests-requirements.md`).
