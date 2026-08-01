---
name: Pangestu Portfolio
description: A black-and-white operator's console with one signal colour, built for a three-second read.
colors:
  ink: "#0B0B0B"
  ink-muted: "#5C5C5C"
  ink-subtle: "#8A8A8A"
  surface: "#FFFFFF"
  surface-raised: "#F6F6F3"
  surface-inverse: "#0B0B0B"
  highlighter-yellow: "#FFF66B"
  highlighter-ink: "#6F6000"
  line: "#E5E5E0"
  line-inverse: "rgba(255, 255, 255, 0.16)"
typography:
  display:
    fontFamily: "DMSans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 3.2vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "DMSans, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.6vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  subhead:
    fontFamily: "DMSans, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.8vw, 2rem)"
    fontWeight: 300
    lineHeight: 1.35
  title:
    fontFamily: "DMSans, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.375rem)"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "-0.01em"
  body:
    fontFamily: "DMSans, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "DMSans, system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 0.84rem + 0.18vw, 0.9375rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DMSans, system-ui, sans-serif"
    fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  focus: "0.125rem"
  card: "1.25rem"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 0.75rem + 2.5vw, 4rem)"
  section-y: "clamp(4rem, 3rem + 6vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.body-small}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.ink-muted}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
  tag-inverse:
    backgroundColor: "transparent"
    textColor: "rgba(255, 255, 255, 0.8)"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
  card-project:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
  tile-gallery:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
---

# Design System: Pangestu Portfolio

## Overview

**Creative North Star: "The Operator's Console"**

This system is built the way the products it advertises are built. Its author
spends his days on telecom operations dashboards — surfaces where someone has to
read the truth quickly, under pressure, and where decoration is a liability. The
portfolio applies the same discipline to itself: black, white, one signal
colour, and hairlines where a lesser system would reach for a box.

Structure is carried by type and rule, not by containers. Sections announce
themselves with a monospace index and a hairline that runs to the edge of the
column — `01 —— About` — the way a panel labels a channel. The scale is wide:
a name set at 4.5rem next to body text at 1.125rem, with very little in between,
because the primary visitor is skimming and hierarchy has to resolve at a
glance rather than reward study. Where the landing page inverts to black, it
does so wholesale, as a mode change rather than a decorative band.

The system rejects two neighbours specifically. It is not the gradient-and-glass
developer portfolio — no frosted cards, no glow, no animated blobs. And it is
not the corporate SaaS template — no stock illustration, no pastel, no
icon-circle feature grid. Both would undercut the one thing the page is trying
to prove.

**Key Characteristics:**

- One typeface, one accent, three surface tones. Nothing else.
- Hairlines instead of boxes; tonal layers instead of shadows.
- Fluid type and spacing throughout — no fixed pixel sizes in the scale.
- Motion confirms, it never performs.
- Every interactive element has a visible focus ring, and the accent has two
  members so contrast never depends on which surface it lands on.

## Colors

A near-monochrome field with a single high-energy yellow that appears rarely
enough to still mean something.

### Primary

- **Highlighter Yellow** (`#FFF66B`): the signal. Reserved for the active
  navigation item, links inside the inverted About section, text selection, and
  focus rings on dark surfaces. It reads as a marked passage — someone ran a
  marker over the line that matters. On white it fails contrast, so it is never
  used for text there.
- **Highlighter Ink** (`#6F6000`): the same yellow taken down until it clears AA
  on white (~5.6:1). This is the accent's form on light surfaces — focus rings,
  the bullet marks in experience highlights, small emphasis. It is the same
  voice at speaking volume.

### Neutral

- **Ink** (`#0B0B0B`): all primary text on light, and the inverse surface
  itself. Deliberately not pure black — a hair of warmth keeps large black
  fields from vibrating against white.
- **Ink Muted** (`#5C5C5C`): body copy, summaries, secondary description. The
  default reading colour for anything that is not a heading.
- **Ink Subtle** (`#8A8A8A`): section indices, eyebrow labels, metadata,
  disabled and placeholder states. The quietest legible step.
