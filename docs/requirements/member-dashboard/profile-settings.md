# Member Dashboard: Profile Settings

> Part of `docs/requirements/member-dashboard/` — see `README.md` in this folder for the full page index. Field source of truth: `roles-and-auth.md` → Username & Public Profile, plus scattered references elsewhere (WhatsApp/phone, self-apply flows).

## Sections

### 1. Basic info

- Username (editable, backend-generated at creation — uniqueness re-validated on change).
- Name, Profile Photo (Media Library), Bio, Title/Designation, Company, Country/City.
- Social links.

### 2. Skills & Experience

- **Skills** — multi-select, autocomplete against the shared master Skill list (organically-growing, no Admin gatekeeping), soft cap ~15.
- **Experience** — repeatable work-history entries (company, title, duration, etc. — exact shape still TBD per `roles-and-auth.md`'s own note).

### 3. Contact

- **WhatsApp/Phone number** — required before completing an Event/Contest registration if missing (per `events-requirements.md`); surfaced here so Members can pre-fill it rather than being interrupted mid-registration-flow.

### 4. Account & login

- Connected OAuth providers (Google/LinkedIn) — shows which are linked, with a "Connect Google" / "Connect LinkedIn" action for the unlinked one (per `roles-and-auth.md`'s multi-provider linking).
- **Account deletion/deactivation** — noted as a **future phase feature**, not built in this initial development phase.

### 5. Mentor & Mentorship self-apply (conditional)

- **"Be a Mentor"** option — shown only if the platform-wide self-apply setting is enabled (default off, per `roles-and-auth.md`). Submits an application for Admin review.
- **"Apply for Mentorship eligibility"** option — shown only to existing Mentor-badge holders, only if that separate self-apply setting is enabled (default off, per `mentorship-requirements.md`). Submits an application for Admin review.
- Both show current application status if one is pending/was previously rejected (with reason, for the Mentorship one).

### 6. Visibility

- **No visibility toggle for Members** — profile is always public once created (see `public-profiles.md`). Nothing to configure here; noting explicitly so it's not assumed missing by mistake.

## Cross-feature dependencies

- **Roles & Auth** (`roles-and-auth.md`) — full field source of truth, OAuth linking, Mentor self-apply.
- **Mentorship** (`mentorship-requirements.md`) — Mentorship-eligibility self-apply.
- **Events** (`events-requirements.md`) — WhatsApp/phone requirement context.
- **Media Library** — Profile Photo.

## Deferred / explicitly out of scope for this phase

- Account deletion/deactivation.
- Notification preferences (no notification system exists yet — see `dashboard-overview.md` flag).
