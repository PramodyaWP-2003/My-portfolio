# Pasindu Pramodya — Portfolio

React + Vite + Tailwind CSS v4 + Lucide icons. All content lives in `src/data.js`.

## Setup
Requires Node.js 18+.
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs /dist
npm run preview    # test the production build
```

## Customise
1. Edit `src/data.js`: email, `socials.github`, `socials.linkedin`, project `github`/`demo`, certificate `link`.
   Empty links show "(soon)" and are not clickable, so nothing is broken.
2. Replace `public/Pasindu_Pramodya_CV.pdf` with your CV (keep the file name, or change `cvPath` in `data.js`).
3. Colours and fonts: the `@theme` block in `src/index.css`.

## Contact form
No backend is connected. The form opens the visitor's email app with a pre-filled message (`mailto:`).
To receive messages directly, connect a service such as Formspree or Web3Forms and replace `submit` in `Contact.jsx`.

## Deploy
**Vercel / Netlify:** push to GitHub, import the repo. Build command `npm run build`, output directory `dist`.

**GitHub Pages:**
1. In `vite.config.js` set `base: '/<repo-name>/'` (use `'/'` for a `<username>.github.io` repo).
2. `npm run build`, then publish `dist` (for example with the `gh-pages` package or a GitHub Actions workflow).