- **Paper** (`#FFFFFF`): the base surface, and the type colour on inverse.
- **Paper Raised** (`#F6F6F3`): the second tonal step. Gallery tiles, the
  Selected Work band, the previous/next footer. Slightly warm so it separates
  from white without a border.
- **Hairline** (`#E5E5E0`): every divider, card edge, and rule on light.
- **Hairline Inverse** (`rgba(255,255,255,0.16)`): the same on dark.

### Named Rules

**The One Signal Rule.** Highlighter Yellow marks the single most relevant thing
in view and nothing else. If two elements on a screen are yellow, one of them is
wrong. It is a state indicator, never a brand flourish.

**The Two Yellows Rule.** `#FFF66B` on dark, `#6F6000` on light. Never the
reverse. Any new accent usage states which surface it sits on before it picks a
value.

**The No Fourth Grey Rule.** Text is Ink, Ink Muted, or Ink Subtle. Inventing an
intermediate grey means the hierarchy was wrong, not that the palette was
missing a step.

## Typography

**Display Font:** DM Sans (with `system-ui`, `sans-serif`)
**Body Font:** DM Sans — the same family throughout
**Label/Mono Font:** none. The section indices use DM Sans tracked out and
rendered through a monospace stack where available; there is no second webfont.

**Character:** DM Sans is a low-contrast geometric sans with slightly narrow
apertures — neutral enough to disappear at body size, and confident at display
size without any editorial flourish. Self-hosted as WOFF2 in five weights
(300/400/400i/500/600); anything outside that set is not available and must not
be specified.

### Hierarchy

- **Display** (600, `clamp(2.25rem → 4.5rem)`, 1.05, -0.02em): the name in the
  hero, and the project name on a detail page. Once per page.
- **Headline** (600, `clamp(1.75rem → 3rem)`, 1.2, -0.02em): section titles
  ("About", "Where I've worked", "Selected work").
- **Subhead** (300, `clamp(1.375rem → 2rem)`, 1.35): the role-and-location line
  under the name. Light weight is what keeps it subordinate to a heading two
  steps larger.
- **Title** (600, `clamp(1.125rem → 1.375rem)`, 1.55): card names, accordion
  summaries, job role lines.
- **Body** (400, `clamp(1rem → 1.125rem)`, 1.65): prose. Measure capped at
  `68ch`.
- **Label** (500, `clamp(0.75rem → 0.8125rem)`, 1.5, 0.1em, often uppercase):
  tags, eyebrows, section indices, metadata.

### Named Rules

**The Fluid-Only Rule.** Every step in the scale is a `clamp()` interpolating
between its 320px and 1440px value. A fixed `text-[18px]` anywhere is a defect —
it will be wrong at one end of the range by definition.

**The One Family Rule.** DM Sans does all the work. Weight, size, colour, and
tracking create hierarchy. A second typeface would be the loudest decision on
the page and the system does not need it.

**The Skim Test.** Name, current role, and employer names must be readable in
three seconds at any width. Any typographic change is checked against that
before anything else.

## Layout

A single centred column, `76rem` (`max-w-content`) at its widest, with a fluid
gutter of `clamp(1.25rem → 4rem)` that keeps edge margins proportional rather
than stepping at breakpoints. Prose is separately capped at `68ch` so line
length stays readable even when the container is wide.

Vertical rhythm is one token: `section-y` = `clamp(4rem → 9rem)`, applied as
section padding. Sections do not tune their own spacing — where two adjacent
blocks would double the rhythm, the second one drops its top padding instead of
inventing a new value.

Breakpoints are Tailwind defaults and only three are used: `sm` (640px), `md`
(768px), `lg` (1024px). Responsive behaviour is CSS only — there is no
JavaScript width branching anywhere in the system.

Recurring grids:

- **Project index:** 1 column → 2 at `sm` → 3 at `lg`, `1.5rem` gap.
- **Project detail:** single column → `minmax(0,1fr) 21rem` at `lg`, with the
  info rail sticky at `top: 7rem`. The rail precedes the gallery in DOM order so
  the project name leads on a narrow screen; explicit grid placement puts it
  back on the right at `lg`.
