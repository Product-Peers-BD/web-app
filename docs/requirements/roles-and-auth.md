# Foundational: Roles & Authentication

> Referenced by every feature doc (Events, Contests, and future ones). This is not one of the 6 product feature areas from the brief, but it underpins all of them — captured here once rather than re-derived per feature.

## Roles

| Role            | Created by                                                                 | Login method                                                    | Notes                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Super Admin** | Seeded directly into the database during initial setup (not via UI signup) | Google account                                                  | Exactly **one** Super Admin, created via initial DB seeding. Cannot be deleted. Holds all permissions. Only the Super Admin can remove an Admin — a regular Admin cannot remove another Admin. |
| **Admin**       | Super Admin, or another existing Admin                                     | Google account (no email/password signup, no verification step) | Admins manage all features (Events, Contests, etc.) via dashboard panels. Can create other Admins, but **cannot remove** an Admin — only Super Admin can.                                      |
| **Mentor**      | Admin only, by adding the mentor's Google email address                    | Google account (no verification step)                           | No admin capabilities.                                                                                                                                                                         |
| **Member**      | Self-registration                                                          | Google or LinkedIn account                                      | Regular community members.                                                                                                                                                                     |

## Mentor capabilities

A Mentor can be:

- Assigned by Admin as an **Event Speaker**.
- Assigned by Admin as a **Contest Judge**.
- Write and **publish** Case Studies and Articles **without requiring Admin approval** (unlike Members, whose submissions go through review — see Resources feature, to be discussed).
- Create threads in Event and Contest discussion features.

## Admin capabilities relevant to role assignment

- An Admin (themself, or via another Admin) can also be assigned as an Event Speaker or a Contest Judge — i.e. being Admin doesn't exclude someone from these assignable roles.

## Constraints

- **An Admin or a Mentor cannot be a Contest participant.** Contest participation (registering, being placed on a team) is Member-only.
- **A Member can belong to only one contest Team at a time** (see Contests doc) — this is a Member-specific constraint, not relevant to Admin/Mentor since they can't participate at all.

## Authentication mechanism

- **Super Admin**: Google OAuth, single allowed account, seeded/configured at initial setup.
- **Admin and Mentor**: Google OAuth only. No email/password registration, no separate verification step — being added as an Admin/Mentor (with an allowed Google email) is sufficient to log in.
- **Member**: Google OAuth **or** LinkedIn OAuth — no email/password signup. No Forgot Password flow exists or is needed, since there's no password.
    - **Multi-provider linking**: a Member can connect the _other_ OAuth provider to their existing account after registering (e.g. registers via Google, later links LinkedIn — or vice versa). Once linked, they can log in with either provider afterward; both resolve to the same single Member account.

## Member profile (public-facing fields)

Surfaced first via the Contests feature (member public profile pages), but these fields belong to the core Member profile, set through the member's own profile settings:

- Profile photo (optional).
- Bio (optional).
- Title/designation (optional, e.g. "Senior Product Manager").
- Company (optional) — current employer.
- WhatsApp/phone number — already established as required for Event/Contest registration (see Events doc). Also reused as the social-links WhatsApp field below (not a separate phone field).

**Social links area:**

- LinkedIn profile link (optional, public).
- Twitter/X link (optional, public).
- Facebook profile link (optional, public).
- Email address (public-facing, separate from the account's login email) — **visibility user-chosen**: member picks whether it's public or private.
- WhatsApp number (the same number captured for registration) — **visibility user-chosen**: member picks whether it's public or private.

**Location** (both public, both set from select boxes in profile settings):

- Country — selected from a dropdown, sourced from a **third-party API/library** (preferred over a bundled static dataset).
- City — selected from a dropdown, filtered/dependent on the selected Country, same third-party source.

_(Full Member profile field list TBD — this section will grow as more features reference profile data.)_

## Super Admin — resolved design

- **Exactly one Super Admin**, created via initial database seeding (not through the UI). Cannot be deleted. Holds unrestricted permissions, including the exclusive ability to remove an Admin (Admins cannot remove each other).
- **Login via Google OAuth** — consistent with Admin/Mentor. This is reasonable, with a couple of standard precautions worth building in given how much power this single account holds:
    1. Store the allowed Super Admin email as a config/secret (environment variable), never hardcoded or committed to the repo.
    2. Enable Google's own 2-Factor Authentication on that specific Google account — this is outside the app's control but is the main real-world safeguard, since anyone with access to that Google account gets full platform control.
    3. Consider audit-logging Super Admin actions specifically (e.g. Admin removal, any destructive action), given the account can't be removed or restricted.
    4. If the organization ever moves to Google Workspace, restricting login to a specific Workspace domain adds another layer — not necessary to decide now, just worth knowing the option exists.

## Open questions

- None currently outstanding for Roles & Auth — will grow as new features surface additional profile/permission needs.
