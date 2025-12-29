import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from "@vercel/analytics/next"
import { config } from "@/config";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fallbackOgImage = new URL("/fallback-blog.png", config.baseUrl).toString();

export const metadata: Metadata = {
  title: 'SB | Full Stack Developer',
  description: 'Personal portfolio showcasing my projects, experience, and skills as a professional developer',
  openGraph: {
    images: [fallbackOgImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [fallbackOgImage],
  },
};


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
