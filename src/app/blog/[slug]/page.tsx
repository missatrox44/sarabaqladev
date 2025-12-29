// WISP TEMPLATE
import { BlogPostContent } from "@/components/sections/BlogPostContent";
import { RelatedPosts } from "@/components/sections/RelatedPosts";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";
import type { BlogPosting, WithContext } from "schema-dts";

interface Params {
  slug: string;
}


export async function generateMetadata(props: { params: Promise<Params> }) {
  const params = await props.params;

  const { slug } = params;

  const result = await wisp.getPost(slug);
  if (!result || !result.post) {
    return {
      title: "Blog post not found",
    };
  }

  const { title, description, image } = result.post;
  const generatedOgImage = signOgImageUrl({ title, brand: config.blog.name });
  const fallbackOgImage = "/fallback-blog.png";
  const ogImages = image ? [generatedOgImage, image] : [fallbackOgImage];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImages,
    },
  };
}
interface Params {
  slug: string;
}

const Page = async (props: { params: Promise<Params> }) => {
  const params = await props.params;

  const { slug } = params;
  const result = await wisp.getPost(slug);
  const { posts } = await wisp.getRelatedPosts({ slug, limit: 3 });

  if (!result || !result.post) {
    return notFound();
  }

  const { title, publishedAt, updatedAt, image, author } = result.post;

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: image ? image : "/fallback-blog.png",
    datePublished: publishedAt ? publishedAt.toString() : undefined,
    dateModified: updatedAt.toString(),
    author: {
      "@type": "Person",
      name: author.name ?? "Sara Baqla",
      image: author.image ?? undefined,
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
};

      export default Page;