- **About:** single column → `minmax(0,1fr) minmax(0,1.35fr)` at `md`.
- **Experience:** single column with a horizontally scrollable tab strip →
  `minmax(10rem,14rem) minmax(0,1fr)` at `md`, tabs becoming a vertical rail.

Anchor targets clear the fixed header via `scroll-padding-top: 5rem`. The body
sets `overflow-x: hidden` as a backstop, not as a licence — nothing in the
system may exceed the viewport width in the first place.

## Elevation & Depth

Flat at rest. Depth comes from three tonal steps — `#FFFFFF`, `#F6F6F3`,
`#0B0B0B` — and 1px hairlines. A card is distinguished from the page by a
`#E5E5E0` edge, not by a shadow; the Selected Work band separates from the
sections around it by shifting to Paper Raised.

Shadow is permitted only as a **response to state**: a hover lift, a drag, or a
genuinely floating overlay. It is never ambient, never used to make a resting
surface look important, and never stacked into a multi-level elevation scale.

### Shadow Vocabulary

- **lift-hover** (`box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08)`): the single
  sanctioned shadow. Applied on hover to an element the visitor can act on.

> Not yet present in the implementation — the current hover treatment is a
> border-colour shift. This is a sanctioned addition, not a description of
> existing code.

### Named Rules

**The Flat-At-Rest Rule.** If nothing has happened, nothing is raised. A shadow
on a default state is a defect.

**The One Shadow Rule.** There is exactly one shadow value. A second elevation
step means the layout needed hierarchy, not depth.

## Shapes

Three radii, and no others:

- **Focus** (`0.125rem`): applied to inline links and text targets so the focus
  ring has something to trace. Barely visible at rest, which is the point.
- **Card** (`1.25rem`): project cards, gallery tiles, the footer contact block,
  the previous/next links. Generous enough to read as deliberate, not so soft
  that it turns friendly.
- **Pill** (`999px`): anything that is an action or a token — buttons, tags, the
  resume chip, icon buttons.

Borders are always exactly 1px, always Hairline or Hairline Inverse. There are
no 2px borders, no dashed borders except the single "Not publicly available"
placeholder state, and no rules drawn with a filled `div` where a `border` will
do.

### Named Rules

**The Pill-or-Card Rule.** Actions and tokens are pills. Containers are cards.
An element that is neither gets no radius at all.

## Components

### Buttons

- **Shape:** fully rounded pill (`999px`), padding `0.875rem 1.5rem`.
- **Primary:** Ink fill (`#0B0B0B`), Paper text, Body Small at weight 500.
  Hover shifts the fill to Ink Muted (`#5C5C5C`).
- **Secondary:** Paper fill, Ink text, 1px Hairline border. Hover darkens the
  border to Ink. Used beside a primary, never alone.
- **On inverse (nav resume chip):** transparent fill, white text, 1px
  `rgba(255,255,255,0.4)` border, `0.375rem 1rem` padding. Hover moves both
  border and text to Highlighter Yellow.
- **Focus:** 2px Highlighter Ink ring at 2px offset on light; Highlighter Yellow
  with a surface-matched offset on dark. Never removed, never replaced with a
  colour change alone.
- **Character:** confident and tactile — a solid fill and a firm, immediate
  hover response. These read as switches, not as underlined text.

### Chips

- **Style:** transparent fill, 1px Hairline border, Ink Muted text, Label
  typography, `0.25rem 0.75rem` padding, pill radius.
- **Inverse:** `rgba(255,255,255,0.16)` border with `rgba(255,255,255,0.8)` text.
- **State:** none. Tags in this system are read-only metadata — they are not
  filters and must never be given a selected state or a click target.

### Cards / Containers

