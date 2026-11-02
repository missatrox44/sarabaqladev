# sarabaqla.dev – Personal Portfolio

This is my personal portfolio site, built with **Next.js 16**, styled with **Tailwind CSS 4**, and enhanced with animations via **Framer Motion** and **Lottie**. It features blog content powered by **Wisp CMS**, a contact form integrated with **Formspree**, and modern developer tooling throughout.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (React 19, App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), SCSS modules
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [Lottie](https://airbnb.io/lottie/) via `lottie-web`
- **CMS**: [Wisp](https://wisp.blog/) via `@wisp-cms/client`
- **Forms**: [Formspree](https://formspree.io/), with a [Radix](https://www.radix-ui.com/) toast for feedback
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Utilities**: `clsx`, `class-variance-authority`, `tailwind-merge`, `date-fns`, `sanitize-html`
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📦 Features

- **Portfolio Showcase** – Highlight recent projects with case studies.
- **Blog** – Powered by Wisp CMS, with related posts on each article.
- **Contact Form** – Built with Formspree, with input length caps and a honeypot.
- **Responsive UI** – Two-column desktop layout with a sticky brand panel.
- **Animations** – Subtle motion effects that respect reduced-motion settings.
- **SEO & Feeds** – RSS feed, sitemaps, `/llms.txt`, metadata, and schema.org JSON-LD.

## 🛠️ Getting Started

### Prerequisites
- Node.js 26.13 (see `.nvmrc`)
- pnpm 12 (pinned in `package.json` via `packageManager`; enable with `corepack enable`)

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/missatrox44/sarabaqladev.git
cd sarabaqladev
pnpm install
```

### Environment Variables

To fetch blog posts from Wisp, you’ll need a Wisp account.
Once you’ve created a blog, copy `.env.sample` to `.env.local` and add the Blog ID from the Wisp dashboard:

`NEXT_PUBLIC_BLOG_ID=your-wisp-blog-id`

### Development

Run the dev server

`pnpm dev`

## 📜 License

MIT License © 2025–2026 Sara Baqla
