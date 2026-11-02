import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { wisp } from '@/lib/wisp';
import { BAQLA_FeaturedProject } from '@/components/sections/BAQLA_FeaturedProject';
import { BAQLA_PostCard } from '@/components/sections/BAQLA_PostCard';
import { BAQLA_ExperienceList } from '@/components/sections/BAQLA_ExperienceList';
import { HEADING_CLASS } from '@/lib/constants';

export const revalidate = 60;

const moreLink = 'mt-8 inline-block font-semibold underline-offset-4 hover:underline';

export default async function Home() {
  const hero = projects.find((p) => p.id === 'imrs');
  const { posts } = await wisp.getPosts({ limit: 4 });
  const work = experienceData.filter((e) => e.type === 'work');

  return (
    <>
      <h1 className="sr-only">Sara Baqla, full stack developer</h1>

      {/* KEY-DECISION 2026-09-26: sticky hero; later sections are `relative`, so they paint over it in DOM order. */}
      <section className="sticky top-0 flex h-dvh flex-col items-center justify-center overflow-hidden px-6">
        <Image src="/home-hero.webp" alt="" fill preload quality={90} sizes="(min-width: 1280px) 66vw, 100vw" className="object-cover" />
        {hero && <div className="relative w-full"><BAQLA_FeaturedProject project={hero} /></div>}
        <p aria-hidden="true" className="absolute bottom-8 rounded-full bg-baqla-paper/85 px-4 py-1 text-sm text-baqla-ink">Scroll for more ↓</p>
      </section>

      <section className="relative bg-baqla-paper px-6 py-16 tablet:px-12">
        <h2 className={`${HEADING_CLASS} text-baqla-ink`}>Latest posts</h2>
        <ul className="mt-8 grid gap-6 tablet:grid-cols-2">
          {posts.map((post) => (
            <li key={post.id}><BAQLA_PostCard post={post} /></li>
          ))}
        </ul>
        <Link href="/blog" className={`${moreLink} text-baqla-olive`}>All posts →</Link>
      </section>

      <section className="baqla-band relative bg-baqla-olive px-6 pt-16 pb-32 tablet:px-12">
        <h2 className={`${HEADING_CLASS} text-baqla-lime`}>Where I&apos;ve worked</h2>
        <div className="mt-6"><BAQLA_ExperienceList entries={work} limit={4} tone="band" /></div>
        <Link href="/about" className={`${moreLink} text-baqla-lime`}>Full history on About →</Link>
      </section>
    </>
  );
}
