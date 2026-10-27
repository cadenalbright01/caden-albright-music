# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build tooling, no framework. Deploy target is GitHub Pages, Netlify, or Vercel (user wants free static hosting; exact provider undecided).

## Users

Three audiences: (1) fans/listeners discovering Caden Albright's music via social/streaming, (2) venues, promoters, and event organizers evaluating him for live bookings, (3) prospective students (and their parents) considering private guitar/piano/voice lessons.

## Product Purpose

A personal artist website for Caden Albright, a singer-songwriter based in The Woodlands, Texas. It showcases his singles, provides a clear path for gig/booking inquiries, and promotes his private music lessons.

## Positioning

Caden pairs an active original-music release schedule (debut single "Love Turned Cold," released July 2025; follow-up single "Painless," 2026) with real industry mentorship credentials (2x Grammy-nominated artist Sarah Kelly, producer Jonas Ekman, and Nashville engineer Jeremy Hunter, who has worked with Taylor Swift) and direct 1:1 teaching availability in the same site — most emerging-artist sites cover only music, not teaching.

## Operating Context

Visitors arrive from Instagram, TikTok, YouTube, and Linktree to discover music; from word of mouth or venue/promoter research for bookings; and from local or online search for lesson inquiries. Primarily mobile traffic from social referral, so mobile layout quality matters as much as desktop.

## Capabilities and Constraints

- Homepage leads with Singles/music first (user's explicit priority); Gigs and Teaching are clearly reachable secondary sections, not buried.
- Gig/booking uses a contact form. Since this is a static site with no server, the form needs a third-party form backend (e.g. Formspree) to actually deliver submissions by email.
- Teaching section states rates and format directly; no booking/payment system, inquiries are contact-based only.
- No CMS. Content lives directly in HTML, except the photo gallery, which reads from a small `photos.json` manifest so Caden can add future photos by dropping a file in `/images/gallery/` and adding one line to that file, without touching HTML.
- No backend, no database, no user accounts.

## Brand Commitments

- Artist name: Caden Albright.
- Existing single cover art for "Painless" (gold wordmark on dark maroon) and "Love Turned Cold" (teal/white wordmark over a Park Güell, Barcelona photo) are existing released assets to carry forward as-is, not redesign.
- An existing dark maroon/red hero banner treatment of his name (large repeated wordmark + portrait) is an existing brand asset to carry forward as visual direction for the hero.
- Socials: Instagram (@cadenalbrightmusic), TikTok (@cadenalbright), YouTube (@cadenalbrightmusic), Spotify, Apple Music.

## Evidence on Hand

- Bio copy, provided verbatim by Caden (see site copy).
- Press/portrait photography: several real photos supplied, paths recorded in site copy/build notes.
- Single cover art for both released singles, supplied as real files.
- Real streaming links: Apple Music (per-song) and Spotify (artist profile).
- Real contact info: email and phone.
- Real teaching rates: $80/hr private in-person, $60/hr private online; group rates by direct inquiry only.
- No testimonials, press quotes, or video/EPK content on hand yet — do not fabricate any.

## Product Principles

1. Music first: singles and streaming links get top billing and the strongest visual treatment.
2. Make booking frictionless: one clear, working contact path for gig inquiries, no dead ends.
3. Treat teaching as a real offering, not an afterthought: state rates and format plainly, no vague "contact for info" where a real rate exists.
4. Keep the stack simple and ownable: plain files Caden can read, edit, and extend himself with guidance, since he is new to VS Code.
5. Carry forward the existing cover-art and photography brand rather than inventing a new visual identity from scratch.

## Accessibility & Inclusion

No specific requirement established.
