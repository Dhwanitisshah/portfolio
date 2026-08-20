# Dhwanit Shah — Portfolio

A clean, professional portfolio positioned for startup founders, early-stage
companies, and freelance clients. Soft and sophisticated: light pastels, calm
typography, no motion.

## Stack

- **Next.js 16** (Pages Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** — tokens defined in `tailwind.config.ts`, bridged into the
  stylesheet with the `@config` directive in `styles/globals.css`
- **ESLint 9** (flat config)
- Fonts self-hosted at build time via `next/font` — no runtime request to Google

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint with autofix |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check` | lint + typecheck + build (CI gate) |
| `npm run clean` | Remove `.next` and `out` |

## Project structure

```
components/     Reusable UI (Header, Footer, Button, Hero, About, Experience,
                Projects, ProjectCard, Skills, ScrollToTop)
lib/            constants.ts (tokens, metadata, nav), projects.ts, skills.ts,
                experience.ts, useReveal.ts, fonts.ts, utils.ts
pages/          Routes (Pages Router); _app.tsx holds the global chrome
public/         favicon.svg, robots.txt, sitemap.xml
public/assets/  resume.pdf and other downloads
styles/         globals.css — base styles only
```

`Header`, `Footer` and `ScrollToTop` are rendered once in `pages/_app.tsx`, so
every page picks them up automatically. Site-wide metadata (title, description,
Open Graph, Twitter card, canonical) also lives there via `next/head` rather
than in `_document.tsx`, which Next warns against for `<title>`; it is all
derived from `SITE` in `lib/constants.ts`.

The header's active nav state is a scroll spy. A plain visibility threshold does
not work — Projects is several viewports tall and can never be "50% visible" —
so the observer root is shrunk to a band just below the sticky header, and
whichever section occupies that band wins. Reaching the bottom of the page
activates the last section, which is otherwise too short to reach the band.

## Design system

### Colors

Defined in `tailwind.config.ts` and mirrored in `lib/constants.ts`.

| Role | Hex | Tailwind |
| --- | --- | --- |
| Background | `#F5F8F6` | `background` |
| Surface | `#FFFFFF` | `surface` |
| Hover wash | `#F0F4F1` | `hover` |
| Border | `#E0E0E0` | `border` |
| Text primary | `#1A1A1A` | `ink` |
| Text secondary | `#4A4A4A` | `muted` |
| Accent primary (sage) | `#6B8E73` | `sage` |
| Accent primary, hover | `#5A7A62` | `sage-dark` |
| Accent secondary (warm brown) | `#8B7355` | `clay` |
| Accent secondary, hover | `#725E46` | `clay-dark` |

Project status pills use conventional state colours defined locally in
`ProjectCard.tsx`, outside the sage/clay system.

Each accent also carries `-light` and `-tint` steps for badges and washes.

### Fonts

| Role | Family | Tailwind |
| --- | --- | --- |
| Headings | Inter | `font-heading` |
| Body | Inter | `font-sans` |
| Monospace | JetBrains Mono | `font-mono` |

### Shadows

`shadow-subtle`, `shadow-card`, `shadow-elevated` — soft neutral elevation, no
glows.

### Motion

Deliberately minimal: 150ms colour transitions on interactive elements, and a
one-way scroll reveal on each section and on the project cards (fade + 16px
rise, with a 100ms stagger across the cards) driven by `IntersectionObserver`
via the `useReveal` hook. The reveal transform is applied to a wrapper *inside*
each section, never to the `section` itself — the section is the scroll anchor
for its nav link, and a transform on it shifts where that link lands.
Everything collapses under
`prefers-reduced-motion: reduce`; the `.reveal` class is unhidden by a
`<noscript>` rule in `_document.tsx` so the cards are never invisible without
JS.

## Project preview images

Each project in `lib/projects.ts` names a screenshot under `public/assets`.
`getStaticProps` in `pages/index.tsx` checks the filesystem at build time and
drops the reference when the file is absent, so a card with no screenshot
renders the `[Screenshot coming soon]` placeholder — the browser never requests
a file that 404s and then reflows the card. Drop the image in and rebuild to
show it.

## Deployment

Zero-config on Vercel — push the repo and import it. For any Node host:
`npm run build && npm start` (respects `PORT`). Requires Node >= 20.9.

`SITE.url` defaults to the Vercel deployment; set `NEXT_PUBLIC_SITE_URL` to
override it. It feeds the canonical link and the Open Graph tags.

`public/robots.txt` and `public/sitemap.xml` hard-code that same origin — update
them alongside a domain change.

## Roadmap

- [x] **Phase 0** — Foundation: theme, tokens, Header/Footer/Button, placeholder page
- [x] **Phase 1** — Hero landing
- [x] **Phase 2** — Projects
- [x] **Phase 3** — About, Skills, Contact
- [x] **Phase 4** — SEO metadata, scroll spy, footer, scroll-to-top
- [x] **Phase 5** — Experience timeline, project image slots
