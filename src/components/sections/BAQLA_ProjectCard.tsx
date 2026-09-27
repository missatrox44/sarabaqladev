import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import type { Project } from '@/data/projects';

export function BAQLA_ProjectCard({ project, headingLevel = 'h3' }: { project: Project; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-baqla-card p-3 shadow-sm ring-1 ring-baqla-line/60 transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-baqla-paper">
        <Image src={project.image} alt="" fill sizes="(min-width: 800px) 33vw, 100vw" className="object-cover transition group-hover:scale-[1.02]" />
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        <Heading className="text-[17px] tablet:text-lg font-semibold text-baqla-ink group-hover:text-baqla-olive">
          {/* KEY-DECISION 2026-09-27: stretched link, so org links in the card are not nested anchors. */}
          <Link href={`/portfolio/${project.id}`} className="after:absolute after:inset-0 after:rounded-2xl">{project.title}</Link>
        </Heading>
        {project.attributions && (
          <p className="mt-1 text-[13px] desktop:text-sm text-baqla-muted">
            {project.attributions.map((a, i) => (
              <Fragment key={a.org}>
                {i > 0 && ' · '}
                {a.url ? (
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="relative z-10 underline underline-offset-2 hover:text-baqla-olive">
                    {a.org}<span className="sr-only"> (opens in new tab)</span>
                  </a>
                ) : a.org}
              </Fragment>
            ))}
          </p>
        )}
        <p className="mt-auto pt-2 text-[15px] text-baqla-ink">{project.shortDescription}</p>
      </div>
    </article>
  );
}
