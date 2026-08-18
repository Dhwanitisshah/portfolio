# Dhwanit's Dev Quest

A 90s videogame-themed developer portfolio — CRT scan lines, neon glow, and arcade typography.

## Stack

- **Next.js 16** (Pages Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** — theme defined in `tailwind.config.ts`, bridged via the `@config` directive in `styles/globals.css`
- **ESLint 9** (flat config)

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
components/     Reusable React components (Layout, …)
lib/            Shared constants, helpers, data
pages/          Routes (Pages Router)
public/assets/  Images, sprites, fonts, audio
styles/         globals.css — CRT overlay, glitch keyframes, neon utilities
```

## Design system

### Colors

| Token | Hex | Tailwind |
| --- | --- | --- |
| Hot Neon Pink | `#FF006E` | `neon-pink` / `primary` |
| Bright Cyan | `#00D9FF` | `neon-cyan` / `secondary` |
| Electric Purple | `#9D4EDD` | `neon-purple` / `accent` |
| Dark Background | `#0A0A0A` | `dark` |
| Dark Secondary | `#1A1A2E` | `dark-secondary` |
| Text Primary | `#E8E8E8` | `content-primary` |
| Text Secondary | `#B0B0B0` | `content-secondary` |
| Success | `#00FF00` | `success` / `neon-green` |
| Warning | `#FFD60A` | `warning` / `neon-yellow` |

### Fonts

| Role | Family | Tailwind |
| --- | --- | --- |
| Headings | Press Start 2P | `font-display` |
| Body | Courier Prime | `font-sans`, `font-mono` |
| Code | JetBrains Mono | `font-code` |

Loaded from Google Fonts at the top of `styles/globals.css`.

### CSS utilities

- `.crt-overlay` / `.crt-sweep` — fixed CRT scan lines, flicker, vignette, and sweep band. Rendered once in `Layout.tsx`; `pointer-events: none`, `z-index: 9998–9999`.
- `.glitch-text` — chromatic-aberration glitch. Requires a matching `data-text` attribute.
- `.neon-pink`, `.neon-cyan`, `.neon-purple`, `.neon-green` — neon text glow.
- `.retro-grid` — synthwave grid background.
- Animations: `animate-glitch`, `animate-glitch-fast`, `animate-flicker`, `animate-scanline`, `animate-neon-pulse`, `animate-blink`.
- Shadows: `shadow-neon-pink`, `shadow-neon-cyan`, `shadow-neon-purple`.

All animations collapse under `prefers-reduced-motion: reduce`.

## Deployment

Zero-config on Vercel — push the repo and import it. For any Node host: `npm run build && npm start` (respects `PORT`). Requires Node >= 20.

## Roadmap

- [x] **Phase 0** — Foundation: theme, CRT/glitch effects, layout, placeholder hero
- [x] **Phase 1** — Hero landing, stat badges, CTAs, animated starfield, page stubs
- [ ] **Phase 2** — Projects ("Quests")
- [ ] **Phase 3** — Skills tree
- [ ] **Phase 4** — Contact

## TODO

- Add `public/assets/resume.pdf` — the hero's **VIEW RESUME** button points at
  `/assets/resume.pdf` (see `RESUME_URL` in `lib/constants.ts`) and 404s until
  the file is in place.
