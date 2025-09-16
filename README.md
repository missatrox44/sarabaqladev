# sarabaqla.dev – Personal Portfolio

This is my personal portfolio site, built with **Next.js 15**, styled with **Tailwind CSS** and **shadcn/ui**, and enhanced with animations via **Framer Motion**. It features blog content powered by **Wisp CMS**, a contact form integrated with **Formspree**, and modern developer tooling throughout.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (React 18, App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), SCSS modules
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **CMS**: [Wisp](https://wisp.blog/) via `@wisp-cms/client`
- **Forms**: [Formspree](https://formspree.io/) with React Hook Form + Zod validation
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `class-variance-authority`, `tailwind-merge`, `date-fns`, `sanitize-html`
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📦 Features

- **Portfolio Showcase** – Highlight recent projects with case studies.
- **Blog** – Powered by Wisp CMS, with filtering and search support.
- **Contact Form** – Built with Formspree + React Hook Form.
- **Responsive UI** – Designed with Tailwind and Radix primitives for accessibility.
- **Animations** – Subtle motion effects via Framer Motion.
- **SEO & RSS** – Auto-generated RSS feed, metadata, and schema.org setup.

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- pnpm / npm / yarn (your choice)

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/YOUR-USERNAME/sarabaqladev.git
cd sarabaqladev
npm install
```

### Environment Variables

To fetch blog posts from Wisp, you’ll need a Wisp account.
Once you’ve created a blog, get your Blog ID from the Wisp dashboard and add it to a .env.local file:

`NEXT_PUBLIC_BLOG_ID=your-wisp-blog-id`

### Development

Run the dev server

`npm run dev`

## 📜 License

MIT License © 2025 Sara Baqla

