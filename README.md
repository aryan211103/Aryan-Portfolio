# Aryan Hirlekar — Portfolio

Black, minimalist, flowy. Single long-scroll Next.js site with an animated neural network in the hero and an ambient self-playing Connect 4 next to the projects section.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for scroll-driven animation
- **Lenis** for smooth scrolling
- Plain Canvas for the neural network (no libraries)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  layout.tsx       # Root layout, fonts, smooth scroll, custom cursor
  page.tsx         # Composes all sections
  globals.css      # Tailwind + base styles
components/
  Nav.tsx          # Fixed top nav (mix-blend-difference so it adapts)
  Hero.tsx         # Hero section with neural net
  NeuralNet.tsx    # Canvas-based animated network (signals propagate L→R)
  About.tsx
  Work.tsx         # Project strips
  Connect4.tsx     # Self-playing ambient board
  Experience.tsx   # Tech Mahindra + IEEE publication
  Skills.tsx       # Grouped tech stack
  Contact.tsx      # Big CTA + links
  Section.tsx      # Reusable wrapper with label + fade-in
  SmoothScroll.tsx # Lenis provider
  Cursor.tsx       # Custom dot cursor
lib/
  projects.ts      # Project data — edit this to update work section
```

## What to customize

- `lib/projects.ts` — your projects
- `components/Hero.tsx` — tagline, name, "currently" block
- `components/About.tsx` — about copy + meta
- `components/Experience.tsx` — work history + publications
- `components/Skills.tsx` — stack groups
- `components/Contact.tsx` — links, big CTA copy
- `tailwind.config.ts` — colors (accent is `#4d9eff`)

## Deploy

Push to GitHub, import on Vercel. Done.

## Notes on the design

- **Neural net** lives in the hero only — fades out on scroll.
- **Connect 4** is in the Work section, anchored to project 03. It plays itself with a simple win/block heuristic and resets after each game.
- Custom dot cursor is **disabled on touch devices** automatically.
- Top nav uses `mix-blend-difference` so it stays readable over any section background.
- Sections fade + translate in via `whileInView` with `once: true`.
