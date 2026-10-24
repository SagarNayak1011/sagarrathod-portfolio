# Sagar Rathod: Associate Product Manager Portfolio

A colourful, 3D, "page-in-page" portfolio. React + TypeScript + Vite, plain CSS (no UI framework), about 64 KB of JavaScript gzipped.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Edit your content
- `src/data/links.ts`: email, phone, LinkedIn, GitHub (empty = hidden), resume path, footer photo note.
- `src/data/profile.ts`: experience, skills.
- `src/data/cases/*.ts`: one file per case study / teardown / concept.
- `src/components/Pages.tsx`: Home, Work, Skills, Process, About, Contact pages.
- `public/photos/`: portraits used in the 3D ring. `public/resume/`: the resume PDF the buttons download.

Routes use hash URLs (`/#/work`, `/#/case/checkout`), so no server rewrites are required.

## Deploy to Vercel (free Hobby plan)
1. Push this repo to GitHub.
2. vercel.com → Add New → Project → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`. No environment variables.
4. Click Deploy. Every `git push` to `main` redeploys automatically.

All case-study numbers are illustrative assumptions, not measured results.
