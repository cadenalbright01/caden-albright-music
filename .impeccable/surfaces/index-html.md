---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

## Scope

Single-page personal artist site for Caden Albright: one `index.html` with anchored sections for Music (singles), Gigs (booking), Teaching, and Contact. Visitor mode: Persuade (a first-time visitor should know who he is, hear the music, and know how to book him or a lesson within seconds).

## Audience, job, action, proof, constraints

- Fans arriving from Instagram/TikTok/YouTube/Linktree: job is "hear the new single," action is a one-tap link to Spotify/Apple Music, proof is the real cover art and streaming links.
- Venues/promoters: job is "decide if he's bookable," action is the contact form, proof is photos + bio credentials (Sarah Kelly, Jonas Ekman, Jeremy Hunter/Nashville).
- Prospective students/parents: job is "decide if lessons are worth it," action is contact via email/phone, proof is real stated rates ($80/hr in-person, $60/hr online).
- Constraint: static HTML/CSS/JS only, no build step, no backend. Contact form needs a third-party form endpoint (Formspree) since there is no server.
- Constraint: existing single cover art and hero banner treatment are real released assets and must be carried forward as-is (not redesigned).

## Direction contract

THESIS: This reads as a working artist's living homebase, not a label one-pager — the music leads, everything else (booking, teaching) is one scroll away and just as real.

OWN-WORLD: Deep wine/maroon (drawn from the existing hero banner) as the dominant ground for the hero and key dividers; a warm off-white for reading surfaces; near-black ink for body text; a muted gold/ochre accent (pulled from the "Painless" cover) for emphasis, links, and primary actions. Teal (from "Love Turned Cold" cover) is reserved specifically for that single's own card, never spent site-wide. Display type: a bold, slightly condensed grotesk with tight tracking that echoes the hero wordmark's character; body set in a clean humanist sans. Corners stay sharp-to-barely-rounded, consistent with the banner's architectural wordmark.

STORY: A visitor lands, immediately sees and can stream the newest single, scrolls to the full catalog (both singles, real cover art, real streaming links), then to gig booking with a working contact form, then to teaching with real rates and a direct contact path. Nobody leaves without a working action: listen, book a gig, or book a lesson.

FIRST VIEWPORT: Full-bleed wine-maroon hero at the viewport's own height, the existing large wordmark treatment of "CADEN ALBRIGHT," a real portrait photo anchored to one side, one primary action ("Listen to the new single") plus small streaming-platform links, with a slim top nav (Music / Gigs / Teaching / Contact) pinned over it.

FORM: Single-page scrolling site, anchored nav sections, no modal, no card-grid-as-structure. No concept-seed roll was run: this project carries an incomplete but real existing brand (released cover art for both singles, an existing hero banner wordmark treatment) per new-work.md step 1's "incomplete brand" path, so the visual world is inherited and expanded rather than invented from zero. No image generation is available in this environment (code-led only, confirmed via `impeccable context`), so there is no comp round; ambition is carried in this contract instead.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

- Exact hosting provider (GitHub Pages vs Netlify vs Vercel) — deferred until the site is built and the user is ready to deploy.
- Exact wording/CTA copy for the gig contact form — drafted plainly, can be refined by the user.
