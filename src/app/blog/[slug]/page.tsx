// src/app/blog/[slug]/page.tsx

import { BlogPostContent } from "@/components/sections/BlogPostContent";
import { RelatedPosts } from "@/components/sections/RelatedPosts";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";
import type { BlogPosting, WithContext } from "schema-dts";
import type { ResolvingMetadata } from "next";

type RouteParams = { slug: string };

// ---- Metadata ----
export async function generateMetadata(
  { params }: { params: RouteParams },
  _parent: ResolvingMetadata
) {
  const { slug } = params;

  const result = await wisp.getPost(slug);
  if (!result || !result.post) {
    return { title: "Blog post not found" };
  }

  const { title, description, image } = result.post;
  const generatedOgImage = signOgImageUrl({ title, brand: config.blog.name });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [generatedOgImage, image] : [generatedOgImage],
    },
  };
}

// ---- Page ----
export default async function Page({ params }: { params: RouteParams }) {
  const { slug } = params;

  const result = await wisp.getPost(slug);
  if (!result || !result.post) {
    notFound();
  }

  const { posts } = await wisp.getRelatedPosts({ slug, limit: 3 });
  const { title, publishedAt, updatedAt, image, author } = result.post;

  // Ensure these are strings; guard if your SDK returns Date | string | undefined
  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: image || undefined,
    datePublished: publishedAt ? String(publishedAt) : undefined,
    dateModified: updatedAt ? String(updatedAt) : undefined,
    author: {
      "@type": "Person",
      name: author?.name || undefined,
      image: author?.image || undefined,
    },
  };

  return (
    <div className="container max-w-7xl mx-auto pt-[80px] pb-16 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent post={result.post} />
      <RelatedPosts posts={posts} />
    </div>
  );
}