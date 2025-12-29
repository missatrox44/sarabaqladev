import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from "@vercel/analytics/next"
import { config } from "@/config";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

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
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
            <Analytics />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
