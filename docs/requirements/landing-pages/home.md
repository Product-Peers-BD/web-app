# Landing Page: Home

> Part of `docs/requirements/landing-pages/` — see `README.md` in this folder for the full page index and status.

### Personalization level: **Medium**

The homepage adapts based on login state, but not into a fully personalized/recommendation-driven experience:

- **Guests**: see generic, discovery-oriented content in every section.
- **Logged-in Members**: hero area reflects their session (e.g. personalized greeting); a few key sections swap their data source to be member-specific (e.g. "Upcoming Events" shows the member's own registered events first, falling back to general upcoming events if they have none). Content-heavy sections (Articles, Case Studies, Products, Contests previews) stay generic for everyone this phase — no skill/industry-based recommendation engine yet.

### Section-by-section structure

Each section below is spec'd with: what data it pulls, sort/filter logic, exact card fields, item counts, and CTAs — enough to design and build from directly, not just a label.

#### 1. Hero

- **Guest**: Static headline + subheadline (site tagline — exact copy TBD, content-writing task not a data/logic one). Primary CTA: **"Join Community"** → Join Community page. Secondary CTA: **"Explore Events"** → Events page.
- **Member**: Personalized greeting (e.g. "Welcome back, {first name}"). If the Member has an upcoming registered Event or Mentorship session within the next 48 hours, the greeting line is replaced with a contextual one instead (e.g. "Your mentorship session with {mentor name} is tomorrow at 6 PM"). Otherwise, falls back to the same generic greeting + two CTAs as a Member with nothing upcoming.
- No dynamic list/card content — this section is copy + CTA buttons only.

#### 2. Stats / Social Proof Bar

A horizontal row of live counters. This same live source now also powers the Stats section on `landing-pages/about-us.md` and `landing-pages/static-pages.md` (Join Community) — one shared query, no duplicate/drifting numbers across the three pages.

- **Confirmed metric set (8 total)**: **Total Members**, **Events Hosted** (count of past, completed Events), **Contests Held** (count of past, completed Contests), **Mentors Available** (count of currently Mentorship-eligible mentors), **Articles Published**, **Case Studies Published**, **1:1 Mentor Sessions** (count of Completed Mentorship sessions), **Products Listed** (count of Published Products).
- Each is a single live count, no filtering/sorting logic — a straightforward aggregate query per metric.
- With 8 metrics, the bar likely needs a scrollable/wrapping row or a condensed multi-line layout rather than a single fixed horizontal strip — a design-phase layout detail, not a data/logic decision.

#### 3. Upcoming Events Preview

- **Data source**: Events where `status = Published` and start date-time is in the future, across all 4 Event Types.
- **Sort**: soonest start date-time first.
- **Count**: 3–4 cards.
- **Guest**: the general upcoming list as above.
- **Member**: prioritize the Member's **own registered upcoming Events** first (if any); if the Member has fewer registered events than the display count, fill remaining slots with the general upcoming list (excluding ones already shown). If the Member has zero registrations, behaves identically to the Guest view.
- **Card fields**: Banner image, Title, Event Type badge, Start date/time, Format (Online/Physical/Hybrid), primary CTA ("Register" if `has_registration` and registration is open, otherwise "View Details").
- **Footer link**: "See all Events" → Events Page.

#### 4. Mentorship Spotlight

- Short call-out copy explaining the Mentorship program, with a primary CTA: **"Book a Mentor"** → Mentorship Page.
- Optionally shows a small set of mentor cards beneath the call-out. **Source mode is Admin-selectable via the Home Page Customizer**: either **Featured** (requires adding a new "Featured Mentor" flag to the Mentor eligibility record, Admin-managed, same pattern as Products' Featured — no author self-mark) or **Random** (a rotating random selection from all currently Mentorship-eligible mentors). Admin picks which mode this section uses.
- **Card fields**: profile photo, name, headline/title, top 2–3 Skills, "View Profile" or "Request Session" CTA.

#### 5. Case Studies Spotlight

- **No Featured flag on Case Studies** — unlike Products/Articles, this section doesn't use Admin curation. Instead, **source mode is Admin-selectable via the Home Page Customizer**, one of: **Latest** (most-recently-published), **Most Popular** (highest view count), or **Random**.
- **Count**: 3 cards.
- **Card fields**: Cover image, Title, Client/Company Name, Industry badge(s), author name/photo, "Read Case Study" CTA.
- **Footer link**: "See all Case Studies" → Case Studies Page.

#### 6. Featured Articles

- **Data source**: Articles where `is_curated = true`.
- **Sort**: most-recently-published first among curated articles.
- **Count**: 3 cards.
- **Card fields**: Cover image, Title, Category badge, author name/photo, estimated read time, Curated badge/icon, "Read Article" CTA.
- **Footer link**: "See all Articles" → Articles Page.

#### 7. Products Spotlight

- **Data source**: Products where `is_featured = true`.
- **Sort**: most-recently-featured first.
- **Count**: 3–4 cards.
- **Card fields**: Banner/thumbnail, Product Name, Industry badge, Stage badge, "View Product" CTA.
- **Footer link**: "Explore Products" → Products Listing Page.

#### 8. Contests Preview

- **Primary data source**: Contests where `status = Published` and currently upcoming or running (registration/submission window active).
- **Fallback**: if zero upcoming/running Contests exist, show the most recently **completed** Contest(s) with published results instead, framed as a "recent winners" spotlight rather than a "join now" call-out.
- **Sort**: soonest start date-time first (upcoming/running case); most-recent result-publish date first (fallback case).
- **Count**: 2–3 cards.
- **Card fields (upcoming/running)**: Banner, Title, dates, Format, "Register"/"View Details" CTA.
- **Card fields (winners fallback)**: Banner, Title, Winning team name + photo/logo, winner tier (e.g. "Champion"), "View Results" CTA. _(Only shown if that Contest's public score/winner-submission visibility settings allow it — see `contests-requirements.md`.)_
- **Footer link**: "See all Contests" → Contests Page.

#### 9. Testimonials

- **Data source**: Testimonials where the Active toggle is on, in Admin-set display order (see spec below).
- **Display**: carousel/slider (exact interaction pattern is a design decision, not a data one).
- No count restriction mentioned — assume all active testimonials are included in the rotation, in Admin's chosen order.

#### 10. Sponsors Strip

- **Data source**: the **"Featured"** flag on the Sponsor entity itself (see `shared-features.md` → Sponsors), independent of any Event/Contest attachment. Admin toggles this per-sponsor — the same flag also pins a sponsor at the top of the full public Sponsors page (`landing-pages/static-pages.md`).
- **Card fields**: Sponsor logo only (optionally linking to the sponsor's own inquiry/info if that becomes relevant later).

#### 11. Join Community CTA (final banner)

- Guest only (see personalization above — hidden entirely for logged-in Members, since they've already joined).
- Static headline + **"Join Now"** CTA → Register Page.

#### 12. Footer

- Link groups: **About** (About Us, Contact Us, Sponsors), **Explore** (Events, Contests, Case Studies, Articles, Products, Mentorship), **Legal** (Terms & Conditions, Privacy Policy), **Social** (social media links, reusing the platform's configured social links).
- No dynamic data — static navigation structure.

### Testimonials (new small feature — Admin-managed, no review workflow needed)

Purely Admin-authored content block — Admin manually collects testimonials (e.g. from social media, direct outreach) and enters them; no member-submission or approval flow required.

| Field                      | Required | Notes                                                                                                                                       |
| -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Author Name                | Yes      |                                                                                                                                             |
| Author Photo               | No       | Via Media Library                                                                                                                           |
| Author Designation/Company | No       |                                                                                                                                             |
| Testimonial Text           | Yes      | Short, suggested max ~250 chars                                                                                                             |
| Screenshot Image           | No       | Optional image upload — e.g. a screenshot of the testimonial as originally given (Facebook post, LinkedIn comment, etc.), via Media Library |
| Star Rating                | No       | Optional                                                                                                                                    |

- Admin can add/edit/delete testimonials from the dashboard.
- Admin controls **display order** (drag-and-reorder).
- **Active/Inactive toggle** — lets Admin hide a testimonial from the public homepage without deleting it.
- No review workflow — Admin is both author and publisher.

### Home Page Customizer (Admin Dashboard)

**Extended to also manage the About Us page** (per `landing-pages/about-us.md`) — one shared Customizer tool now governs section order and Guest/Member/Both visibility for both pages, each with its own independent section list. Originally scoped to Home only; generalized once About needed the same reorder/show-hide flexibility.

- A **single ordered list per page** (Home's 12 sections; About's 7 sections) — not one combined list across both pages, and not separate Guest/Member lists within a page — see audience visibility below.
- **Reordering**: Admin can drag-and-drop to reorder sections within a page. The order applies to both Guest and Member views alike.
- **Show/Hide**: each section has a visibility setting with three options — **Guest only**, **Member only**, or **Both**. This is how audience-specific curation is achieved with a single shared list, rather than two independent lists.
- **No content editing** in this phase — titles, descriptions, buttons/links, and similar in-section copy are not editable from the Customizer. Only order, audience-visibility, and (for Home's two data-source sections) data-source mode are configurable.
- **Data Source Mode** (new, section-specific — not "content editing," just choosing where data comes from): for Home's **Mentorship Spotlight**, Admin selects **Featured** or **Random**; for Home's **Case Studies Spotlight**, Admin selects **Latest**, **Most Popular**, or **Random**. No About Us section has a mode selector — About has no equivalent of these two.
- **No preview mode** — Admin edits blind and checks the live site after saving.
- **No undo/revert** — if a bad configuration is saved, Admin corrects it manually and saves again.
- **Explicit Save action** — nothing takes effect until Admin clicks **Save**; changes made in the Customizer UI are draft-local until then, per page being edited.

#### Auto-hide vs. manual-hide, per section

The manual Show/Hide toggle above is a ceiling, not a guarantee — some sections **additionally auto-hide when they have no data to show**, regardless of the toggle being set to visible. This keeps the homepage from displaying obviously-empty sections (e.g. an "Upcoming Events" block with zero cards), which would undermine the "prove PPBD is active" goal.

| Section               | Auto-hide when empty?                                                 |
| --------------------- | --------------------------------------------------------------------- |
| Hero                  | No — always static/personalized text, never data-dependent            |
| Stats bar             | No — always has numbers (even if some are zero)                       |
| Upcoming Events       | **Yes** — hides if zero upcoming events                               |
| Mentorship spotlight  | **Yes** — hides if zero eligible mentors                              |
| Featured Case Studies | **Yes** — hides if zero exist                                         |
| Featured Articles     | **Yes** — hides if zero Curated articles exist                        |
| Products spotlight    | **Yes** — hides if zero Featured products                             |
| Contests preview      | **Yes** — hides if no upcoming/running contests and no recent winners |
| Testimonials          | **Yes** — hides if zero active testimonials                           |
| Sponsors strip        | **Yes** — hides if zero active sponsors                               |
| Join Community CTA    | No — static content                                                   |
| Footer                | No — always shows                                                     |

Auto-hide and the manual toggle work together: a section set to "Hide" never shows regardless of data; a section set to "Show" (for its audience) can still auto-hide itself specifically when empty of data.
