# attara.dev

Personal site of Mike Attara — Cloud & Platform Engineer. Built with Next.js 15 and Tailwind CSS 4, statically exported and deployed to GitHub Pages at [www.attara.dev](https://www.attara.dev).

## Features

- **System-aware theming** that follows the visitor’s OS preference by default, with manual toggles on desktop and mobile.
- **Responsive layout** combining a persistent sidebar navigation with mobile-first interactions.
- **Sectioned storytelling** covering hero highlights, about, experience, and contact modules.
- **Modern tooling** powered by Next.js App Router, React 19, Tailwind CSS 4, and Lucide icons.
- **Vercel Analytics** integration ready for production deployments.

## Getting Started

### Prerequisites

- Node.js 18.18 or newer (Next.js 15 requirement)
- [pnpm](https://pnpm.io/) 8+ (other package managers work, but commands below assume pnpm)

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Visit `http://localhost:3000` to explore the site. The server reloads automatically when files change.

### Available Scripts

- `pnpm dev` – Run the Next.js development server.
- `pnpm build` – Create an optimized production build.
- `pnpm start` – Serve the production build.
- `pnpm lint` – Lint the project (ensure ESLint is installed or add it via `pnpm add -D eslint`).

## Theming

- The site respects the system’s `prefers-color-scheme` by default.
- Theme toggles appear in the sidebar and mobile controls, letting visitors switch between light and dark manually.
- The active choice is stored locally, so repeat visits keep the user’s preference.
- Theme tokens live in `app/globals.css`, making it easy to adjust palettes or add brand colours.

## Project Structure

- `app/` – App Router entry points, global layout, and top-level pages.
- `components/` – Reusable UI, including navigation, section content, and theming utilities.
- `public/` – Static assets such as icons.
- `postcss.config.mjs` & `tailwindcss` imports – Tailwind 4 pipeline configuration.

## Contact Form Setup

The contact form uses **Web3Forms** (free tier: 250 submissions/month) with mailto fallback.

**Local Development:**

1. Get free access key at [web3forms.com](https://web3forms.com)
2. Create `.env.local` from example: `cp .env.local.example .env.local`
3. Add your key: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key`
4. Restart dev server: `pnpm dev`

**GitHub Pages Deployment:**

1. Add secret in GitHub: Settings → Secrets and variables → Actions
2. Name: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`, Value: your key
3. Push to trigger deployment

## Customising Content

Content is centralized in the `data/` directory with TypeScript types:

- `data/hero.ts` – Hero section highlights, focus areas, and badges
- `data/about.ts` – Stats, expertise areas, principles, and community highlights
- `data/experience.ts` – Career timeline, roles, and skills
- `data/navigation.ts` – Nav items, social links, and focus areas

Components in `components/` render this data:

- `components/hero.tsx`, `components/about.tsx`, `components/experience.tsx`
- `components/contact.tsx` – Contact form and collaboration details
- `components/navigation.tsx` – Sidebar and mobile navigation

Update data files to change content without touching component code.

## Deployment

The project is deployment-ready for platforms like Vercel:

```bash
pnpm build
pnpm start
```

**Environment Variables for Production:**

- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` – Contact form API key (optional, uses mailto fallback if not set)

For static hosting (e.g. GitHub Pages), Next.js 15 replaces `next export` with [`output: 'export'`](https://nextjs.org/docs/app/building-your-application/deploying/static-exports). Running `pnpm build` now emits the fully static site to the `out/` directory—no separate `next export` step is needed.

## License

No license has been specified. All rights reserved unless a license file is added.
