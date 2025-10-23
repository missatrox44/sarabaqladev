// // WISP TEMPLATE
// import { BlogPostsPreview } from "@/components/sections/BlogPostPreview";
// import { BlogPostsPagination } from "@/components/sections/BlogPostsPagination";
// import { wisp } from "@/lib/wisp";

// const Page = async ({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) => {
//   const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
//   const result = await wisp.getPosts({ limit: 6, page });
//   return (
//     <>

//       <BlogPostsPreview posts={result.posts} />
//       <BlogPostsPagination pagination={result.pagination} />

//     </>
//   );
// };

// export default Page;






import { BlogsClient, BlogItem } from "@/components/sections/BlogsClient";
import { wisp } from "@/lib/wisp";
import { Separator } from "@/components/ui/separator";
import { BlogPostsPagination } from "@/components/sections/BlogPostsPagination";

type SearchParams = Record<string, string | string[] | undefined>;

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) ?? {};
  const raw = sp.page;
  const page = raw ? parseInt(Array.isArray(raw) ? raw[0] : raw, 10) || 1 : 1;

  // fetch from Wisp
  const result = await wisp.getPosts({ limit: 100 });
  // map Wisp’s post shape into our BlogItem shape
  const posts: BlogItem[] = result.posts.map(post => ({
    title: post.title ?? "Untitled",
    excerpt: post.description ?? "",
    coverImage: post.image || "/fallback-blog.png",
    date: post.publishedAt || post.updatedAt,
    slug: post.slug,
    // you can pick your taxonomy/tag logic here:
    category: post.tags[0]?.name ?? "Uncategorized",
    tags: post.tags?.map((t: { name: string }) => t.name) ?? [],
  }));

  return (

    <div className="container max-w-7xl mx-auto pt-[80px] pb-16 px-4 sm:px-6 lg:px-8">

      <div className="space-y-2 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Blog</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Thoughts, learnings, and insights from my journey in tech.
        </p>
      </div>
      <Separator className="my-8" />
      <BlogsClient posts={posts} />
      <BlogPostsPagination pagination={result.pagination} />
    </div>);
}
