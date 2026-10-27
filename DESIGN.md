# Design

<!-- impeccable:design-schema 1 -->

## Platform

web

## Visual World

Carries forward Caden Albright's existing released brand (single cover art, hero banner wordmark treatment) rather than inventing a new identity. Deep wine/maroon is the dominant ground for the hero and the Gigs section; a warm off-white is the reading surface for Singles/About/Teaching; near-black is body ink. Gold is the primary accent (pulled from the "Painless" cover) used for links, primary buttons, and emphasis on dark grounds. Teal (pulled from the "Love Turned Cold" cover) is deliberately scoped to that single's own card only — it is never spent site-wide.

**Cream background note:** the warm off-white (`--paper: #f7f2ec`) reading surface was flagged by the mechanical detector as a generic "AI cream default." It is a deliberate choice here, not a reflex: it was derived from the real photography (the portrait backdrops are warm stone/plaster) and from pairing cleanly with the wine/gold/teal palette already established by the released cover art, recorded as the OWN-WORLD decision in `.impeccable/surfaces/index-html.md` before any code was written. Reviewed and kept.

## Typography

- Display: **Anton** (Google Fonts) — bold, condensed, uppercase. Chosen to echo the character of the existing hero banner's wordmark treatment.
- Body: **Hanken Grotesk** (Google Fonts) — humanist sans for paragraphs, nav, labels, and buttons.

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `--wine-900` | `#2c0a10` | Darkest ground (hero, Gigs, footer) |
| `--wine-800` | `#3c0f16` | Secondary dark surface |
| `--wine-700` | `#5a151e` | Hero gradient highlight |
| `--wine-600` | `#7a2029` | Reserved |
| `--paper` | `#f7f2ec` | Reading-surface background |
| `--paper-raised` | `#ffffff` | Cards on paper |
| `--ink` | `#1c1210` | Body text |
| `--ink-soft` | `#4a3b37` | Secondary text |
| `--gold` | `#e7bd6b` | Accent on dark grounds |
| `--gold-ink` | `#8a5a16` | Accent on light grounds (AA-compliant) |
| `--teal` | `#3f8f9e` | "Love Turned Cold" card only |
| `--teal-deep` | `#2b6672` | "Love Turned Cold" card only |

## Components

- **Nav:** sticky, translucent wine background with blur. Mobile uses a `<div class="nav-drawer">` wrapper animating `grid-template-rows: 0fr → 1fr` (not `max-height`) to avoid layout-property animation.
- **Singles cards:** real cover art, no kicker/eyebrow above the title — release context folded into the body copy instead (see Craft Notes).
- **Section headings:** every `<h2>` carries its own weight with no label above it; section identity comes from the persistent nav instead.
- **Booking form:** static HTML form posting to Formspree (requires the user's own form ID).
- **Photo gallery:** reads `photos.json` at runtime so new photos can be added without touching HTML.

## Craft Notes

- Removed a kicker/eyebrow-above-heading pattern from the hero and all four section headings during finishing — the mechanical detector and craft-floor both flag this as a hard ban, not a style default. Content was folded into subheads/body copy instead of deleted.
- Mobile nav drawer rebuilt from `max-height` to `grid-template-rows` per the detector's `layout-transition` finding, to avoid animating a layout property.
- `.nav-links` cramped-padding finding (detector) reviewed and kept as-is: each `<a>` carries its own `1.5rem` horizontal inset so the rendered text is never flush against the drawer background; verified visually. The detector's static check does not trace inset through child elements.

## Assets

- `images/portrait-hero.jpg`, `images/portrait-bio.jpg` — real photography, resized/compressed for web (sourced from the user's own files).
- `images/covers/painless.jpg`, `images/covers/love-turned-cold.jpg` — real, already-released cover art (sourced from the user's own files, not generated).
- No synthetic/generated imagery is used anywhere on this site.
