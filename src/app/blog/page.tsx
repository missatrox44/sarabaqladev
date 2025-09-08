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

export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  // read ?page= from the URL (optional)
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // fetch from Wisp
  const result = await wisp.getPosts({ limit: 100, });
  // map Wisp’s post shape into our BlogItem shape
  const posts: BlogItem[] = result.posts.map(post => ({
    title: post.title ?? "Untitled",
    excerpt: post.description ?? "",
    coverImage: post.image || "/fallback-blog.png",
    date: post.publishedAt || post.updatedAt,
    slug: post.slug,
    // you can pick your taxonomy/tag logic here:
    category: post.tags[0]?.name ?? "Uncategorized",
  }));

  return (

    <div className="container max-w-7xl mx-auto pt-[80px] pb-16 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Thoughts, learnings, and insights from my journey in tech and design
        </p>
      </div>
      <Separator className="my-8" />
      <BlogsClient posts={posts} />
      <BlogPostsPagination pagination={result.pagination} />
    </div>);
}


// import { BlogsClient } from '@/components/sections/BlogsClient';
// import { Separator } from '@/components/ui/separator';

// export const metadata = {
//   title: 'Blog | My Portfolio',
//   description: 'Read my latest articles on web development, design, and technology'
// };

// export default function BlogPage() {
//     const result = await wisp.getPosts({ limit: 100, page });
//   // map Wisp’s post shape into our BlogItem shape
//   const posts: BlogItem[] = result.posts.map(post => ({
//     title: post.title,
//     excerpt: post.description,
//     coverImage: post.image || "/images/placeholder.webp",
//     date: post.publishedAt || post.updatedAt,
//     slug: post.slug,
//     // you can pick your taxonomy/tag logic here:
//     category: post.tags[0]?.name ?? "Uncategorized",
//   }));

//   return (
//     <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//       <div className="space-y-2 text-center mb-12">
//         <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           Thoughts, learnings, and insights from my journey in tech and design
//         </p>
//       </div>
//       <Separator className="my-8" />
//       <BlogsClient posts={posts} />
//     </div>
//   );
// }