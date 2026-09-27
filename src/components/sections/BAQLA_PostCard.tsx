import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

export type BAQLA_PostCardPost = {
  slug: string;
  title: string;
  description?: string | null;
  image: string | null;
  publishedAt: Date | null;
  updatedAt: Date;
  tags?: { id: string; name: string }[];
};

export function BAQLA_PostCard({ post, headingLevel = 'h3' }: { post: BAQLA_PostCardPost; headingLevel?: 'h2' | 'h3' }) {
  const date = new Date(post.publishedAt ?? post.updatedAt);
  const Heading = headingLevel;
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col rounded-2xl bg-baqla-card p-3 shadow-sm ring-1 ring-baqla-line/60 transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-baqla-paper">
        <Image src={post.image || '/fallback-blog.png'} alt="" fill sizes="(min-width: 800px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        <time dateTime={date.toISOString()} className="text-[13px] desktop:text-sm text-baqla-muted">{format(date, 'MMM d, yyyy')}</time>
        <Heading className="mt-1 text-[17px] tablet:text-lg font-semibold text-baqla-ink group-hover:text-baqla-olive">{post.title}</Heading>
        <div className="mt-auto pt-2">
          {post.description && <p className="text-[15px] text-baqla-ink">{post.description}</p>}
          {post.tags && post.tags.length > 0 && (
            <p className="mt-2 text-[13px] desktop:text-sm text-baqla-muted">{post.tags.map((t) => `#${t.name}`).join(' ')}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
