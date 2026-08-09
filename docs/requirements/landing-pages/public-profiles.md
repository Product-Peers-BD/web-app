# Landing Pages: Public Profiles

> Part of `docs/requirements/landing-pages/`. Covers 2 of the 22 indexed pages: Single Public Profile Page (`/u/{username}`) and Single Team Public Profile Page (`/t/{teamSlug}`) — grouped in one file since they're structurally similar and cross-reference the same underlying entities.

---

## 1. Single Public Profile (`/u/{username}`)

Underlying data model fully defined in `roles-and-auth.md` → Username & Public Profile. This section is page layout only.

### Header

- Profile photo, name, title/designation, company, country/city.
- **Mentor badge indicator** (if held).
- **Follow button** + follower count (see Follow System, `shared-features.md`).
- Social links.

### Tabs

1. **Activities Timeline** (default tab) — as defined in `roles-and-auth.md`: latest-to-oldest by default, visitor toggle to oldest-to-latest.
2. **About** — Bio, Skills (chips), Experience (repeatable work-history entries).
3. **Content** — the user's **published** Articles, Case Studies, and Products, shown as card grids (reusing the same card components as each feature's own listing page). Only `Published` status items are visible publicly; Draft/Pending/Rejected never show here regardless of viewer, consistent with those statuses being private to the author.
4. **Contests** — contests the user has participated in (via Team membership), with team name, ranking/winner badge if applicable. Reuses the same activity data already defined for Team's Activities Timeline and Contest team snapshots — just filtered to this specific member.

### Visibility rules

- **Members**: profile always public once created — no visibility toggle. Members showcasing platform activity is core to the product's "prove PPBD is active" goal, so no opt-out this phase.
- **Admins**: respect the existing Admin visibility toggle (default hidden) — if hidden, this page 404s (or shows a generic "profile not available" state) for that username.
- **Super Admin**: no public profile exists at all (confirmed in `roles-and-auth.md`) — route 404s.

### Engagement

- Follow/Unfollow (authenticated visitors only; Guests see a disabled Follow button prompting login).
- No comments/likes on the profile itself — engagement happens on the individual content pieces (Articles/Case Studies/Products), not the profile page.

---

## 2. Single Team Public Profile (`/t/{teamSlug}`)

Underlying data model and page contents fully defined in `shared-features.md` → Team Public Profile. Summarized here for the page index; no new decisions beyond what's already specced there:

- **Header**: team profile image, banner, team name, current team leader.
- **Follow button** + follower count.
- **Tabs**: Current Member Roster; Activities Timeline (team created, contests attended with per-contest snapshot of leader + members, contests won, Team Leader profile edits).
- **Leader-only Edit** capability: Name, Description, Profile Image, Banner — visible only to the currently-assigned Team Leader when viewing their own team's page.
- Visibility: always public once a team exists — no hide toggle (teams are Admin-managed constructs, not individual accounts with privacy expectations).

---

## Cross-feature dependencies

- **Roles & Auth** (`roles-and-auth.md`) — user profile fields, Mentor badge, Admin visibility toggle.
- **Follow System** (`shared-features.md`) — Follow button/counts on both page types.
- **Contests** (`contests-requirements.md`) — Team roster, per-contest snapshot data, winner badges.
- **Articles / Case Studies / Products** — "Content" tab on the User Profile pulls Published items from each.

## Deferred / explicitly out of scope for this phase

- Personalized activity feed based on followed Users/Teams (already deferred platform-wide, see `shared-features.md`).
- Any additional filters on the Content tab (e.g. filter by type) — simple combined grid for now.
