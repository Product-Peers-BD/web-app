---
name: Product Peers BD
description: Bangladesh's community for product people — events, mentorship, contests, and real case studies.
colors:
    signal-teal: '#04a18f'
    signal-teal-dark: '#14b8a6'
    ember-amber: '#f2a93b'
    ember-ink: '#241505'
    paper: '#f6faf8'
    ink: '#0f1b19'
    card-white: '#ffffff'
    teal-mist: '#eaf5f3'
    mist-ink: '#0b4a42'
    fog: '#eff4f3'
    fog-ink: '#5b6c69'
    hairline: '#dceae7'
    alert: 'oklch(0.577 0.245 27.325)'
typography:
    heading:
        fontFamily: 'Space Grotesk, ui-sans-serif, system-ui'
        fontWeight: 600
        letterSpacing: '-0.01em'
    body:
        fontFamily: 'Manrope, ui-sans-serif, system-ui'
        fontWeight: 400
    label:
        fontFamily: 'IBM Plex Mono, ui-monospace, monospace'
        fontWeight: 500
        letterSpacing: '0.15em'
rounded:
    sm: '0.3rem'
    md: '0.4rem'
    lg: '0.5rem'
    xl: '0.7rem'
    2xl: '0.9rem'
    pill: '1.3rem'
components:
    button-primary:
        backgroundColor: '{colors.signal-teal}'
        textColor: '#ffffff'
        rounded: '{rounded.lg}'
        padding: '0 10px'
        height: '32px'
    button-primary-hover:
        backgroundColor: '#04a18fcc'
    button-accent:
        backgroundColor: '{colors.ember-amber}'
        textColor: '{colors.ember-ink}'
        rounded: '{rounded.lg}'
        padding: '0 28px'
        height: '44px'
    button-accent-hover:
        backgroundColor: '#f2a93bd9'
    card:
        backgroundColor: '{colors.card-white}'
        rounded: '{rounded.xl}'
        padding: '24px'
    badge-tag:
        backgroundColor: 'transparent'
        textColor: '{colors.fog-ink}'
        rounded: '{rounded.sm}'
        padding: '2px 8px'
---

# Design System: Product Peers BD

## Overview

**Creative North Star: "Command Deck"**

PPBD's website reads like the front console of a community that is actually running: mono-uppercase labels, a pulsing live-status dot next to tabular stats, a faint dot-grid texture behind the hero, and a marquee ticker of sponsor names — all signals borrowed from operational instrumentation rather than brochure marketing. The mood is **precise and operational**: confident, data-forward, engineering-flavored. Warmth is deliberately narrow — it comes only from Ember Amber accents and softened corners, never from decorative styling, gradients-as-decoration, or soft illustration.

