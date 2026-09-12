# Claude Community Cape Town — the site

Built from the Claude Design handoff (`project/`). Two outputs, one source.

| Path | What it is |
|---|---|
| `site/` | The website. Plain static files — open `index.html` or upload the folder anywhere. |
| `dist/artifact.html` | The same page with every asset inlined, for the Claude Artifact. |
| `build-artifact.py` | Regenerates `dist/` from `site/`. Run after any edit to `site/`. |

**`site/` is the source of truth.** Edit `site/index.html`, then `python3 build-artifact.py`.

## Publishing

Drag the `site/` folder onto **app.netlify.com/drop** — it is live on a URL in
about ten seconds, and you can point a custom domain at it from there. Cloudflare
Pages and GitHub Pages take the same folder unchanged. Nothing to build, no
dependencies, no server.

## How it is put together

One page, six views, switched on the URL hash: `#/`, `#/events`, `#/gallery`,
`#/demos`, `#/speak`, `#/join`. Every view's content is in the HTML at load, so
it is all crawlable and the whole site is a single file plus assets.

- **Design system** — tokens copied verbatim from
  `_ds/claude-community-design-system-16a43eac/tokens/*.css`. The `.ccb` button
  and `.cci` input classes are the same CSS the React components ship.
- **Fonts** — Anthropic Sans/Serif Display self-hosted from the bundle; Poppins,
  Lora and IBM Plex Mono from Google Fonts, with real fallback stacks.
- **Theme** — the light/dark toggle from the design, remembered in
  `localStorage`, defaulting to the visitor's system setting. Stamped before
  first paint, so there is no flash.
- **Forms** — newsletter, speaker pitch and join all open a pre-filled email to
  tessa@live.co.za, exactly as the prototype did. See "Worth knowing" below.
- **Gallery** — click any photo for a full-size lightbox (Esc or click outside
  to close).
- **Pixel scene** — the creature still walks the dither ground eating
  strawberries. Honours `prefers-reduced-motion`, as do the ticker and the spark.

## Photos

The originals were 4000×6000, ~11 MB each — 203 MB for the folder. They are
resampled to 1600px on the long edge at quality 60: **1.9 MB for the whole site**,
still sharp on a retina screen. Originals are untouched in `project/`.

The gallery shows **ten** photos. The design placed eight; two more from the same
shoot were sitting unused in `project/uploads/` (the Claude Butter cookie tray
and a wide shot of the room facing the opening slide), so they are in.

## Worth knowing

1. **11 September 2026 is a Friday.** The design said "Thu evening" and
   "Thursday". The date is the same in both places, so it is the weekday that
   looks wrong — the site now says Friday. If the meetup is actually Thursday
   the **10th**, change the date instead.
2. **The forms are `mailto:` links.** That is what the prototype did, and it
   works, but it opens the visitor's email client, loses anyone on webmail
   without a handler, and puts the address in the page source. For real sign-ups,
   a Netlify form or a Luma embed would collect them properly.
3. **"Follow on LinkedIn"** pointed at linkedin.com's homepage in the design.
   It now points at the same profile as the host card.
4. **Unused brand assets** still in `project/assets/`, available if you want
   them: `globe-doodle.png`, `wordmark-arch-ivory.png`, `pixel-scene.png`,
   `sticker-pixel-sheep.png`, `spark-coral.png`, `arch-ivory.svg`.
5. **The Anthropic display fonts** are served from the site. Fine for a community
   page; if anyone asks you to stop, deleting the two `@font-face` blocks drops
   it cleanly to Poppins and Lora.
