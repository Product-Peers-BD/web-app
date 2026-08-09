# Admin Dashboard: Foundational Pages

> Part of `docs/requirements/admin-dashboard/` — see `README.md` for the full page index. Covers 5 of the 40 indexed pages, none tied to a single feature.

---

## 1. Admin Dashboard Overview

Landing page after Admin login.

- **Quick stats/summary cards**: Pending Review counts (Articles, Case Studies, Products, Threads — each a link into that item's filtered List page), new/unread Contact Us submissions, upcoming Events/Contests, recent registrations.
- **Quick links**: Events List, Contests List, Content (Articles/Case Studies/Products) Lists, Mentorship, Sponsors, Contact Us Inbox.
- **If Admin also holds the Mentor badge and is assigned Judge on any Contest**: an indicator flagging which Contests need their judging attention — per the existing resolved note in `progress-report.md`.

---

## 2. Admin Login

- **OAuth (Google) only** — no email/password, consistent with the Admin authentication mechanism in `roles-and-auth.md`.
- **Scoped to `apps/dashboard`** — entirely separate route/app from Member Login (`landing-pages/static-pages.md`). An Admin's Google account must already be an allowed Admin email (added by Super Admin or another Admin per `roles-and-auth.md`) — this page doesn't self-register new Admins.
- No Forgot Password flow (no passwords exist, same reasoning as Member auth).

---

## 3. Admin Profile Settings

- Own account: name, profile photo, bio, title/designation, company, social links, country/city — same base profile fields as a Member (per `roles-and-auth.md`'s unified public profile model).
- **Public profile visibility toggle** — default **hidden** (`false`), per `roles-and-auth.md`. This matters specifically if the Admin also holds the Mentor badge and needs a visible profile for their Speaker/Judge/publishing activity to be public.
- Connected OAuth (Google) — read-only display, since Admin auth is Google-only (no multi-provider linking like Members have).
- If the Admin also holds the Mentor badge: Skills, Experience fields available too (same as any badge holder's profile).

---

## 4. Admin/Team Management

- List of all Admin accounts (and Super Admin, shown but not editable/removable).
- **Create Admin**: any existing Admin (or Super Admin) can create a new Admin — form: name, allowed Google email. Per `roles-and-auth.md`, this is Google OAuth-gated; the email entered here becomes the allowed login for that new Admin.
- **Remove Admin**: **Super Admin only** — a regular Admin cannot remove another Admin, enforced here (the Remove action is hidden/disabled for non-Super-Admin viewers).
- Super Admin's own row is visibly marked, not removable, consistent with `roles-and-auth.md`'s "exactly one Super Admin, cannot be deleted" rule.

---

## 5. Platform Settings

Tabbed page for every genuinely **global** (not per-record) toggle — distinct from the Event/Contest Settings drawers, which are scoped to one specific record. See `admin-dashboard-inventory-draft.md` for the reasoning behind this split, now folded in here as settled structure.

### General tab

| Setting                                               | Default | Source              |
| ----------------------------------------------------- | ------- | ------------------- |
| Allow Mentor-badge holders to participate in Contests | `true`  | `roles-and-auth.md` |

### Comments tab

| Setting                                          | Default | Source                              |
| ------------------------------------------------ | ------- | ----------------------------------- |
| Character limit per comment/reply                | 2000    | `global-commenting-requirements.md` |
| Allow Members to edit their own comments/replies | `true`  | `global-commenting-requirements.md` |
| Max images per comment/reply                     | 1       | `global-commenting-requirements.md` |

### Mentorship tab

| Setting                                                          | Default | Source                       |
| ---------------------------------------------------------------- | ------- | ---------------------------- |
| Allow Members to self-apply for the Mentor badge ("Be a Mentor") | `off`   | `roles-and-auth.md`          |
| Allow Mentors to apply for Mentorship eligibility                | `off`   | `mentorship-requirements.md` |
| Enable Paid Mentorship Sessions (platform-wide)                  | `off`   | `mentorship-requirements.md` |

_(Note: the per-mentor override of the paid-sessions toggle is not global — it stays attached to the individual mentor's own record, on the Mentorship Eligibility Management page, not here.)_

- **Explicit Save action per tab** — nothing takes effect until Admin clicks Save, consistent with the pattern already established for the Home Page Customizer (`home.md`).
- More tabs may be added later as other genuinely global toggles are identified — this isn't necessarily an exhaustive/final list.

---

## Cross-feature dependencies

- **Roles & Auth** (`roles-and-auth.md`) — Admin/Super Admin roles, Mentor badge self-apply, OAuth.
- **Global Commenting** (`global-commenting-requirements.md`) — Comments tab settings.
- **Mentorship** (`mentorship-requirements.md`) — Mentorship tab settings.

## Deferred / explicitly out of scope for this phase

- Notification system (Overview page's "what needs attention" framing assumes this will eventually exist, same open item noted in `member-dashboard/dashboard-overview.md`).
- Super Admin-specific audit logging (mentioned as a nice-to-have in `roles-and-auth.md`, not required to build now).
