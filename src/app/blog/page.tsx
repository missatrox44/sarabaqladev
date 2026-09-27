import { wisp } from '@/lib/wisp';
import { config } from '@/config';
import { BAQLA_PostCard } from '@/components/sections/BAQLA_PostCard';

export const metadata = { title: 'Blog', description: config.blog.description };

export default async function BlogPage() {
  // KEY-DECISION 2026-09-26: no search/filter/pagination; revisit past ~30 posts.
  const { posts } = await wisp.getPosts({ limit: 'all' });
  return (
    <section className="px-6 pt-20 pb-32 tablet:px-12 desktop:pt-16">
      <p className="font-hand text-[26px] text-baqla-olive">notes from the trail</p>
      <h1 className="text-[26px] tablet:text-[30px] desktop:text-[34px] font-semibold text-baqla-ink">Blog</h1>
      <p className="mt-2 max-w-prose text-baqla-muted">{config.blog.description}</p>
      <ul className="mt-10 grid gap-6 tablet:grid-cols-2">
        {posts.map((post) => (
          <li key={post.id}><BAQLA_PostCard post={post} headingLevel="h2" /></li>
        ))}
      </ul>
    </section>
  );
}
