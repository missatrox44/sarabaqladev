// WISP TEMPLATE
import { BlogPostsPreview } from "@/components/sections/BlogPostPreview";
import { BlogPostsPagination } from "@/components/sections/BlogPostsPagination";
import { wisp } from "@/lib/wisp";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  return (
    <>

      <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination pagination={result.pagination} />

    </>
  );
};

export default Page;