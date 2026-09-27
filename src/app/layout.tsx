import type { Metadata } from "next";
import { Archivo, Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@/styles/BAQLA_tokens.css";
import { Providers } from './providers';
import { BAQLA_Shell } from '@/components/layout/BAQLA_Shell';
import { Analytics } from "@vercel/analytics/next"
import { config } from "@/config";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(config.baseUrl),

  title: config.site.metadata.title,
  description: config.site.metadata.description,

  openGraph: {
    type: "website",
    siteName: config.site.name,
    title: config.site.metadata.title.default,
    description: config.site.metadata.description,
    images: config.site.metadata.images.map((url) => ({
      url,
      width: 1200,
      height: 630,
      alt: config.site.name,
    })),
  },

  twitter: {
    card: "summary_large_image",
    title: config.site.metadata.title.default,
    description: config.site.metadata.description,
    images: config.site.metadata.images,
  },
};

// export const metadata: Metadata = {
//   title: 'SB | Full Stack Developer',
//   description: 'Personal portfolio showcasing my projects, experience, and skills as a professional developer',

//   metadataBase: new URL(config.baseUrl),
//   openGraph: { images: ["/fallback-blog.png"] },
//   twitter: { images: ["/fallback-blog.png"] },
// };



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${caveat.variable} ${jakarta.variable}`}>
      <body className="font-sans">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-baqla-card focus:px-4 focus:py-2 focus:text-baqla-olive">
          Skip to content
        </a>
        <Providers>
          <BAQLA_Shell>{children}</BAQLA_Shell>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
