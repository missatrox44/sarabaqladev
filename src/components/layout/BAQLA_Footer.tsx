import Link from 'next/link';
import { Rss, Github, Linkedin } from 'lucide-react';
import { RiBlueskyLine, RiTwitterXFill } from 'react-icons/ri';
import { config } from '@/config';
import { GITHUB_URL, LINKEDIN_URL, BLUESKY_URL, TWITTER_URL } from '@/lib/constants';

const RIDGE = 'M0,52 L90,30 L160,44 L250,12 L330,38 L420,20 L500,46 L600,8 L690,34 L780,18 L870,42 L960,14 L1050,36 L1140,10 L1230,40 L1320,22 L1440,48';

const pages = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/about#contact', label: 'Contact' },
];

const socials = [
  { href: '/rss', label: 'RSS feed', Icon: Rss, external: false },
  { href: GITHUB_URL, label: 'GitHub', Icon: Github, external: true },
  { href: LINKEDIN_URL, label: 'LinkedIn', Icon: Linkedin, external: true },
  { href: BLUESKY_URL, label: 'Bluesky', Icon: RiBlueskyLine, external: true },
  { href: TWITTER_URL, label: 'X', Icon: RiTwitterXFill, external: true },
];

export function BAQLA_Footer() {
  return (
    <footer className="relative z-20 -mt-20 text-baqla-olive">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-20 w-full" aria-hidden="true" focusable="false">
        <path d={`${RIDGE} L1440,80 L0,80 Z`} className="fill-baqla-lime" />
        {/* KEY-DECISION 2026-09-26: stroke required — lime on paper is 1.11:1. */}
        <path d={RIDGE} fill="none" className="stroke-baqla-olive" strokeWidth={2} vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="bg-baqla-lime px-6 pb-10 pt-6 tablet:px-12">
        <p className="font-hand text-[26px]">end of the page</p>
        <p className="font-display font-black [font-stretch:125%] leading-none text-[40px] tablet:text-[64px] desktop:text-[72px]">
          Let&apos;s build something.
        </p>
        <nav aria-label="Footer" className="mt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
            {pages.map(({ href, label }) => (
              <li key={href}><Link href={href} className="underline-offset-4 hover:underline">{label}</Link></li>
            ))}
          </ul>
        </nav>
        <ul className="mt-6 flex gap-2" aria-label="Social links">
          {socials.map(({ href, label, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-baqla-olive/10"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">{label}{external ? ' (opens in new tab)' : ''}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm">© {config.blog.copyright} {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
