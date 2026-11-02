import Link from 'next/link';
import { Rss } from 'lucide-react';
import { RiBlueskyLine, RiGithubLine, RiLinkedinLine, RiTwitterXFill } from 'react-icons/ri';
import { config } from '@/config';
import { GITHUB_URL, LINKEDIN_URL, BLUESKY_URL, TWITTER_URL, NAV_LINKS } from '@/lib/constants';

// Franklin Mountains from central El Paso: slow rise from the south to Ranger Peak, then North Franklin.
const RIDGE = 'M0,116 C26.7,114.7 111.7,110.7 160,108 C208.3,105.3 255,100.7 290,100 C325,99.3 325,105.3 370,104 C415,102.7 495,96.7 560,92 C625,87.3 703.3,80.8 760,76 C816.7,71.2 860,66.7 900,63 C940,59.3 975,56.3 1000,54 C1025,51.7 1037.5,50.3 1050,49 C1062.5,47.7 1062.5,46.5 1075,46 C1087.5,45.5 1105.8,44.3 1125,46 C1144.2,47.7 1162.5,55.3 1190,56 C1217.5,56.7 1261.7,49.3 1290,50 C1318.3,50.7 1335,55.7 1360,60 C1385,64.3 1426.7,73.3 1440,76';
const STAR = 'M32,68 L39.1,86.3 L58.6,87.3 L43.4,99.7 L48.5,118.7 L32,108 L15.5,118.7 L20.6,99.7 L5.4,87.3 L24.9,86.3 Z M32,96 L32,68 M32,96 L39.1,86.3 M32,96 L58.6,87.3 M32,96 L43.4,99.7 M32,96 L48.5,118.7 M32,96 L32,108 M32,96 L15.5,118.7 M32,96 L20.6,99.7 M32,96 L5.4,87.3 M32,96 L24.9,86.3';
const TOWERS = 'M22,60 L25.5,4 M30,60 L26.5,4 M22.25,56 L29.25,48 L23.25,40 L28.25,32 L24.25,24 L27.25,16 L25.25,8 M26,4 L26,0 M38.5,60 L39.5,18 M41.5,60 L40.5,18 M40,18 L40,13';

// KEY-DECISION 2026-11-01: the ridge stretches but landmarks must not; each sits in a fixed 64px SVG at its ridge x (of 1440). Height is 1:1, so y matches.
function Landmark({ x, children }: { x: number; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 128"
      className="absolute top-0 h-32 w-16"
      style={{ left: `calc(${x / 14.4}% - 32px)` }}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const pages = [...NAV_LINKS, { href: '/about#contact', label: 'Contact' }];

const socials = [
  { href: '/rss', label: 'RSS feed', Icon: Rss, external: false },
  { href: GITHUB_URL, label: 'GitHub', Icon: RiGithubLine, external: true },
  { href: LINKEDIN_URL, label: 'LinkedIn', Icon: RiLinkedinLine, external: true },
  { href: BLUESKY_URL, label: 'Bluesky', Icon: RiBlueskyLine, external: true },
  { href: TWITTER_URL, label: 'X', Icon: RiTwitterXFill, external: true },
];

export function BAQLA_Footer() {
  return (
    <footer className="relative z-20 -mt-32 text-baqla-ink">
      <div className="relative h-32">
        {/* Painted before the ridge so its fill hides the tower bases. Olive under paper reads on olive and paper sections, like the ridge. */}
        <Landmark x={1101}>
          {[{ w: 3, c: 'stroke-baqla-olive fill-baqla-olive' }, { w: 1, c: 'stroke-baqla-paper fill-baqla-paper' }].map(({ w, c }) => (
            <g key={w} className={c} strokeWidth={w}>
              <path d={TOWERS} fill="none" />
              <circle cx={40} cy={22} r={1.4} />
              <circle cx={40} cy={31} r={1.4} />
            </g>
          ))}
        </Landmark>
        <svg viewBox="0 0 1440 128" preserveAspectRatio="none" className="relative block h-32 w-full" aria-hidden="true" focusable="false">
          <path d={`${RIDGE} L1440,128 L0,128 Z`} className="fill-baqla-paper" />
          {/* KEY-DECISION 2026-09-26: stroke required; the paper ridge is invisible over paper sections. */}
          <path d={RIDGE} fill="none" className="stroke-baqla-olive" strokeWidth={2} vectorEffect="non-scaling-stroke" />
        </svg>
        <Landmark x={930}>
          <path d={STAR} transform="rotate(-10 32 96)" fill="none" className="stroke-baqla-olive" strokeWidth={2.25} strokeLinecap="round" strokeDasharray="0 4" />
        </Landmark>
      </div>
      <div className="-mt-px bg-baqla-paper px-6 pb-10 pt-6 tablet:px-12">
        <p className="font-hand text-[26px]">hey there cool cats</p>
        <p className="font-display leading-none text-[40px] tablet:text-[64px] desktop:text-[72px]">
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
