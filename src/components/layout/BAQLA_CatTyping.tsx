'use client';

import { useEffect, useRef } from 'react';

export function BAQLA_CatTyping({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: { destroy: () => void } | undefined;
    let cancelled = false;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // KEY-DECISION 2026-11-01: light build (SVG only, 46 KB gz) loaded after hydration; this panel ships on every page.
    import('lottie-web/build/player/lottie_light').then(({ default: lottie }) => {
      if (cancelled || !ref.current) return;
      anim = lottie.loadAnimation({ container: ref.current, renderer: 'svg', loop: !still, autoplay: !still, path: '/cat-typing.json' });
    });
    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  return <div ref={ref} className={className} aria-hidden="true" />;
}
