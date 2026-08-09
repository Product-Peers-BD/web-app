# Foundational: Roles & Authentication

> Referenced by every feature doc (Events, Contests, and future ones). This is not one of the 8 product feature areas from the brief, but it underpins all of them — captured here once rather than re-derived per feature.

## Roles

Only **three** account roles exist: **Super Admin**, **Admin**, **Member**. (Mentor is _not_ a role — see **Mentor Badge** below.)

| Role            | Created by                                                                 | Login method                                                    | Notes                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Super Admin** | Seeded directly into the database during initial setup (not via UI signup) | Google account                                                  | Exactly **one** Super Admin, created via initial DB seeding. Cannot be deleted. Holds all permissions. Only the Super Admin can remove an Admin — a regular Admin cannot remove another Admin. |
| **Admin**       | Super Admin, or another existing Admin                                     | Google account (no email/password signup, no verification step) | Admins manage all features (Events, Contests, etc.) via dashboard panels. Can create other Admins, but **cannot remove** an Admin — only Super Admin can.                                      |
| **Member**      | Self-registration                                                          | Google or LinkedIn account                                      | Regular community members.                                                                                                                                                                     |

## Mentor Badge

"Mentor" is **not a role** — it's a capability/badge that can be attached to any **Admin** or **Member** account. Recommended: a dedicated `mentors` table (badge holder, status, timestamps, suspension reason) separate from the core user table, rather than a flag on the user row — keeps room to grow Mentor-specific data/features later without reshaping the main user table.

### What holding the badge grants

A badge holder can:

- Be assigned by Admin as an **Event Speaker**.
- Be assigned by Admin as a **Contest Judge**.
- Write and **publish** Case Studies and Articles **without requiring Admin approval** (unlike a plain Member, whose submissions go through review).

Without the badge, Admin **cannot** assign that user as a Speaker or Judge.

### How the badge is granted

1. **Admin creates a Mentor "from scratch"** via a form (First Name, Last Name, Google email). Behind the scenes this creates a standard Member account and attaches the Mentor badge to it.
    - **Duplicate-email check required**: if the submitted Google email already belongs to an existing registered Member, this pathway must redirect to pathway 2 below (attach the badge to the existing account) rather than creating a second account for the same person.
2. **Admin attaches the badge to an already-existing registered Member.**
3. **Admin attaches the badge to themselves or another Admin.** (An Admin who is also a real-world mentor gets the badge added to their existing Admin account — one login, both capability sets. Same account, same username, same public profile.)
4. **Member self-applies ("Be a Mentor")**, subject to Admin approval. This entire self-apply flow is gated by an Admin-configurable on/off setting, **default OFF**. When on, eligible Members see a "Be a Mentor" option in their profile settings.

### Suspension

- Admin can suspend a user's Mentor badge at any time.
- If the badge holder currently has **active assignments** (Speaker on an upcoming/running Event, Judge on an upcoming/running Contest, **or Requested/Upcoming Mentorship bookings** — see `mentorship-requirements.md`), Admin sees a **warning popup** before confirming suspension.
- On confirmed suspension: **future assignment is blocked immediately** (this user can no longer be picked as Speaker/Judge, and can no longer receive new Mentorship booking requests, going forward). **Existing assignments on already-scheduled Events/Contests, and existing Mentorship bookings, are NOT auto-removed/auto-cancelled** — Admin must manually remove/cancel them individually if desired.
- Suspension supports an optional **internal reason note** (Admin-only visibility) — same pattern as Contest's Judge Feedback / Contact Us admin notes.
- **Mentorship eligibility can also be revoked independently**, without suspending the whole Mentor badge — a separate, simpler Admin toggle (see `mentorship-requirements.md`).

### Dashboard placement for badge holders

There's no separate "Mentor Dashboard" — the badge surfaces within whichever dashboard the underlying account already uses:

- **Member + Mentor badge**: all Mentor-related capabilities (Judge work, Speaker info, etc.) appear within their existing **Member Dashboard Panel**.
- **Admin + Mentor badge**: no separate view needed, since Admin already has full Admin Dashboard access. One addition: in the Admin Dashboard's contest list, an Admin who is also assigned as Judge on a given contest sees an indicator flagging that assignment, making it easy to spot which contests need their judging attention.

### Admin's own submissions

An Admin's own Article/Case Study submissions bypass the review requirement **the same way a Mentor-badge holder's do** — this is independent of whether that Admin also happens to hold the Mentor badge. (Rationale: Admin is the one who would otherwise be doing the reviewing.)

## Contest participation & Mentor Badge — resolved rule

