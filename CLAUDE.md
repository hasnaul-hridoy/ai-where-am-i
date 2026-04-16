# AWAI Web Project — Development Instructions

## What This Project Is

"AI: Where Am I?" is an interactive web experience — 18 chapters teaching non-technical STEM professionals about AI across scientific fields. It's built as an Astro static site with MDX content and D3.js interactive visualizations.

## Current State

The project is scaffolded with Astro + MDX + D3. Chapter 1 has a complete HTML prototype at `../AWAI-Visual-Guide/ch01-v3.html` that needs to be converted into the Astro component architecture. All design decisions are finalized.

## Design Decisions (DO NOT CHANGE)

### Color Palette: Sage Tendril
```css
--bg: #F0F2EC;              /* Page background */
--bg-content: #FAFBF6;      /* Content area */
--sidebar-bg: #5A7A58;      /* Sidebar green */
--header-bg: #3A5038;        /* Header/footer forest */
--text: #1A2818;             /* Headings */
--text-body: #2A3528;        /* Body text */
--text-muted: #5A7058;       /* Secondary text */
--accent: #5A7A58;           /* Accent (sage) */
--stat-bg: #3A5038;          /* Stat card background */
--stat-text: #E8F0E0;        /* Stat card text */
```

### Fonts
- **Lilita One** — Chapter titles, section h2s, sidebar nav (Part names + chapter names). Weight 400 only (inherently bold).
- **Lora** — Subtitles, italic quotes, callout text. Serif.
- **Inter** — Body text at 17px, line-height 1.85. Sans-serif.
- **Source Code Pro** — Monospace labels, breadcrumbs, stat numbers, viz headers.

### Layout: 70% Frame
- Total content frame: 70% of viewport, centered
- Sidebar: 30% of frame (left, sticky, rounded 16px, floaty with shadow)
- Main content: 70% of frame
- Sidebar has a logo placeholder circle at top, then nav items
- No right TOC sidebar

### Sidebar Behavior
- Part titles (white, 22px Lilita One) are clickable to expand/collapse sub-chapters
- Only one Part's chapters visible at a time
- Chapter items: 17px Lilita One, white text, muted sage for disabled
- On mobile (<900px): sidebar becomes slide-out overlay with close button

### Interactive Elements
- **D3 Iceberg Bubble Chart** — Force-directed bubbles, dashed waterline, hover tooltips
- **Halicin Funnel** — Animated bars narrowing from 107M to 8
- **Animated Stat Counters** — Count up on scroll (IntersectionObserver)
- **Filterable Field Grid** — 4-column cards with popup detail on hover/click
- **Accordion** — Click to expand technical deep-dives
- **Study Notes** — Floated right margin callouts

### Content Rules
- Every visualization needs surrounding prose (2-3 paragraphs before, 1+ after)
- Text-to-visual ratio follows Distill.pub's approach — visuals where they genuinely help, not decorative
- Drop cap on first paragraph of each chapter
- All text inside any shape element must have visible padding (NEVER touch boundaries)

## File Architecture

```
src/
├── layouts/
│   └── ChapterLayout.astro    # Shared layout: header + sidebar + main + footer
├── components/
│   ├── Header.astro            # Top bar with centered brand
│   ├── Sidebar.astro           # Floaty rounded sidebar with nav
│   ├── Footer.astro            # Full-width footer
│   ├── StatCards.astro         # Animated counter stat row
│   ├── CalloutQuote.astro      # Bordered quote box
│   ├── StudyNote.astro         # Float-right margin note
│   ├── Accordion.astro         # Expandable detail section
│   ├── PageNav.astro           # Previous/Next chapter links
│   └── interactive/
│       ├── IcebergChart.astro  # D3 bubble chart (client:visible)
│       ├── FunnelChart.astro   # Animated funnel bars (client:visible)
│       └── FieldGrid.astro     # Filterable card grid (client:visible)
├── styles/
│   ├── global.css              # CSS custom properties, resets, typography
│   ├── layout.css              # Grid, sidebar, responsive breakpoints
│   └── components.css          # Shared component styles
├── data/
│   ├── chapters.ts             # Chapter metadata (titles, parts, slugs)
│   └── fields.ts               # Field card data with detail text
├── content/
│   └── chapters/
│       ├── 01-the-ai-you-think-you-know.mdx
│       ├── 02-the-dream-and-the-winters.mdx
│       └── ... (18 total)
└── pages/
    ├── index.astro             # Landing/home page
    └── chapters/
        └── [...slug].astro     # Dynamic chapter routing
```

## CSS Guidelines

Write CSS that is **easily readable and tweakable by a human**:
- Use CSS custom properties (variables) for all colors, spacing, radii
- Group styles with clear section comments: `/* ===== SIDEBAR ===== */`
- One property per line, no minification
- Use semantic class names: `.chapter-title` not `.ct` or `.h1-styled`
- Responsive breakpoints at bottom of each file, clearly labeled
- Avoid nesting beyond 2 levels
- No Tailwind — we use vanilla CSS for full control

## Code Quality for GitHub

This project will be on GitHub as a portfolio piece. Write code accordingly:
- Clear, descriptive variable and function names
- Comments explaining WHY, not WHAT (the code shows what)
- Consistent formatting (2-space indent for JS/Astro, standard CSS formatting)
- No placeholder text like "Lorem ipsum" — use real content
- Meaningful git commits when committing work

## D3 Visualization Standards

Reference sources for quality:
- **D3 Graph Gallery** (d3-graph-gallery.com) for chart patterns
- **Observable** (observablehq.com/@d3/gallery) for canonical implementations
- Always include: hover tooltips, smooth transitions, responsive resize, boundary clamping for force layouts
- All text inside shapes must have padding (see memory: feedback_text_in_shapes.md)
- Use `client:visible` directive in Astro to lazy-load D3 components

## Chapter Content Source

The full survey paper text is in `../AWAI-Chapters-v3/`. The visual guide markdown versions are in `../AWAI-Visual-Guide/`. Use these as the content source for MDX files. The ch01-v3.html prototype has the final design for Chapter 1 — replicate this exactly in Astro components, then apply the same pattern to remaining chapters.

## What To Build Next

1. Convert ch01-v3.html into Astro layout + components + MDX
2. Create the global CSS files (tokens, typography, layout, components)
3. Build each interactive component with client:visible hydration
4. Create the dynamic chapter routing ([...slug].astro)
5. Add remaining chapters (Ch 2-18) as MDX files — content from survey paper
6. Build landing/home page
7. Test responsive breakpoints (desktop, tablet, mobile)
8. Run `npm run build` and verify static output
