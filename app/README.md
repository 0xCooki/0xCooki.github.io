# App development

This site is built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description            |
| --------------- | ---------------------- |
| `npm run dev`   | Start dev server       |
| `npm run build` | Production build       |
| `npm run start` | Serve production build |
| `npm run lint`  | Run ESLint             |

## Project structure

- `app/` — routes, layout, global styles, and shared components
- `app/components/` — header, page shell, and other UI
- `public/` — static assets
- `public/images/` — photos and icons served at `/images/...`

## Images

Static files in `public/images/` are available at the site root, e.g. `public/images/profile.jpg` → `/images/profile.jpg`.

| File | Purpose |
| ---- | ------- |
| `public/images/Cooki.jpeg` | Photo shown while the **Cooki** name is displayed |
| `public/images/William.jpeg` | Photo shown while **William Ridge** is displayed |
| `public/images/github.svg` | GitHub icon on the contact page (optional) |

Image paths are configured in `app/components/IntroHero.tsx`.

## Deployment

This repo is named for [GitHub Pages](https://pages.github.com/) (`username.github.io`). The app uses [static export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports); production builds are deployed automatically via `.github/workflows/deploy.yml` on pushes to `main`.
