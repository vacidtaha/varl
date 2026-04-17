# VARL — varl.net

Corporate website for **Vacid Advanced Research Labs (VARL)**, a computational biology company building platforms that simulate living systems at molecular resolution.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS 4
- **Email** — Resend
- **Deployment** — Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                  # Pages & API routes (App Router)
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout, metadata, JSON-LD
│   ├── sitemap.ts        # Dynamic sitemap generation
│   ├── robots.ts         # Robots.txt generation
│   ├── health/           # Health vertical
│   ├── food/             # Food vertical
│   ├── science/          # Science & platform
│   ├── publications/     # Research publications
│   ├── latest/           # News & articles
│   │   └── [slug]/       # Dynamic article pages
│   ├── about/            # About the company
│   ├── investors/        # Investor relations
│   ├── partnerships/     # Partnership info
│   ├── contact/          # Contact form
│   ├── api/              # API documentation page + routes
│   │   ├── contact/      # POST /api/contact
│   │   └── api-access/   # POST /api/api-access
│   ├── api-access/       # API access request form
│   ├── apply/            # Job application form
│   ├── white-papers/     # White papers (noindex)
│   └── (legal)/          # compliance, privacy, terms, cookies, disclaimer, api-policy
├── components/           # Shared React components
├── data/                 # Static data (articles)
└── types/                # TypeScript declarations
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `node scripts/generate-founding-letter.js` | Regenerate founding letter PDF |

## Environment Variables

Create `.env.local`:

```
RESEND_API_KEY=your_resend_api_key
```
