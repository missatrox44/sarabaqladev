import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';

export function BAQLA_FeaturedProject({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.id}`} className="group block rounded-[28px] bg-baqla-card p-4 tablet:p-5 shadow-sm ring-1 ring-baqla-line/60">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-baqla-paper">
        <Image src={project.image} alt="" fill priority sizes="(min-width: 1280px) 60vw, 100vw" className="object-cover transition group-hover:scale-[1.02]" />
      </div>
      <div className="flex flex-col gap-2 px-1 pt-5 tablet:flex-row tablet:items-end tablet:justify-between">
        <div>
          <p className="font-hand text-[22px] text-baqla-olive">featured work</p>
          <h2 className="text-[26px] tablet:text-[30px] desktop:text-[34px] font-semibold leading-tight text-baqla-ink">{project.title}</h2>
          <p className="mt-2 max-w-prose text-baqla-muted">{project.shortDescription}</p>
        </div>
        <span className="shrink-0 font-medium text-baqla-olive group-hover:underline underline-offset-4">View project →</span>
      </div>
    </Link>
  );
}
