# Member Dashboard: Mentorship Sessions

> Part of `docs/requirements/member-dashboard/` — see `README.md` in this folder for the full page index. **New page (11th)**, added to resolve a gap flagged while drafting `dashboard-overview.md`: the original 10-page list had no dedicated page for managing Mentorship bookings. Business logic source of truth: `mentorship-requirements.md`.

## Scope

Every Member sees the **Mentee** side. Members who additionally hold the Mentor badge and are **Mentorship-eligible** (per `mentorship-requirements.md`) also see the **Mentor** side, on the same page via a tab.

---

## Mentee tab (all Members)

### Upcoming

- List of `Requested` and `Accepted`/`Upcoming` bookings: mentor name/photo, requested/booked slot time, status.
- **Cancel** action on any `Upcoming` booking, any time before the session start time — no notice-period requirement, per `mentorship-requirements.md`.
- `Requested` (not yet responded to) bookings show a "Waiting for {mentor} to respond" state, with a **Withdraw** action, letting a Member cancel a pending request they no longer want, even though `mentorship-requirements.md` only explicitly defines cancellation for `Upcoming`.
- Meeting link shown once a booking is `Accepted`/`Upcoming`.

### History

- Past bookings: `Completed`, `No-show`, `Cancelled`, `Denied` — with date, mentor name, and (for `Denied`) the optional denial reason if the mentor gave one.

### Book a new session

- Shortcut link to the public **Mentorship Page** (`landing-pages/mentorship-page.md`) to browse eligible mentors — booking itself happens there, not duplicated here.
- Respects the existing concurrency rule: if the Member already has an active (`Requested`/`Accepted`) booking with a given mentor, they can't start a new one with that same mentor until it resolves.

---

## Mentor tab (conditional — Mentor badge + Mentorship-eligible only)

### Incoming requests

- List of `Requested` bookings awaiting a decision: mentee name/photo, requested slot, optional message.
- **Accept** (requires supplying a meeting link — Google Meet/Zoom URL, per `mentorship-requirements.md`) or **Deny** (optional reason) actions inline.

### Upcoming sessions

- `Accepted`/`Upcoming` bookings: mentee name, slot time, meeting link.
- Mentor can **Cancel** here too (same any-time-before-start rule).
- Once the scheduled time passes: mentor manually marks **Completed** or **No-show**.

### Availability & settings

- Manage the recurring weekly availability pattern and fixed session duration (per `mentorship-requirements.md`).
- If paid sessions are enabled for this mentor (globally or via Admin override): set/edit session price.
- Link to view **payment records** for sessions they've given — just filtered Payment/Transaction records (cross-reference: Payment History in `history-pages.md` already covers this from the mentee's paying side; this is the same records, filtered to sessions where this Member was the mentor). No separate earnings summary/total or payout-tracking mechanism this phase.

### History

- Past sessions given: `Completed`, `No-show`, `Cancelled`, `Denied` (denied-by-them requests too, for their own record).

---

## Cross-feature dependencies

- **Mentorship** (`mentorship-requirements.md`) — full source of truth for booking states, availability, payment.
- **Landing Pages — Mentorship** (`landing-pages/mentorship-page.md`) — booking entry point (mentee side).
- **Roles & Auth** (`roles-and-auth.md`) — Mentor badge + Mentorship-eligibility gating for the Mentor tab.
- **Payment** (`shared-features.md`) — session payment/invoice records.

## Deferred / explicitly out of scope for this phase

- Rating/feedback on completed sessions (already deferred platform-wide per `mentorship-requirements.md`).
- Reschedule as a distinct action (cancel + rebook only, per source doc).
