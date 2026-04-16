# AI: Where Am I?

**A Non-Technical Guide to Understanding AI Across Fields**

An interactive web experience that maps the real landscape of artificial intelligence — not chatbots and image generators, but the scientific breakthroughs transforming drug discovery, materials science, weather prediction, protein folding, and dozens of other fields.

## What This Is

Most people think AI means chatbots. This project tells the other story.

- **18 chapters** spanning AI's history, techniques, and real-world applications
- **Interactive D3.js visualizations** that make complex data explorable
- **Narrative storytelling** — reads like Sapiens, not a textbook
- **Built for STEM professionals** who know their own field but want to understand how AI is changing science broadly

## Tech Stack

- **[Astro](https://astro.build/)** — Static site generator, zero JS by default
- **[MDX](https://mdxjs.com/)** — Markdown with embedded interactive components
- **[D3.js](https://d3js.org/)** — Data-driven visualizations (bubble charts, funnels, force graphs)
- **Google Fonts** — Lilita One (headings), Lora (serif accents), Inter (body), Source Code Pro (labels)

## Design

The visual design follows a **Sage Tendril** color palette — muted greens, warm cream, forest tones. Typography-forward with a 70/30 sidebar-content split.

Design references:
- **[Distill.pub](https://distill.pub)** — lesson structure and text-visual ratio
- **[Reuters Graphics](https://graphics.reuters.com)** — selective interactive techniques
- **[The Pudding](https://pudding.cool)** — narrative data storytelling

## Project Structure

```
awai-web/
├── src/
│   ├── layouts/          # Shared page layouts (ChapterLayout, etc.)
│   ├── components/       # Reusable UI (Sidebar, StatCards, Funnel, etc.)
│   │   └── interactive/  # D3.js visualization components
│   ├── styles/           # Global CSS (tokens, typography, layout)
│   ├── content/
│   │   └── chapters/     # MDX files for each chapter
│   ├── data/             # Chapter metadata, field card data, nav structure
│   └── pages/            # Astro page routes
├── public/               # Static assets (images, fonts)
├── astro.config.mjs
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Structure

The book is organized into 5 Parts:

| Part | Theme | Chapters |
|------|-------|----------|
| I — Foundations | The opening question | Ch. 1 |
| II — The Roots | History and mathematical foundations | Ch. 2–4 |
| III — The Branches | Core AI techniques (CNNs, RNNs, RL, Transformers, etc.) | Ch. 5–10 |
| IV — The Canopy | Real-world applications across fields | Ch. 11–15 |
| V — The Horizon | Synthesis, toolkit, and open questions | Ch. 16–18 |

## Author

**Hasnaul** — CS background, telecom sector. Architect and creative director.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

Content (text, data, and narrative) is original work. If you use or adapt the content, please provide attribution.
