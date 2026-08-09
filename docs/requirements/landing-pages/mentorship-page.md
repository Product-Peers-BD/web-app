# Landing Page: Mentorship

> Part of `docs/requirements/landing-pages/`. Business logic lives in `mentorship-requirements.md` — this doc covers page layout/UX.

## Overview

Public discovery page listing all currently Mentorship-eligible mentors, plus the booking flow entry point.

## Mentor list

- **Filter/search**: by Skills (reusing the Skills autocomplete from `roles-and-auth.md`), free-text name search.
- **Card fields**: profile photo, name, headline/title, top 2–3 Skills, "View Profile" / "Book Session" CTA.
- No pagination concerns expected at current scale, but **Load More** applies if the list grows — same pagination style as Events/Contests listings.

## Booking flow entry point

**A right-side drawer** launched directly from this page's mentor card — same drawer pattern already established for Contest Judging (`member-dashboard/judging.md`), for consistency. Keeps the Mentorship page self-contained as the single place to discover _and_ book. The mentor's Public Profile can still show a "Mentorship-eligible" indicator/link back to this page rather than embedding the flow itself.

### Drawer contents (per `mentorship-requirements.md`)

1. Mentor's available slots, generated from their recurring weekly availability pattern sliced into their fixed session duration.
2. Optional short message field.
3. Submit → booking status `Requested`.
4. Confirmation state: "Request sent — you'll be notified when {mentor} responds," with a link to the booking's status in the Member Dashboard.

- Guest viewer: "Book Session" prompts login/OAuth first.
- If the Member already has an active (`Requested`/`Accepted`) booking with this same mentor, the drawer shows that existing booking's status instead of allowing a new request (per the one-active-booking-per-mentor concurrency limit).

## Cross-feature dependencies

- **Mentorship** (`mentorship-requirements.md`) — full source of truth for eligibility, availability, booking states, payment.
- **Public Profiles** (`public-profiles.md`) — mentor card links, "Mentorship-eligible" indicator.

## Deferred / explicitly out of scope for this phase

- Ratings/feedback display on mentor cards (post-session ratings are deferred platform-wide per `mentorship-requirements.md`).