The system is flat by construction. There are no drop shadows on any content surface — depth is built entirely from hairline borders (`border-border`), tonal card fills (`bg-card`), and occasional blurred glow orbs anchoring hero/CTA sections. This is a deliberate invariant, not an unfinished state (see the Elevation & Depth section's Named Rule).

Two structural sections — the final "Join Community" CTA and the site footer — are hardcoded to a fixed deep-teal-ink surface (`#0f1b19`) regardless of light/dark theme. They act as dark anchors bracketing the page, always-dark on purpose, distinct from the theme-toggle-driven light/dark mode that governs everything else.

No visual references have been explicitly rejected yet; this is the incumbent, actively-evolving system captured from the built Home page, header, and footer.

**Key Characteristics:**

- Mono-uppercase eyebrow labels and tabular-numeric stats, used the way a terminal readout is used.
- A live pulse-dot (ping animation + solid dot) as the recurring "this is real and current" signal.
- Flat surfaces: hairline borders + tonal fills, zero drop shadows on content.
- Two fixed dark-teal-ink sections (CTA, footer) that don't follow the light/dark theme toggle.
- Signal Teal as the sole primary action/brand color; Ember Amber reserved for the one emphasized action per section.

## Colors

A narrow, high-signal palette: one operational teal, one warm amber accent, and a cool off-white/near-black-teal neutral pair that both light and dark themes are built from.

### Primary

- **Signal Teal** (`#04a18f`; dark theme: `#14b8a6`): the brand's one primary action/status color — primary buttons, links, focus rings, the live pulse-dot, active nav states, chart accents. Ties directly to the "this community is live" signal.

### Secondary

- **Ember Amber** (`#f2a93b`, text-on-amber `#241505`): reserved for the single highest-priority action per section — the `accent` button variant ("Join Community", "Join Now"), star ratings, and short accent bars. Used sparingly; never as a background fill for large areas.

### Neutral

- **Paper** (`#f6faf8`): the light-theme page background — a faint teal-tinted off-white, never pure white.
- **Ink** (`#0f1b19`): light-theme foreground text, and the fixed color of the two dark-anchor sections (CTA, footer) in both themes.
- **Card White** (`#ffffff`): card/popover surfaces in light theme.
- **Teal Mist** (`#eaf5f3`) / **Mist Ink** (`#0b4a42`): pale secondary surface and its text — hover backgrounds, expanded nav states.
- **Fog** (`#eff4f3`) / **Fog Ink** (`#5b6c69`): muted surface and muted/secondary text (captions, metadata, timestamps).
- **Hairline** (`#dceae7`): the universal border/divider/input-stroke color in light theme; in dark theme this becomes a low-opacity white (`oklch(1 0 0 / 10%)`).
- **Alert** (`oklch(0.577 0.245 27.325)`): destructive/error state only.

### Named Rules

**The One Accent Rule.** Ember Amber appears at most once per section — one CTA button, one rating row, one underline bar. If teal is already carrying the primary action, amber does not also appear as decoration in the same viewport.

**The Dark Anchor Rule.** The final CTA and the footer are always rendered in the fixed Ink (`#0f1b19`) surface, independent of the light/dark theme toggle. They are structural bookends, not theme-reactive content.

## Typography

**Display/Heading Font:** Space Grotesk (with `ui-sans-serif, system-ui` fallback)
**Body Font:** Manrope (with `ui-sans-serif, system-ui` fallback)
**Label/Mono Font:** IBM Plex Mono (with `ui-monospace, monospace` fallback)

**Character:** Space Grotesk's geometric, slightly technical headline shapes pair with Manrope's neutral, highly legible body text, while IBM Plex Mono marks anything that reads as "live data" — labels, timestamps, stats, eyebrows — visually separating status/metadata from narrative copy.

### Hierarchy

- **Display/H1** (semibold 600, `text-4xl` → `text-6xl` responsive, `leading-[1.05]`, tight tracking): hero headline only.
- **Headline/H2** (semibold 600, `text-3xl` → `text-4xl`, tight tracking): section titles (e.g. "Upcoming Events", "What members are saying").
- **Title/H3** (semibold 600, `text-lg`, `leading-snug`): card titles (event names, article titles).
- **Body** (regular 400, `text-base`/`text-[15px]`, relaxed line-height): descriptions, testimonial quotes, supporting copy.
- **Label/Mono** (medium 500, `text-[9px]`–`text-xs`, `tracking-[0.08em]`–`tracking-[0.2em]`, uppercase): eyebrows, stat labels, nav-adjacent metadata, footer group headers. Always uppercase, always wide-tracked.

### Named Rules

**The Mono-Metadata Rule.** Anything that is a label, timestamp, count, or status — never narrative prose — is set in IBM Plex Mono, uppercase, wide-tracked. This is the system's primary way of signaling "this is live/factual data," independent of color.

## Layout

Content sections are centered in a `max-w-6xl` container (the hero and final CTA narrow further, to `max-w-4xl` and `max-w-3xl` respectively, to keep short, high-impact copy from stretching). Standard horizontal gutters are `px-4` → `sm:px-6` → `lg:px-8`. Section vertical rhythm is generous and consistent: `py-20` for standard content sections, `py-10`/`py-16`/`py-24` for the denser stats bar, footer, and final CTA respectively. Card grids respond `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-4` (event cards) or use CSS grid with `gap-px` hairline dividers rather than gutters (stats bar). The header is `sticky top-0`, translucent (`bg-background/90 backdrop-blur-md`) over a hairline bottom border.

## Elevation & Depth

Flat by default: this system does not use drop shadows to convey elevation on any content surface. Depth comes from three tools instead: hairline borders (`border-border`) separating surfaces from the page background, tonal fills (`bg-card`, `bg-secondary`, `bg-muted`) distinguishing surface layers, and soft blurred glow orbs (`blur-3xl`, low-opacity primary) anchoring hero and CTA sections atmospherically rather than through cast shadow. The one exception is the shadcn-default `shadow-lg` on the mobile navigation drawer overlay — a functional overlay treatment, not a content-surface pattern, and should stay confined to overlays/popovers/sheets.

### Named Rules

**The Flat-By-Default Rule.** Cards, buttons, and content blocks never use `box-shadow`. If a surface needs to feel "raised," reach for a border and a tonal background shift first. Reserve shadow for transient overlays (drawers, popovers, dropdowns) where it signals "floating above the page," not "important."

## Shapes

Radius scales off a single `--radius: 0.5rem` base via Tailwind's `--radius-{sm..4xl}` multipliers. Buttons and inputs use `rounded-lg` (0.5rem). Cards use `rounded-xl` (0.7rem) for content cards (events, testimonials) and `rounded-2xl` (0.9rem) for the one elevated "widget" card (stats bar). Badges default to a full pill (`rounded-4xl`) but are deliberately squared to `rounded-sm` (0.3rem) when used as a compact data tag (e.g. the event-type badge on event cards) — pill shape signals a status chip, square-ish shape signals a metadata tag. Borders are 1px hairlines throughout; no double borders or heavy strokes.

## Components

Component character across the board: **terse and instrumented** — compact sizing, mono-labeled metadata, tabular numbers. Components read like control-panel instruments, not soft marketing widgets.

### Buttons

- **Shape:** `rounded-lg` (0.5rem), 1px border (transparent by default, visible on `outline`).
- **Primary:** Signal Teal fill, white text, `h-8` compact default height, scales to `h-11` for large hero/CTA usage.
- **Accent:** Ember Amber fill, dark ink text (`#241505`) — reserved for the single highest-priority action per section (Join Community, Join Now).
- **Outline / Secondary / Ghost:** background-transparent or tonal-fill variants for lower-emphasis actions; `outline` uses the Hairline border color.
- **Hover / Focus:** hover drops fill opacity to ~80–85%; focus uses a 3px ring at 50% opacity of the ring color; active state nudges the button down 1px (`translate-y-px`) rather than scaling or shadowing.

### Chips / Badges

- **Status/default:** full pill (`rounded-4xl`), solid Signal Teal fill.
- **Data tag:** `outline` variant squared to `rounded-sm`, Hairline border, mono uppercase text — used for event-type/category tags on cards.

### Cards / Containers

- **Corner Style:** `rounded-xl` standard content card; `rounded-2xl` for the single elevated stats widget.
- **Background:** Card White in light theme, tonal `bg-card` in dark theme.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Border:** 1px Hairline border throughout.
- **Internal Padding:** compact (`p-3`) for image-forward event cards; generous (`p-6`) for text-forward testimonial cards.

### Navigation

- **Header:** sticky, translucent, blurred background over a hairline bottom border; nav links are muted-foreground text that gains a Teal Mist tonal background + full-foreground text on hover, not an underline.
- **Footer:** always rendered on the fixed dark Ink anchor surface (see Named Rules); section headers are mono uppercase wide-tracked in a muted teal (`#5fa89f`), links are soft mist (`#c3ddd8`) brightening to white on hover.
- **Mobile:** collapses into a slide-in sheet/drawer (the one place `shadow-lg` is used).

### Live Indicator (signature)

A two-layer dot — a solid Signal Teal dot with a `motion-safe:animate-ping` translucent twin — paired with mono uppercase text ("Live — ...", "Live numbers"). This is the system's recurring "this is happening right now" signal; reuse it wherever content claims to be current/real-time, don't invent a second live-status pattern.

### Dot-Grid Texture (signature)

A radial-gradient dot pattern (`background-image: radial-gradient(var(--border) 1px, transparent 1px)`, 20–24px cell) masked to fade out via an elliptical gradient mask, layered behind hero and stats-bar sections. Reads as graph-paper/blueprint texture reinforcing the "operational" mood. Always masked to fade at the edges — never a hard-edged grid.

### Media Placeholder (signature)

A gradient block (`from-secondary via-secondary to-muted`) carrying a faint, rotated, oversized PPBD logo mark watermark in one corner (`opacity-[0.16]`, `rotate-[8deg]`). Used wherever real imagery isn't available yet (event/content cards) — keeps placeholder space clearly on-brand rather than a generic gray box.

### Sponsor Marquee (signature)

An infinite horizontal scroll (`animate-marquee`, 34s linear) of duplicated sponsor names, edge-masked to fade at both ends, pausing on hover (`group-hover:paused`). The system's pattern for "more than fits, keep moving" content.

### Power-On Reveal (signature)

The system's one entrance-motion language, shared via the `Reveal` component (`components/snippets/reveal/reveal.tsx`): content arrives from `opacity-0`, `translate-y-3`, `blur-[6px]` to fully clear and settled, over 500ms with the `ease-power-on` easing (`cubic-bezier(0.16, 1, 0.3, 1)`) — content optically "focuses into clarity" rather than just fading up, echoing the instrument-panel metaphor. Above-the-fold content (Hero) reveals as a rehearsed on-mount sequence (badge → headline → subhead → CTA row, ~90ms apart); below-the-fold content reveals once on scroll into view via `IntersectionObserver` and never replays. Grids and lists that are genuinely a list (event rows, article rows, card grids) stagger with a capped per-item delay (60–100ms, ≤4 items); anything else reveals as one block. Stats bar values additionally count up from 0 via the `CountUpValue` component when scrolled into view — the one place a number's _arrival_ itself is the content, tying directly to "prove PPBD is active." Content is always visible by default (before JS arms the hidden state) and the transition is `motion-safe`-gated, so scripting-disabled and reduced-motion visitors always see final content, never a stuck-hidden state.

**Equal-height card grids**: `Reveal` is the actual CSS Grid/Flex item, so it — not just the card inside it — receives the row's stretched height. When wrapping a card that must match its siblings' height (any `sm:grid-cols-*`/`lg:grid-cols-*` card grid), pass `className="h-full"` to `Reveal` **and** add `h-full` to the card element inside it; otherwise the invisible `Reveal` box stretches while the bordered card stays at its own shorter content height, breaking row alignment.

### Named Rules

**The One Entrance Rule.** Every scroll/mount reveal on the site uses the Power-On Reveal — don't introduce a second fade/slide/zoom entrance pattern. Vary only _how_ it's composed (single block, staggered list, or the CTA's accent-bar draw-in), never the underlying motion material.

## Do's and Don'ts

### Do:

- **Do** set every label, stat, timestamp, and eyebrow in mono, uppercase, wide-tracked — this is the system's primary "live data" signal.
- **Do** build depth with borders and tonal fills, never `box-shadow`, on any content surface.
- **Do** keep Ember Amber to one use per section; let Signal Teal carry everything else.
- **Do** reuse the Live Indicator dot pattern for anything claiming to be current/real-time — don't invent a second version.
- **Do** keep the CTA and footer sections on the fixed dark Ink surface regardless of theme.

### Don't:

- **Don't** add drop shadows to cards, buttons, or content blocks — reserve `shadow-lg` for overlays (drawers, popovers, sheets) only.
- **Don't** use Ember Amber as a large background fill or apply it more than once per section.
- **Don't** let narrative body copy slip into mono/uppercase — that treatment is reserved for labels/metadata only.
- **Don't** ship a hard-edged, unmasked grid or texture pattern — the dot-grid always fades via mask, never sits at full, even opacity across a section.
