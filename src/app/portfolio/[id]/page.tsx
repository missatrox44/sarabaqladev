import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { BAQLA_ProjectCard } from '@/components/sections/BAQLA_ProjectCard';
import { HEADING_CLASS } from '@/lib/constants';

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: { title: project.title, description: project.shortDescription, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) notFound();
  const project = projects[index];
  const others = [1, 2].map((offset) => projects[(index + offset) % projects.length]);

  const blocks = [
    { heading: 'Problem', body: project.problem },
    { heading: 'Solution', body: project.solution },
    { heading: 'Impact', body: project.impact },
  ];
  const links = [
    { href: project.liveDemo, label: 'Live site' },
    { href: project.github, label: 'GitHub' },
  ].filter((l): l is { href: string; label: string } => Boolean(l.href));

  return (
    <article>
      <div className="sticky top-0 aspect-[16/9] w-full bg-baqla-card">
        <Image src={project.image} alt="" fill priority sizes="(min-width: 1280px) 66vw, 100vw" className="object-cover" />
      </div>
      <div className="relative bg-baqla-paper px-6 pt-10 pb-16 tablet:px-12">
        <h1 className={`${HEADING_CLASS} text-baqla-ink`}>{project.title}</h1>
        {project.attributions && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Built with">
            {project.attributions.map((a) => (
              <li key={a.org} className="rounded-full bg-baqla-lime px-3 py-1 text-[13px] font-medium text-baqla-olive">
                {a.url ? (
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                    {a.org}<span className="sr-only"> (opens in new tab)</span>
                  </a>
                ) : a.org}
              </li>
            ))}
          </ul>
        )}
        {links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-baqla-olive px-5 py-2.5 font-semibold text-baqla-lime hover:bg-baqla-ink">
                {l.label}<span className="sr-only"> (opens in new tab)</span>
              </a>
            ))}
          </div>
        )}
        <div className="mt-12 grid gap-10 desktop:grid-cols-3">
          {blocks.map((b) => (
            <section key={b.heading}>
              <h2 className="text-lg font-semibold text-baqla-olive">{b.heading}</h2>
              <p className="mt-3 text-baqla-ink leading-relaxed">{b.body}</p>
            </section>
          ))}
        </div>
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-baqla-olive">Tech stack</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <li key={t} className="rounded-full border border-baqla-olive/30 px-3 py-1 text-[13px] text-baqla-ink">{t}</li>
            ))}
          </ul>
        </section>
      </div>
      <section className="baqla-band relative bg-baqla-olive px-6 pt-16 pb-32 tablet:px-12">
        <h2 className="text-[26px] tablet:text-[30px] font-semibold text-baqla-lime">More projects</h2>
        <ul className="mt-8 grid gap-6 tablet:grid-cols-2">
          {others.map((p) => <li key={p.id}><BAQLA_ProjectCard project={p} /></li>)}
        </ul>
        <Link href="/portfolio" className="mt-8 inline-block font-semibold text-baqla-lime underline-offset-4 hover:underline">All projects →</Link>
      </section>
    </article>
  );
}
