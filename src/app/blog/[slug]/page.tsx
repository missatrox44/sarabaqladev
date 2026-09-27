import { BAQLA_BlogPostContent } from "@/components/sections/BAQLA_BlogPostContent";
import { BAQLA_PostCard } from "@/components/sections/BAQLA_PostCard";
import { FALLBACK_IMAGE, HEADING_CLASS } from "@/lib/constants";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import type { BlogPosting, WithContext } from "schema-dts";

interface Params {
  slug: string;
}

export async function generateMetadata(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const result = await wisp.getPost(slug);
  if (!result || !result.post) {
    return {
      title: "Blog post not found",
    };
  }

  const { title, description, image } = result.post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image || FALLBACK_IMAGE],
    },
  };
}

const Page = async (props: { params: Promise<Params> }) => {
  const { slug } = await props.params;
  const [result, { posts }] = await Promise.all([wisp.getPost(slug), wisp.getRelatedPosts({ slug, limit: 2 })]);

  if (!result || !result.post) {
    return notFound();
  }

  const { title, publishedAt, updatedAt, image, author, content, tags, description } = result.post;
  const date = new Date(publishedAt ?? updatedAt);
  const minutes = Math.max(1, Math.round(content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length / 200));

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: image || FALLBACK_IMAGE,
    datePublished: publishedAt ? publishedAt.toString() : undefined,
    dateModified: updatedAt.toString(),
    author: {
      "@type": "Person",
      name: author.name ?? "Sara Baqla",
      image: author.image ?? undefined,
    },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="sticky top-0 aspect-[16/9] w-full bg-baqla-card">
        <Image src={image || FALLBACK_IMAGE} alt="" fill priority sizes="(min-width: 1280px) 66vw, 100vw" className="object-cover" />
      </div>
      <div className="relative bg-baqla-paper px-6 pt-10 pb-16 tablet:px-12">
        <h1 className={`${HEADING_CLASS} max-w-[24ch] leading-tight text-baqla-ink`}>{title}</h1>
        <p className="mt-3 text-[13px] desktop:text-sm text-baqla-muted">
          <time dateTime={date.toISOString()}>{format(date, 'MMM d, yyyy')}</time> · {minutes} min read
          {tags.length > 0 && <> · {tags.map((t) => `#${t.name}`).join(' ')}</>}
        </p>
        {description && <p className="mt-6 max-w-[68ch] text-lg text-baqla-ink">{description}</p>}
        <div className="mt-8"><BAQLA_BlogPostContent content={content} /></div>
      </div>
      <section className="baqla-band relative bg-baqla-olive px-6 pt-16 pb-32 tablet:px-12">
        {posts.length > 0 && (
          <>
            <h2 className="text-[26px] tablet:text-[30px] font-semibold text-baqla-lime">Related posts</h2>
            <ul className="mt-8 grid gap-6 tablet:grid-cols-2">
              {posts.map((p) => <li key={p.id}><BAQLA_PostCard post={p} /></li>)}
            </ul>
          </>
        )}
        <Link href="/blog" className="mt-8 inline-block font-semibold text-baqla-lime underline-offset-4 hover:underline">All posts →</Link>
      </section>
    </article>
  );
};

export default Page;
