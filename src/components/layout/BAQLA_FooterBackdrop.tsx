'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

const BACKDROPS: Record<string, string> = {
  '/blog': '/blog-backdrop.webp',
  '/portfolio': 'https://picsum.photos/seed/baqla/1600/1200',
};

export function BAQLA_FooterBackdrop() {
  const src = BACKDROPS[usePathname()];
  if (!src) return null;
  // KEY-DECISION 2026-09-26: lives in the Shell column, not the page, so `sticky` holds until the footer covers it.
  return (
    <div className="sticky top-0 h-dvh overflow-hidden">
      {/* KEY-DECISION 2026-09-27: speaker sits at the photo's left edge; bias the crop so narrow columns keep the speaker. */}
      <Image src={src} alt="" fill unoptimized className="object-cover object-[20%_center]" />
    </div>
  );
}
