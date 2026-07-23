# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing landing page for PK Makes (free browser-based 3D-printing
design tools). Plain static site — `index.html`, `style.css`, `app.js`,
`assets/` — no framework, no build step, no package.json.

## Running locally

There's no dev server or build command. Serve the directory with any static
file server and open it in a browser, e.g.:

```
python -m http.server 8123
```

Then visit `http://localhost:8123`. Changes to `index.html`/`style.css`/`app.js`
are reflected on refresh — no compile step.

## Deployment

Cloudflare Pages project `pk-makes`, GitHub-connected to this repo's `master`
branch (build command and destination dir are both empty — the repo root is
deployed as-is). **Pushing to `master` on GitHub auto-deploys** — do not use
`wrangler pages deploy` for routine changes; that's only for one-off manual
deploys. Live at `pkmakes.pkroaming.com` (custom domain, CNAME to
`pk-makes.pages.dev`).

## Git Rules (Important — Follow every time)

- Do not work directly on the `master` branch; always create a new branch.
- Branch naming convention: `feature/<short-name>` or `fix/<short-name>`.
- Use the Conventional Commits format for commit messages: `feat:` (new
  feature) / `fix:` (bug fix) / `refactor:` (code restructuring) / `test:`
  (adding/updating tests) / `docs:` (documentation updates).
- 1 commit = 1 task (atomic); do not bundle multiple changes into a single
  commit.
- PR descriptions must include 3 sections: What (what was done) / Why
  (reason for the change) / Test plan (how it was tested).

## Architecture

**`index.html`** — single page, sections in document order: header/nav →
hero → tools grid → "why it's easy" features → tutorials → shop banner →
footer. Sections are wrapped in `.wrap` for the max-width centered container.

**`style.css`** — all visual design tokens (colors, radii, shadows, easing)
are CSS custom properties on `:root` at the top of the file; component rules
reference `var(--token)` rather than hardcoding values. Keep new components
consistent with that token set instead of introducing new literal colors.

**`app.js`** — vanilla JS, no build/bundling, runs top-to-bottom (script tag
is at the end of `<body>`, so no `DOMContentLoaded` wrapper is used). Three
independent concerns live here:
1. Mobile nav toggle (`#menuToggle` / `#nav.open`).
2. A guard on every `a[data-link]` that intercepts clicks on placeholder
   links (`href="#"`) — shop/social/etc. links not wired up yet — and logs
   instead of navigating. When wiring a real link for one of these, just
   give it a real `href` and remove `data-link`.
3. **i18n (English/Thai)**: a flat `translations = { en: {...}, th: {...} }`
   dictionary keyed by dotted strings (`"hero.lede"`, `"tool.pvc.desc"`,
   etc.), applied by `applyLanguage(lang)`, which walks every
   `[data-i18n="key"]` element in `index.html` and replaces its
   `textContent`. Language is picked by: explicit user choice (the `.lang-btn`
   pills in the header, persisted to `localStorage["pk-lang"]`) → else
   browser `navigator.language` (`th*` → Thai) → else English.
   - Tool/product names (e.g. "PVC Fitting Generator", "Chalak 3D Label
     Studio") are intentionally **not** translated — treated as brand names
     and left English in both languages, so they have no `data-i18n`
     attribute.
   - Identical strings across elements share one translation key instead of
     duplicating (e.g. `common.live`, `common.comingSoon`, `common.tryFree`,
     and a few footer links reuse the same key as their heading
     counterpart) — check for an existing key before adding a new one.
   - Adding new translatable text = add the key to *both* `en` and `th` in
     `app.js`, then add the matching `data-i18n="key"` attribute in
     `index.html`.

**Tool cards** (`#tools` in `index.html`, `.tool-card` in `style.css`): each
card is `is-live` or `is-soon`, with a matching `badge-live`/`badge-soon` and
a `.thumb-<name>` gradient background class on the thumbnail. A live card
links out to the tool's own subdomain (e.g. `pvcfitting.pkroaming.com`,
`chalakstudio.pkroaming.com`) rather than hosting the tool itself — this repo
is only the landing page. When adding a new tool card, follow the existing
markup shape (thumb → title row with badge → description → CTA button) and
add a matching footer link under "Tools".
