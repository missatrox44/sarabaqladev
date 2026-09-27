import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';

export function BAQLA_ProjectCard({ project, headingLevel = 'h3' }: { project: Project; headingLevel?: 'h2' | 'h3' }) {
  const orgs = project.attributions?.map((a) => a.org).join(' · ');
  const Heading = headingLevel;
  return (
    <Link href={`/portfolio/${project.id}`} className="group block rounded-2xl bg-baqla-card p-3 shadow-sm ring-1 ring-baqla-line/60 transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-baqla-paper">
        <Image src={project.image} alt="" fill sizes="(min-width: 800px) 33vw, 100vw" className="object-cover transition group-hover:scale-[1.02]" />
      </div>
      <div className="px-1 pb-1 pt-4">
        {orgs && <p className="text-[13px] desktop:text-sm text-baqla-muted">{orgs}</p>}
        <Heading className="mt-1 text-[17px] tablet:text-lg font-semibold text-baqla-ink group-hover:text-baqla-olive">{project.title}</Heading>
        <p className="mt-2 text-[13px] desktop:text-sm text-baqla-muted">{project.techStack.slice(0, 3).join(' · ')}</p>
      </div>
    </Link>
  );
}
