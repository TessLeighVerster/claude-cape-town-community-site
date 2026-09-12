# Claude Community Design System

Design system for **Claude Community** — Anthropic's community program that runs meetups and events for people who build with Claude (deck source: the 27 August 2026 Cape Town meetup). It exists so agents and designers can produce event decks, community assets, and small UIs that look and sound like Claude Community.

**Brand voice (from the client):** playful and fun, yet overall professional. Very simple phrasing; never over-explain.

## Sources
- `uploads/deck.pdf` — "[27 August Meetup] Claude Community event deck" (7 slides, Google Slides export). Ground truth for layout, color, type roles, and copy tone. Also at its original upload name in `uploads/`.
- `assets/fonts/AnthropicSansDisplay-Semibold.otf`, `assets/fonts/AnthropicSerifDisplay-Light.otf` — real brand display cuts (one weight each), supplied by the client.
- Social kit (Figma-exported, supplied later): `assets/social/event-{meetup,impactlab,conversation}.svg`, `spotlight-{speaker,demo}.svg` (1080×1080, text outlined; spotlight photo areas are empty pattern refs), `ambassador-announcement.png`. Ground truth for social-post layouts and the doodle icon set.
- No Figma link, codebase, or website was provided. Decks + social posts are the product surfaces; there is no app/site UI to recreate.

## CONTENT FUNDAMENTALS
Voice: warm host, few words. Playful in imagery, professional in copy — the jokes live in the pixel art, not the sentences.
- **Very short lines.** Agenda items are 2–4 words: "Welcome and thanks", "Talks and demos", "Wrap up and Q&A", "Build and Connect Hour".
- **Direct address, second person, city as the audience:** "Hello, Cape Town", "Thank you, Cape Town". Speak to the room.
- **Sentence case everywhere.** The ONLY caps are the wordmark lockup "CLAUDE COMMUNITY" (letter-spaced label, bottom-left of content slides).
- **Simple verbs, no hype.** "Take one lesson you've learnt today and build something to share" — instruction, not marketing. No superlatives, no exclamation marks in the source deck.
- **No emoji.** Playfulness comes from pixel creatures and doodles. Unicode glyphs are OK as functional marks (♪ music credit, ● ○ list bullets).
- **Lowercase parenthetical asides** for examples: "(a demo, an artefact, a slack message, coded prototype)". British spelling appears ("learnt", "artefact") — keep it.
- Mono captions for ambient/system info: "♪ Ocean DX — Dream Veil" (now playing).

