# Karan Mandavia — The Making of a Product

A responsive, documentary-inspired portfolio built with Next.js, TypeScript and CSS. The design uses a cinematic opening, filmstrip chapter navigation, a career timeline, editorial case-study cards, a product decision story, and a closing contact chapter.

## Run locally
Requirements: Node.js 18.17+ (Node 20 LTS recommended) and npm.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm run start
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Build command: `npm run build`.
5. Deploy. No environment variables are required.

## Project structure
- `app/page.tsx` — all portfolio sections and project content
- `app/globals.css` — visual system, responsive layouts and interactions
- `public/images/karan-journey.png` — cropped documentary-style portrait image from the supplied visual reference (not the full reference screenshot)
- `public/documents/Karan-Mandavia-Resume.pdf` — downloadable CV

## Content notes
- WealthUp's ~65% figure is presented as a reported increase in users completing their first goal and transaction. The case study notes this is not a randomised experiment.
- Bizora.ai's case study reports 48% improvement in new-user retention and ~200% increase in DAU. The CV separately reports 28% retention improvement and 40% onboarding completion improvement; the site keeps the metrics labelled by source/context rather than conflating them.
- MedCoterie is described using the responsibilities listed in the CV: discovery, customer interviews, MVP scope, competitive analysis, workflows and collaboration with founders/engineering through launch.
- The design portfolio link appears only in Contact, as requested.

## Editing
Update copy and external links in `app/page.tsx`. Update colours, typography, spacing and responsive behaviour in `app/globals.css`.