- **Corner Style:** Card radius (`1.25rem`).
- **Background:** Paper on light sections; Paper Raised for gallery tiles.
- **Shadow Strategy:** none at rest — see Elevation & Depth.
- **Border:** 1px Hairline, shifting to Ink on hover.
- **Internal Padding:** `1.25rem` at small, `1.5rem` from `sm` up.
- **Project card behaviour:** the whole card is a target via a stretched link on
  the title, so there is exactly one tab stop per card. The thumbnail scales to
  1.03 on hover; the image sits above a Paper Raised placeholder that shows
  through until it paints.

### Navigation

- **Style:** fixed header, Ink surface at 95% with a backdrop blur, 1px
  Hairline Inverse bottom edge.
- **Typography:** Body Small, `rgba(255,255,255,0.7)` at rest, white on hover,
  Highlighter Yellow when the section is in view.
- **Active state:** driven by `IntersectionObserver` against the section ids,
  and mirrored with `aria-current`.
- **Mobile:** a disclosure below `md` — an 44px icon button toggling a stacked
  list. It is not a modal and has no focus trap; it closes on Escape and on
  outside click.

### Social Rail (signature)

Fixed left and right rails from `lg` up, carrying social icons and the email
address set vertically. Colour is `mix-blend-difference` over white rather than
a tracked active section, so the rail stays legible crossing the light/dark
boundary mid-scroll instead of snapping a beat late. Each rail terminates in a
`6rem` hairline at 40% opacity.

### Tab Rail (signature)

The experience switcher. Below `md` it is a horizontally scrollable strip with a
bottom-border active state; from `md` it becomes a vertical rail with a 2px
left-border marker against a 1px Hairline track. It is a real WAI-ARIA tablist —
roving tabindex, arrow/Home/End keys — not a set of styled buttons.

### Accordion (signature)

Native `<details>`/`<summary>` with the marker suppressed, a 1px Hairline bottom
edge, Title typography, and a chevron that rotates 180° on open. No JavaScript,
which means it works before hydration and degrades to fully-expanded content
with CSS off.

## Do's and Don'ts

### Do:

- **Do** reach for a token first. `text-fluid-*`, `px-gutter`, `py-section-y`,
  `rounded-card`/`rounded-pill`, `border-line`, the ink/surface/accent families.
  A raw hex or px value in a component is a defect.
- **Do** pick the accent by surface: `#FFF66B` on dark, `#6F6000` on light.
- **Do** keep motion to confirmation — hover, focus, and entrance only. 200ms
  for state, 400–500ms for entrance, `cubic-bezier(0.4, 0, 0.2, 1)`, and never
  more than 12px of travel.
- **Do** use `animation-fill-mode: forwards`, never `both`. `both` applies the
  keyframe's start state before the animation runs, which strands content at
  `opacity: 0` whenever animations are throttled or never start.
- **Do** give every interactive element a visible focus ring, and pair
  `focus-visible:ring-offset-*` with the surface it sits on.
- **Do** let structure come from type and hairlines. If a new element needs a
  box to be understood, the hierarchy above it is probably wrong.
- **Do** honour `prefers-reduced-motion` — the global reset already collapses
  durations; new animation must not opt itself back out.

### Don't:

- **Don't** introduce gradients, frosted glass, glows, or animated background
  shapes. This is the explicitly rejected neighbour, not a matter of taste.
- **Don't** reach for the corporate-SaaS kit: stock illustration, pastel tints,
  or a feature grid of icons in circles.
- **Don't** add a shadow to a resting surface, or a second shadow value.
- **Don't** add a second typeface, or a DM Sans weight outside 300/400/500/600 —
  the other files are not self-hosted.
- **Don't** use `#FFF66B` for text on white. It sits near 2.4:1.
- **Don't** add scroll-triggered reveals, parallax, looping animation, or page
  transitions. Motion confirms; it does not perform.
- **Don't** branch layout on a JavaScript width check. Breakpoints and `clamp()`
  handle it, and a one-shot `innerWidth` read was removed from this codebase for
  being wrong on every resize.
- **Don't** give tags a hover, selected, or pressed state. They are metadata.
