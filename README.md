# kresnapangestu.com

Personal portfolio of **Mohammad Iqbal Kresna Pangestu**, a front-end developer working on telecom operations dashboards and large-scale front-end modernisation. The site presents professional identity, work history, and selected projects, and is self-hosted on hardware I maintain myself.

**Live site:** [kresnapangestu.com](https://kresnapangestu.com)

Built with Next.js and TypeScript. Runtime dependencies: `next`, `react`, `react-dom`. Nothing else ships to the browser.

## Overview

The site answers four questions in order, arranged so a visitor gets through all four without navigating: who this is, what they specialise in, where they have worked, and what they have built.

It is deliberately small. There is no CMS, no client-side router, and no state library, because the content is static and the architecture should say so. The complexity that does exist is spent on type safety, accessibility, and making the page render correctly before JavaScript arrives.

## Features

| Feature | Notes |
|---|---|
| Server-rendered content | The full page is in the initial HTML. The intro splash is an overlay, not a gate. |
| Project detail pages | A statically generated page per project at `/projects/[id]`, with gallery, breadcrumb, and prev/next navigation. |
| Experience tabs | Keyboard-navigable tablist following the WAI-ARIA pattern, with arrow, Home, and End keys. |
| Scroll-spy navigation | `IntersectionObserver` highlights the section currently in view. |
| Fluid responsive design | `clamp()` type and spacing scales, verified from 320px to ultrawide. |
| Reduced-motion support | Every animation, the splash, and smooth scrolling respect `prefers-reduced-motion`. |
| Structured data | Person, WebSite, CreativeWork, and BreadcrumbList JSON-LD, plus a generated sitemap. |
| Graceful failure | Project cards fall back to a labelled placeholder when an image is missing, and unusable URLs render as plain text instead of dead links. |

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 13 (Pages Router) |
| Language | TypeScript, strict mode |
| UI | React 18 |
| Styling | Tailwind CSS 3 |
| Fonts | DM Sans, self-hosted WOFF2 |
| Container | Docker, Next.js standalone output |
| CI/CD | Gitea Actions on a self-hosted runner, Docker Compose, Traefik |

## Architecture

Three rules explain most of the structure.

**`pages/` contains routes only.** Components live in `src/`, aliased to `@/*`. Anything under `pages/` is publicly routable, so nothing but routes belongs there.

**Content is serialisable data.** Experience and projects are typed arrays of plain strings in `src/data/`. No JSX in content, so entries can move to JSON or a CMS without touching a component.

**Behaviour lives in hooks.** Scroll spy, intro overlay, and motion preference are each one hook with one job, which keeps the section components purely presentational.

## Project Structure

```text
pages/                    Routes only
├── _app.tsx
├── _document.tsx         lang, font preloads
├── index.tsx             Landing page composition
├── sitemap.xml.ts        Generated from project data
└── projects/[id].tsx     Statically generated project detail

src/
├── components/
│   ├── layout/           Navbar, Footer, SocialRail, IntroOverlay
│   ├── sections/         Hero, About, Experience, Projects
│   └── ui/               Tag, SectionHeading, ProjectCard, SocialIcon
├── data/                 experience.ts, projects.ts, site.ts
├── hooks/                useActiveSection, useIntroOverlay, usePrefersReducedMotion
├── lib/                  duration.ts, schema.ts, url.ts, cn.ts
├── styles/               globals.css, fonts.css
└── types/                Shared domain types
```

## Engineering Highlights

**TypeScript throughout.** Strict mode plus `noUncheckedIndexedAccess`, `noUnusedLocals`, and `noUnusedParameters`. No `any`, no `@ts-ignore`. Types encode real constraints: `EmploymentType` is a closed union, section ids derive from a `const` tuple so navigation and the scroll spy cannot drift apart, and month fields use `` `${number}-${number}` `` template types.

**Dependency reduction.** MUI, Emotion, `moment`, `react-responsive-carousel`, `react-icons`, and `react-scroll` were removed during the TypeScript migration. MUI was serving mainly as flexbox wrappers, `moment` handled a single month subtraction, and `react-icons` supplied three glyphs. First Load JS for the landing page is 87 kB.

**Server-side rendering.** An earlier version gated the whole page behind a five second loading state, so the server-rendered HTML contained only a splash screen and none of the content a search engine indexes. The splash is now an overlay above fully rendered content.

**Responsive without JavaScript.** Layout previously branched on a one-shot `window.innerWidth` read that never updated on resize. Breakpoints and `clamp()` handle it in CSS.

**Accessibility.** Semantic landmarks, a skip link, a real ARIA tablist with roving tabindex, visible focus rings, and an accent colour darkened to `#6F6000` so it meets AA contrast on white.

**Performance.** AVIF and WebP image formats, immutable cache headers on fonts and images, preloaded critical font weights, and lazy loading below the fold.

## Getting Started

```bash
npm install
npm run dev
```

Runs on [http://localhost:3000](http://localhost:3000). Requires Node 20 or later.

## Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm start            # Serve the production build
npm run lint         # ESLint, next/core-web-vitals
npm run type-check   # tsc --noEmit
```

## Development Notes

**Editing content.** Update `src/data/`, not the section components. A role with no `endedAt` is treated as current, and its displayed duration recomputes from today's date.

**Design tokens.** Colour, fluid type, and the spacing rhythm live in `tailwind.config.ts`. Use `text-fluid-*`, `py-section-y`, and `px-gutter` rather than ad-hoc values so spacing stays on one rhythm. `DESIGN.md` documents the full system.

**Animations.** Use `forwards`, never `both`. Fill mode `both` applies a keyframe's start state before the animation runs, which can leave content at `opacity: 0` if animations never start.

**Adding a section.** Add its id to `SECTION_IDS` in `src/types`. Navigation and the scroll spy both derive from it.

**Adding a project.** Append to `src/data/projects.ts`. The route, sitemap entry, structured data, and prev/next links all follow automatically.

**Testing.** No test framework is configured. `type-check`, `lint`, and `build` are the gates.

## Design Philosophy

The visual identity is black surfaces, white type, a single signal yellow, and DM Sans. Structure comes from typography and hairline rules rather than boxes and shadows. Hierarchy is created with size, weight, and space rather than decoration, and colour is used sparingly enough that the yellow still means something when it appears.

`DESIGN.md` records the system in full, including the token set, the named rules, and the explicit prohibitions.

## Deployment

Pushing to `main` triggers `.gitea/workflows/deploy.yml` on a self-hosted Gitea runner, which pulls the repository and runs `docker compose build --no-cache && docker compose up -d`. Traefik labels in `docker-compose.yml` route the domain to port 3000 on the external `traefik-public` network.

The image uses Next.js standalone output, so the production stage copies `.next/standalone`, `.next/static`, and `public` rather than the full `node_modules` tree.

```bash
docker compose build
docker compose up -d      # requires the external traefik-public network
```

CI has no build or lint gate, so a broken build surfaces at deploy time. Run `npm run build` before pushing to `main`.
