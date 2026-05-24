# Aividyou - AI Tools Discovery Platform

A modern, production-ready AI tools discovery platform built with Next.js 15, TypeScript, and TailwindCSS. Fully static, deployable to GitHub Pages.

![Aividyou](https://img.shields.io/badge/Next.js-15-black?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Features

- **AI Tools Directory** — Curated collection of 100+ AI video, image, and productivity tools
- **Free Online Utilities** — 14 browser-based tools (image converters, QR generator, password generator, etc.)
- **Blog System** — SEO-optimized articles with markdown rendering
- **Search & Filtering** — Live search with category filtering
- **Dark Mode** — Beautiful glassmorphism design with dark theme
- **Fully Static** — No backend, no database, deploys anywhere
- **SEO Optimized** — Dynamic metadata, sitemap, robots.txt, OpenGraph
- **AdSense Ready** — Natural ad placeholder positions throughout
- **Mobile First** — Fully responsive design
- **Animations** — Smooth Framer Motion transitions

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **PDF Generation**: jsPDF
- **QR Codes**: qrcode
- **Deployment**: GitHub Pages (static export)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/aividyouu.git
cd aividyouu

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build static export
npm run build

# The output is in the /out directory
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with metadata
│   ├── ai-video-tools/   # AI Video Tools page
│   ├── ai-image-tools/   # AI Image Tools page
│   ├── ai-productivity-tools/  # AI Productivity page
│   ├── free-tools/       # Free utilities (14 tools)
│   ├── tool/[slug]/      # Tool detail pages
│   ├── blog/             # Blog listing + articles
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── privacy/          # Privacy Policy
│   ├── terms/            # Terms of Service
│   ├── disclaimer/       # Disclaimer
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── home/             # Homepage sections
│   ├── layout/           # Navbar, Footer
│   ├── tools/            # Tools page layout
│   ├── ui/               # Reusable UI components
│   └── utilities/        # Utility tool components
├── data/                  # Mock data (tools, blog, categories)
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## Deployment

### GitHub Pages (Automatic)

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to `main`.

1. Go to your repository **Settings > Pages**
2. Set Source to **GitHub Actions**
3. Push to `main` — deployment happens automatically

### Custom Domain Setup

1. Add a `CNAME` file in `/public` with your domain (already included: `aividyou.com`)
2. In your domain DNS settings, add:
   - **A Records** (for apex domain):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME Record** (for www):
     ```
     www -> your-username.github.io
     ```
3. In GitHub repo Settings > Pages, enter your custom domain
4. Enable "Enforce HTTPS"

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Free Utilities Included

All utilities work client-side with no backend:

| Tool | Description |
|------|-------------|
| Image to PDF | Convert images to PDF documents |
| JPG to PNG | Format conversion with transparency |
| PNG to WEBP | Modern format with quality control |
| Image Compressor | Reduce file size with quality slider |
| QR Generator | Generate QR codes from text/URLs |
| UUID Generator | Generate v4 UUIDs |
| Base64 Encoder | Encode/decode Base64 strings |
| Text Counter | Count words, characters, sentences |
| JSON Formatter | Format and validate JSON |
| Password Generator | Secure passwords with options |
| Color Palette | Generate random color palettes |
| Markdown Previewer | Live markdown preview |
| Meta Tag Generator | SEO meta tags with OG support |
| Lorem Ipsum | Placeholder text generator |

## Configuration

### Adding New Tools

Edit `src/data/tools.ts` to add new AI tools to the directory.

### Adding Blog Posts

Edit `src/data/blog.ts` to add new blog articles.

### AdSense Integration

Replace `AdPlaceholder` components with actual AdSense code:

```tsx
// Replace the AdPlaceholder component with:
<ins className="adsbygoogle"
  style={{ display: "block" }}
  data-ad-client="ca-pub-XXXXXXX"
  data-ad-slot="XXXXXXX"
  data-ad-format="auto" />
```

## Performance

- Static HTML generation for instant loading
- Lazy loading for images
- Code splitting per route
- Optimized for Lighthouse 90+ scores
- Minimal JavaScript bundle

## License

MIT License - feel free to use this project for your own AI tools platform.

---

Built with Next.js, TypeScript, and TailwindCSS.