## VISUAL FOUNDATIONS
Two flat background colors carry the whole brand — no gradients, no photos.
- **Color:** coral `#d97757` and ivory `#faf9f5`, ink `#141413` for text/line art, white for die-cut sticker borders. Big statements sit as ink-on-coral or ink-on-ivory; small sans text on coral is ivory. One background color per slide, full-bleed. Accent = coral on ivory surfaces.
- **Type roles:** Anthropic Serif Display (Light 300) for every big statement and heading; Anthropic Sans Display (Semibold 600) for kickers, labels, the wordmark; Lora for body/serif paragraphs (agenda lists, quotes — the deck's body serif); Poppins for small sans body/UI; IBM Plex Mono for ambient captions. Display sizes are LIGHT serif and huge (56–104px on a 1280×720 slide); kickers are small semibold sans directly above them.
- **Wordmark convention:** "CLAUDE COMMUNITY" — Semibold caps, ~11px @ 1280×720, tracking .09em — sits bottom-left of content slides (ink on both backgrounds; 55% ink on ivory in the source). Cover uses the spark instead.
- **Spark:** the asterisk/spark mark (extracted, `assets/spark-*.png`) top-left or centered above arched text. Ivory on coral; ink/coral variants generated for light backgrounds.
- **Illustration, 3 registers:** (1) hand-drawn black line doodles, ~2px stroke, with small filled-ivory nodes (globe); (2) coral pixel-art creatures; (3) dot-matrix/dither halftone textures for ground/clouds. All monochrome ink on ivory except creatures, which are coral.
- **Stickers:** pixel creatures get a thick white die-cut border, ~18px rounding, soft drop shadow, slight rotation (−4°…6°). Used as playful accents on ivory slides.
- **Spacing/layout:** generous margins (~64px slide padding), lots of air; content vertically centered for statements, left-aligned for lists. Footer wordmark pinned bottom-left.
- **Corners:** slides and color blocks are square. Rounding belongs to stickers (18px) and UI components (8/14/20px, pill buttons).
- **Borders:** hairline `rgba(20,20,19,.12)` for UI dividers; 2px ink for doodle-style boxes.
- **Shadows:** none on slide graphics except sticker lift (`--shadow-sticker`); UI cards use a soft double shadow (`--shadow-card`). No inner shadows.
- **Motion:** none in source. If needed: quick fades/rises, 140ms, `--ease-out`; hover = darken coral (`--coral-deep`) or 70% opacity; press = darken + 1px down. No bounces.
- **Transparency/blur:** not used. Solid fills only.
- **Imagery color vibe:** warm, flat, matte — coral/ivory/ink only. No photography, no grain, no gradients.

## ICONOGRAPHY
The brand has a small hand-drawn doodle icon set (from the social kit) — ink line art with ivory fills, drawn for coral backgrounds: `icon-highfive` (meetup), `icon-impactlab` (window + hand), `icon-conversation` (speech bubbles), plus the `globe-doodle` and vector `spark` (`assets/social/*.svg`). Use these; extend only with the same 2px-ish wobbly line style, and never redraw them.
- There is still NO UI icon system (no chevrons/gear/search glyphs anywhere in source). Bullets are plain text glyphs: ● (level 1, 55% ink) and ○ (level 2), inherited from the deck.
- Unicode glyphs serve as functional icons (♪ for now-playing).
- If a UI genuinely needs icons, use Phosphor (regular weight) from CDN — **substitution, flagged**: nothing in the source defines an icon set. Prefer text glyphs first.
- Never redraw the spark or creatures by hand; use the PNGs in `assets/`.

## Fonts — provided vs substituted
- PROVIDED: Anthropic Sans Display Semibold, Anthropic Serif Display Light (`assets/fonts/`). One weight each — don't fake other weights of these faces.
- FROM THE DECK: Poppins (400–700) and Lora (400–500 + italic) via Google Fonts — the deck itself is set in them, so they're canon for body text, not substitutes.
- SUBSTITUTED: IBM Plex Mono for the mono captions (the deck's mono lives inside a baked image; exact face unknown). **Ask the client for more Anthropic Sans/Serif weights and the real mono if available.**

## Assets (`assets/`)
- `spark-ivory.png` / `spark-ink.png` / `spark-coral.png` — spark mark (ivory = original; ink/coral are programmatic recolors)
- `wordmark-arch-ivory.png` / `wordmark-arch-ink.png` — arched "CLAUDE COMMUNITY" lockup (badge slide)
- `globe-doodle.png` — hand-drawn globe line illustration (transparent)
- `sticker-pixel-sheep.png` — die-cut pixel sheep sticker (border + shadow baked in)
- `social/` — the six source social posts, plus extracted vectors: `spark-ivory.svg`, `arch-ivory.svg` (rounder social arch), `icon-highfive.svg`, `icon-impactlab.svg`, `icon-conversation.svg`
- `pixel-scene.png` — full pixel/dither scene (creature with basket, ivory bg baked, 2048×1152)
- `fonts/` — the two Anthropic display OTFs
- NOT extractable: the badge slide's hand-drawn illustration behind the arched text (JPEG2000 decode fails; renders corrupt). If needed, ask for the original image.
- No standalone "Claude Community logo" file exists in the source; the identity = spark + typeset wordmark. Don't invent a logo.

## Index
- `styles.css` → imports `tokens/{fonts,colors,typography,spacing}.css` — link this one file.
- `guidelines/` — foundation specimen cards (Design System tab).
- `components/` — UI primitives, all authored here (no source components existed): `forms/` Button, Input, Select, Checkbox, Radio, Switch · `display/` Card, Badge, Sticker, Wordmark · `navigation/` Tabs · `feedback/` Toast, Tooltip, Dialog. **Intentional additions:** Sticker (die-cut image treatment — a real brand pattern) and Wordmark (the caps lockup as a component).
- `slides/` — deck template recreations of all 7 source layouts (cover, badge, statement, agenda, quote/challenge, interstitial, thank-you) as `@dsCard group="Slides"` HTML.
- `templates/event-deck/` — Design Component deck template consuming projects can start from.
- `templates/social-event/`, `templates/social-spotlight/` — 1080×1080 social post templates (event badge with icon variants; speaker/demo spotlight with a drop-in photo slot).
- Social post conventions: coral bg always; arch + doodle icon + huge serif city + wide-tracked ivory caps event type + date (event posts); spark + photo + caps label + 2-line serif ink title (spotlights). Caps labels on social run larger tracking (~.16em) than the slide wordmark.
- `deck_extract/` — extraction workspace (page renders, raw pulls); not part of the shipped system.
- `SKILL.md` — agent-skill entry point.
