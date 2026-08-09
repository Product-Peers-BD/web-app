# Feature: Mentorship

## Overview

A dedicated **1:1 booking system** — one Mentor-badge holder, one Member, per session. Entirely separate from Events' "Mentor Session" Event Type, which is a group format (one or more mentors, multiple attendees). The two share a name but nothing else.

---

## Eligibility (two-tier gate)

Holding the **Mentor badge** (see `roles-and-auth.md`) is necessary but **not sufficient** to take mentorship sessions — there's a second, independent gate: **Mentorship eligibility**.

- **Admin can directly mark** any Mentor-badge holder (Member or Admin account) as Mentorship-eligible.
- **Self-apply option**: a global Admin setting ("Allow Mentors to apply for Mentorship eligibility"), **default `false`**. When enabled, badge holders see an "Apply for Mentorship" option in their profile settings. Admin reviews each application — **accept or reject, with a reason on rejection**.
- **Revocation**: Admin can toggle a Mentor's eligibility **off independently**, as a simple standalone action — **separate from suspending the Mentor badge entirely**.
- **Interaction with badge suspension**: the existing Mentor badge suspension flow (warning popup if the holder has active Speaker/Judge assignments — see `roles-and-auth.md`) should be **extended to also check for active/pending Mentorship bookings** before confirming suspension, same treatment as Event/Contest assignments.

Recommended data shape: a `mentorship_eligible` boolean (or similar) on the mentor record, independent of the badge-suspended state, plus a record of _how_ eligibility was granted (Admin-direct vs. self-applied-and-approved) for audit purposes.

---

## Discovery

- A public **Mentorship page** on the Landing site lists all currently Mentorship-eligible mentors.
- Any authenticated Member (with or without their own Mentor badge) can book a session with any eligible mentor.
- The mentor list supports **filtering and search** (e.g. by Skills, reusing the Skills field from `roles-and-auth.md`).

---

## Booking flow

Collapsed into a single request→decision flow — no separate "apply to be a mentee" step.

1. Member browses the Mentorship page, selects an eligible mentor.
2. Sees that mentor's available slots (see **Availability** below) and picks one.
3. Optionally adds a short message (similar to Event Registration Questions).
4. Submits — booking status: **Requested**.
5. Mentor **accepts** (providing a meeting link — Google Meet/Zoom URL) or **denies** the request. A denial reason is **optional**, not required.
6. If accepted: booking becomes **Upcoming**. If the session is paid (see **Payment**), payment is collected **now**, after acceptance.
7. Either **Mentor or Mentee can cancel** an Upcoming booking any time before the session start time — no enforced notice period this phase, no separate "reschedule" action (cancelling frees the slot; the mentee just books a new one).
8. After the session's scheduled time passes, it's marked **Completed** or **No-show** — **manually set by the Mentor**, confirmed (no automated no-show detection).

### Booking states

`Requested` → `Accepted` / `Denied` → (if Accepted) `Upcoming` → `Completed` / `No-show` / `Cancelled`

---

## Availability & Duration

- **Availability**: Mentor sets a simple **recurring weekly pattern** (e.g. "Tuesdays 6–8 PM, Thursdays 6–8 PM") — no per-date calendar-blocking UI for this phase.
- **Duration**: **one fixed duration per mentor** (e.g. 30 minutes) — the system slices each availability window into bookable slots of that fixed length. Not variable per slot.
- **Concurrency limit**: a Mentee can have only **one active (Requested or Accepted) booking per mentor** at a time — must resolve (complete, get denied, or cancel) before requesting another slot with that same mentor. A Mentee can still have active bookings with _different_ mentors simultaneously.

---

## Communication

- Mentor supplies a **meeting link** (Google Meet/Zoom, plain URL field) at the moment of **accepting** a request.
- No custom video/call integration — the platform stores and surfaces the link; the call itself happens off-platform.

---

## Cancellation

- Both **Mentor and Mentee** can cancel a confirmed (**Upcoming**) booking, any time before the start time.
- No enforced notice-period rule for phase 1.
- No distinct "reschedule" mechanism — cancel, then rebook a different slot if needed.

---

## Payment

- **Global Admin setting**: "Enable Paid Mentorship Sessions" — default **`false`**. When off, no mentor can charge for sessions, platform-wide.
- **Per-mentor override**: Admin can override the global setting **in either direction** for a specific mentor — force-enable paid sessions for one mentor even if the global switch is off, or force-disable for one mentor even if the global switch is on.
- If paid is enabled (globally or via override) for a given mentor, that mentor sets a **session price**.
- **Payment is collected only after the Mentor accepts the request** — not at request time. This avoids needing refund logic for denied requests; no money moves until a session is actually confirmed.
- Uses `packages/payments` (Bkash now, pluggable for future gateways) — same invoice/tracking pattern established for Events/Contests (Admin and Mentee can both view/track payment records and download invoices).
- If Admin disables paid sessions for a mentor mid-stream (globally or via override), **only new requests are blocked** — any already-booked, already-paid sessions are unaffected.

---

## Post-session

- **Phase 1**: a simple completion marker only — **Completed** or **No-show**, manually set by the Mentor.
- **Future phase (not built now)**: rating/feedback mechanism for completed sessions.

---

## Cross-feature dependencies

- **Roles & Auth** (`roles-and-auth.md`) — Mentor badge is a prerequisite; Mentorship eligibility is a new, separate gate layered on top; badge-suspension flow needs extending to check Mentorship bookings too.
- **Payment** (`shared-features.md`) — reused for paid sessions, same Bkash/pluggable-provider pattern.

## Deferred / explicitly out of scope for this phase

- Per-date availability overrides (only recurring weekly pattern for now).
- Variable session durations per slot (one fixed duration per mentor only).
- Reschedule as a distinct action (cancel + rebook instead).
- Rating/feedback mechanism post-session.
