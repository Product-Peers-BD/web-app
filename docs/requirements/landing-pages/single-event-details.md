# Landing Page: Single Event Details

> Part of `docs/requirements/landing-pages/`. Business logic lives in `events-requirements.md` — this doc covers page layout/UX.

## Page contents (in display order)

1. **Banner**, Title, Type badge, Category badge(s), Tag badge(s).
2. **Speakers** — cards with photo, name, role (Speaker/Host/Mentor/etc.), session topic if set — links to each speaker's public profile.
3. **Date/Time, Format, Venue** (if Physical/Hybrid — address + map link).
4. **Description** — full rich-text body.
5. **Activities Schedule** (if set) — ordered list, admin-defined order.
6. **Registration panel** (sticky sidebar or prominent section — see **Registration states** below).
7. **Videos** (if any) — embedded YouTube player(s).
8. **Image Gallery** (if any).
9. **FAQ** (if any) — accordion.
10. **Sponsors** — grouped by Tier (per `shared-features.md`).
11. **Past Recap** — only shown once the event has ended and Admin has added one; visible to Guest + Member alike.
12. **Discussions** — thread list (per `events-requirements.md` → Discussions): start-thread composer (authenticated users only; Guests see a "Log in to join the discussion" prompt), pinned/announcement threads surfaced first, comments with one level of replies, @mentions, image attachments.
13. **Share** — social share buttons (OG metadata per `events-requirements.md`).

## Registration panel — states

| Condition                                                     | Panel shows                                                                                                                                    |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `has_registration = false`                                    | No registration panel — informational event only                                                                                               |
| Registration not yet open (`registration_start_at` in future) | Countdown to open, no action button                                                                                                            |
| Open, capacity available, Guest viewer                        | "Register" button → prompts login/OAuth first                                                                                                  |
| Open, capacity available, Member viewer, not yet registered   | "Register" button → registration form (WhatsApp/phone if missing, Registration Questions) → Bkash payment step if `is_premium`                 |
| Open, Member already registered                               | "You're registered" state, with a "View my registration" link (→ Member Dashboard). **No self-cancel button** — see Cancellation policy below. |
| Capacity full                                                 | "Registration Closed / Sold Out" — no action                                                                                                   |
| Admin manually closed                                         | "Registration Closed" — no action                                                                                                              |
| Event/registration ended                                      | No panel — informational only, event shown as Past                                                                                             |

### Cancellation policy

**Members cannot self-cancel an Event registration** — same policy as Contests. If a Member wants to cancel, they contact Admin directly (WhatsApp, Contact Us form, or phone call), and Admin performs the cancellation manually from the Admin Dashboard. No self-service cancel button anywhere in the Member-facing UI (public site or Member Dashboard — see `member-dashboard/history-pages.md`, updated to match).

## Cross-feature dependencies

- **Events** (`events-requirements.md`) — full source of truth for fields, registration, payment.
- **Media Library** — Banner, Gallery.
- **Global Commenting** / **Thread system** — Discussions.
- **Sponsors** (`shared-features.md`).
- **Public Profiles** (`public-profiles.md`) — Speaker links.

## Deferred / explicitly out of scope for this phase

- "Related Events" section — not requested; can add later if wanted.
