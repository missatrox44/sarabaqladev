'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export function BAQLA_NavPill() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    // KEY-DECISION 2026-09-26: sibling of the sticky panel, not a child — sticky makes a stacking context that would trap z-50.
    <nav
      aria-label="Main"
      className="fixed top-4 left-1/2 desktop:left-[max(200px,17%)] -translate-x-1/2 z-50 rounded-full bg-baqla-card border border-baqla-olive/15 shadow-[0_4px_16px_rgb(var(--baqla-olive)/0.12)]"
    >
      <ul className="flex items-center gap-1 px-2 py-1.5">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={isActive(href) ? 'page' : undefined}
              className={cn(
                'block rounded-full px-3 py-1.5 text-sm font-medium text-baqla-ink hover:text-baqla-olive',
                isActive(href) && 'text-baqla-olive underline decoration-2 underline-offset-4'
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
