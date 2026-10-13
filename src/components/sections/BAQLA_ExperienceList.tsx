import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Experience } from '@/data/experience';

const initials = (company: string) =>
  company.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

export function BAQLA_ExperienceList({ entries, limit, tone }: { entries: Experience[]; limit?: number; tone: 'band' | 'paper' }) {
  const rows = limit ? entries.slice(0, limit) : entries;
  const band = tone === 'band';
  return (
    <ol className={cn('divide-y', band ? 'divide-baqla-lime/25' : 'divide-baqla-line')}>
      {rows.map((e, i) => (
        <li key={`${e.title}-${e.company}-${e.period}`} className="grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 py-6 tablet:grid-cols-[auto_auto_1fr] tablet:gap-x-8">
          {/* KEY-DECISION 2026-10-12: leading-none must follow text-[size] or tailwind-merge drops it; -mt-[0.056em] lifts the digit tops to the logo's top. */}
          <span aria-hidden="true" className={cn('-mt-[0.056em] font-display text-[32px] tablet:text-[44px] desktop:text-[52px] leading-none', band ? 'text-baqla-lime' : 'text-baqla-olive')}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="row-span-2 hidden tablet:block">
            {e.image ? (
              <Image src={e.image} alt="" width={56} height={56} className="h-14 w-14 rounded-full bg-baqla-card object-contain p-1" />
            ) : (
              <span aria-hidden="true" className={cn('flex h-14 w-14 items-center justify-center rounded-full font-semibold', band ? 'bg-baqla-lime text-baqla-olive' : 'bg-baqla-olive text-baqla-lime')}>
                {initials(e.company)}
              </span>
            )}
          </div>
          <div className="col-span-2 tablet:col-span-1">
            <h3 className={cn('text-[17px] tablet:text-lg font-semibold', band ? 'text-baqla-lime' : 'text-baqla-ink')}>{e.title}</h3>
            <p className={cn('text-[13px] desktop:text-sm', band ? 'text-baqla-lime' : 'text-baqla-muted')}>
              {e.company} · {e.period}
            </p>
            {e.description && (
              <p className={cn('mt-3 max-w-prose', band ? 'text-baqla-lime' : 'text-baqla-ink')}>{e.description}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
