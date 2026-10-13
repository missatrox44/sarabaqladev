import type { Metadata } from "next";
import { Bowlby_One, Covered_By_Your_Grace, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@/styles/BAQLA_tokens.css";
import { Providers } from './providers';
import { BAQLA_Shell } from '@/components/layout/BAQLA_Shell';
import { Analytics } from "@vercel/analytics/next"
import { config } from "@/config";
import { allSkills } from "@/lib/skills";
import { ARTEMIS_BYTES_URL, BLUESKY_URL, GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from "@/lib/constants";

const bowlby = Bowlby_One({ subsets: ["latin"], weight: "400", variable: "--font-bowlby", display: "swap" });
const coveredByYourGrace = Covered_By_Your_Grace({ subsets: ["latin"], weight: "400", variable: "--font-covered", display: "swap" });
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

const personId = `${config.baseUrl}/#person`;
const artemisId = `${ARTEMIS_BYTES_URL}#organization`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Sara Baqla",
      url: config.baseUrl,
      image: `${config.baseUrl}/profile.webp`,
      jobTitle: "Full Stack Developer",
      address: { "@type": "PostalAddress", addressLocality: "Odessa", addressRegion: "TX", addressCountry: "US" },
      worksFor: { "@id": artemisId },
      sameAs: [GITHUB_URL, LINKEDIN_URL],
      knowsAbout: allSkills,
    },
    {
      "@type": "ProfessionalService",
      "@id": artemisId,
      name: "Artemis Bytes LLC",
      url: ARTEMIS_BYTES_URL,
      founder: { "@id": personId },
      address: { "@type": "PostalAddress", addressLocality: "Odessa", addressRegion: "TX", addressCountry: "US" },
      areaServed: ["Odessa, TX", "Midland, TX", "Permian Basin", "United States"],
      sameAs: [BLUESKY_URL, TWITTER_URL],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bowlby.variable} ${coveredByYourGrace.variable} ${jakarta.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
