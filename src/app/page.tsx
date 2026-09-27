import Link from 'next/link';
import { projects } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { wisp } from '@/lib/wisp';
import { BAQLA_FeaturedProject } from '@/components/sections/BAQLA_FeaturedProject';
import { BAQLA_ProjectCard } from '@/components/sections/BAQLA_ProjectCard';
import { BAQLA_PostCard } from '@/components/sections/BAQLA_PostCard';
import { BAQLA_ExperienceList } from '@/components/sections/BAQLA_ExperienceList';
import { BAQLA_Reveal } from '@/components/sections/BAQLA_Reveal';

export const revalidate = 60;

const heading = 'text-[26px] tablet:text-[30px] desktop:text-[34px] font-semibold';
const moreLink = 'mt-8 inline-block font-semibold underline-offset-4 hover:underline';

export default async function Home() {
  const [hero, ...rest] = projects.filter((p) => p.featured);
  const { posts } = await wisp.getPosts({ limit: 3 });
  const work = experienceData.filter((e) => e.type === 'work');

  return (
    <>
      <h1 className="sr-only">Sara Baqla, full stack developer</h1>

      {hero && (
        <section className="px-6 pt-20 tablet:px-12 desktop:pt-16">
          <BAQLA_FeaturedProject project={hero} />
        </section>
      )}

      <section className="px-6 py-16 tablet:px-12">
        <h2 className={`${heading} text-baqla-ink`}>Latest projects</h2>
        <ul className="mt-8 grid gap-6 tablet:grid-cols-2">
          {rest.map((p, i) => (
            <li key={p.id}><BAQLA_Reveal delay={i * 0.08}><BAQLA_ProjectCard project={p} /></BAQLA_Reveal></li>
          ))}
        </ul>
        <Link href="/portfolio" className={`${moreLink} text-baqla-olive`}>See all projects →</Link>
      </section>

      <section className="baqla-band bg-baqla-olive px-6 py-16 tablet:px-12">
        <h2 className={`${heading} text-baqla-lime`}>Where I&apos;ve worked</h2>
        <div className="mt-6"><BAQLA_ExperienceList entries={work} limit={4} tone="band" /></div>
        <Link href="/about" className={`${moreLink} text-baqla-lime`}>Full history on About →</Link>
      </section>

      <section className="px-6 pt-16 pb-32 tablet:px-12">
        <h2 className={`${heading} text-baqla-ink`}>Latest posts</h2>
        <ul className="mt-8 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
          {posts.map((post) => (
            <li key={post.id}><BAQLA_PostCard post={post} /></li>
          ))}
        </ul>
        <Link href="/blog" className={`${moreLink} text-baqla-olive`}>All posts →</Link>
      </section>
    </>
  );
}