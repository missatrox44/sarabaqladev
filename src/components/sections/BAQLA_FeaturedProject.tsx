import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';

export function BAQLA_FeaturedProject({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.id}`} className="group block w-full max-w-[440px] bg-baqla-card p-2.5 text-center shadow-lg">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-baqla-paper">
        <Image src={project.image} alt="" fill sizes="440px" className="object-cover transition group-hover:scale-[1.02]" />
      </div>
      <p className="mt-5 font-hand text-[22px] text-baqla-olive">featured work</p>
      <h2 className="mb-5 px-2 text-[22px] font-semibold leading-tight text-baqla-ink group-hover:text-baqla-olive">{project.title}</h2>
    </Link>
  );
}