The earlier blanket rule ("an Admin or a Mentor cannot be a Contest participant") no longer applies as originally worded, now that Mentor isn't a distinct role. Restated:

- **Any Member can participate in a Contest, regardless of whether they hold the Mentor badge** — this is now Admin-configurable via a dashboard setting ("Allow Mentor-badge holders to participate in Contests"), **default: `true`**.
- **The only hard exclusion is contest-specific**: a badge holder who is assigned as **Judge on a specific Contest** cannot also be a participant in _that same Contest_. (And, conversely, Admin cannot assign someone as Judge on a Contest they're already participating in.)
- This exclusion is scoped to that one Contest — the same person could judge Contest A and participate in Contest B.
- **Admin accounts** (with or without the Mentor badge) still cannot be Contest participants — Admin is an operational role, not a community-participation one. Confirmed unchanged under the new model.

## Username & Public Profile

### Username

- Every user gets a **unique, backend-generated username** at creation time:
    - Admin/Mentor creation (by another Admin).
    - Member self-registration.
- Editable later from profile settings — Admin from the Admin Dashboard app, Member from the Member Dashboard (landing app).

### Public Profile — unified model

- **One public profile page per user**, regardless of role — no separate profile "types" for Admin/Mentor/Member. URL: `https://landing-url.com/u/{username}`.
- **Super Admin does not get a public profile** — the only exception to "every user has one."
- **Admin visibility toggle**: Admins can toggle their own public profile visible/hidden. Default: **hidden (`false`)**. This matters specifically because an Admin holding the Mentor badge needs a visible profile for their Speaker/Judge/publishing activity to be meaningfully public.

**Profile contents:**

- Public info: name, profile photo, bio, title/designation, company, social links, country/city (all as already defined) — plus two new fields:
    - **Skills** — multi-select, member-typed with autocomplete against a shared, organically-growing master Skill list (new skills auto-added the first time anyone types them; no Admin curation/gatekeeping required). No hard cap, or a soft cap (e.g. ~15) just for profile readability.
    - **Experience** — multi-entry work history, LinkedIn-style (repeatable entries: company, title, duration, etc. — exact field set TBD when we spec this properly).
- **Mentor badge indicator** — shown on the profile if the user currently holds it.
- **Follow button** — see Follow System in `shared-features.md`.
- **Activities Timeline** — a tab/section showing the user's public activity, latest-to-oldest by default, with a visitor-facing toggle to oldest-to-latest (additional filters TBD). Example activity types: joined platform, attended/won a Contest, attended an Event (registration-required), became a Mentor, spoke at an Event, judged a Contest, published an Article/Case Study, follower-count milestones (100/500/1k, etc.).

_(Full Member/Admin profile field list — including Skills/Experience exact shape — TBD; this section will keep growing as more features reference profile data.)_

## Authentication mechanism

- **Super Admin**: Google OAuth, single allowed account, seeded/configured at initial setup.
- **Admin**: Google OAuth only. No email/password registration, no separate verification step — being added as an Admin (with an allowed Google email) is sufficient to log in.
- **Member**: Google OAuth **or** LinkedIn OAuth — no email/password signup. No Forgot Password flow exists or is needed, since there's no password.
    - **Multi-provider linking**: a Member can connect the _other_ OAuth provider to their existing account after registering (e.g. registers via Google, later links LinkedIn — or vice versa). Once linked, they can log in with either provider afterward; both resolve to the same single account.
- A user holding the Mentor badge logs in exactly as their underlying account type (Admin or Member) already does — the badge adds capabilities, not a separate login path.

## Super Admin — resolved design

- **Exactly one Super Admin**, created via initial database seeding (not through the UI). Cannot be deleted. Holds unrestricted permissions, including the exclusive ability to remove an Admin (Admins cannot remove each other).
- **Login via Google OAuth** — consistent with Admin. This is reasonable, with a couple of standard precautions worth building in given how much power this single account holds:
    1. Store the allowed Super Admin email as a config/secret (environment variable), never hardcoded or committed to the repo.
    2. Enable Google's own 2-Factor Authentication on that specific Google account — this is outside the app's control but is the main real-world safeguard, since anyone with access to that Google account gets full platform control.
    3. Consider audit-logging Super Admin actions specifically (e.g. Admin removal, any destructive action), given the account can't be removed or restricted.
    4. If the organization ever moves to Google Workspace, restricting login to a specific Workspace domain adds another layer — not necessary to decide now, just worth knowing the option exists.

## Open questions

- None currently outstanding for Roles & Auth — will grow as new features surface additional profile/permission needs.
