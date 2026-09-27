import Link from 'next/link';
import { Rss, Github, Linkedin } from 'lucide-react';
import { RiBlueskyLine, RiTwitterXFill } from 'react-icons/ri';
import { config } from '@/config';
import { GITHUB_URL, LINKEDIN_URL, BLUESKY_URL, TWITTER_URL, NAV_LINKS } from '@/lib/constants';

const RIDGE = 'M0,52 C9,47 28,30 55,24 C82,18 114,20 165,16 C216,12 313,2 364,2 C415,2 443,8 473,16 C503,24 523,43 546,50 C569,57 580,60 610,60 C640,60 684,54 728,52 C772,50 838,51 874,48 C910,45 925,42 946,36 C967,30 982,14 1001,10 C1020,6 1033,10 1060,12 C1087,14 1129,20 1165,24 C1201,28 1228,29 1274,36 C1320,43 1412,61 1440,66';

const pages = [...NAV_LINKS, { href: '/about#contact', label: 'Contact' }];

const socials = [
  { href: '/rss', label: 'RSS feed', Icon: Rss, external: false },
  { href: GITHUB_URL, label: 'GitHub', Icon: Github, external: true },
  { href: LINKEDIN_URL, label: 'LinkedIn', Icon: Linkedin, external: true },
  { href: BLUESKY_URL, label: 'Bluesky', Icon: RiBlueskyLine, external: true },
  { href: TWITTER_URL, label: 'X', Icon: RiTwitterXFill, external: true },
];

export function BAQLA_Footer() {
  return (
    <footer className="relative z-20 -mt-20 text-baqla-ink">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-20 w-full" aria-hidden="true" focusable="false">
        <path d={`${RIDGE} L1440,80 L0,80 Z`} className="fill-baqla-paper" />
        {/* KEY-DECISION 2026-09-26: stroke required; the paper ridge is invisible over paper sections. */}
        <path d={RIDGE} fill="none" className="stroke-baqla-olive" strokeWidth={2} vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="-mt-px bg-baqla-paper px-6 pb-10 pt-6 tablet:px-12">
        <p className="font-hand text-[26px]">hey there cool cats</p>
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-baqla-ink/10"
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
