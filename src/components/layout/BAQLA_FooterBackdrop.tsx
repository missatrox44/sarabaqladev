'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

const PAGES = ['/blog', '/portfolio'];

export function BAQLA_FooterBackdrop() {
  if (!PAGES.includes(usePathname())) return null;
  // KEY-DECISION 2026-09-26: lives in the Shell column, not the page, so `sticky` holds until the footer covers it.
  return (
    <div className="sticky top-0 h-dvh overflow-hidden">
      <Image src="https://picsum.photos/seed/baqla/1600/1200" alt="" fill unoptimized className="object-cover" />
    </div>
  );
}
