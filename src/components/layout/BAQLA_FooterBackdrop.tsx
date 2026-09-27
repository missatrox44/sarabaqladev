'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const BACKDROPS: Record<string, { src: string; className: string; grain?: boolean }> = {
  // KEY-DECISION 2026-09-27: speaker sits at the photo's left edge; bias the crop so narrow columns keep the speaker.
  '/blog': { src: '/blog-backdrop.webp', className: 'object-[20%_center]' },
  // KEY-DECISION 2026-09-27: monitor top sits ~8% down the photo; bias the crop up so wide columns keep it.
  '/portfolio': { src: '/portfolio-backdrop.webp', className: 'object-[center_20%]', grain: true },
};

export function BAQLA_FooterBackdrop() {
  const backdrop = BACKDROPS[usePathname()];
  if (!backdrop) return null;
  // KEY-DECISION 2026-09-26: lives in the Shell column, not the page, so `sticky` holds until the footer covers it.
  return (
    <div className="sticky top-0 h-dvh overflow-hidden">
      <Image src={backdrop.src} alt="" fill sizes="(min-width: 1280px) 66vw, 100vw" className={`object-cover ${backdrop.className}`} />
      {backdrop.grain && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
          style={{ backgroundImage: GRAIN }}
        />
      )}
    </div>
  );
}
