//WISP TEMPLATE
"use client";

// import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import type { GetRelatedPostsResult } from "@wisp-cms/client";
import Image from "next/image";
import Link from "next/link";
import type { FunctionComponent } from "react";
import { ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/enhanced-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const RelatedPosts: FunctionComponent<{
  posts: GetRelatedPostsResult["posts"];
}> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-posts-heading" className="mt-12">
      <div className="mb-6 text-xl font-semibold tracking-tight text-gradient " id="related-posts-heading">
        Related Posts
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post) => {
          const date = (post as any).publishedAt || (post as any).updatedAt || null;
          const tags = (post as any).tags?.map((t: { name: string }) => t.name) ?? [];
          const cover = post.image || "/fallback-blog.png";

          return (
            <Card
              key={post.id}
              className="card-forest h-full group flex flex-col transition-transform hover:-translate-y-1"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden rounded-t-xl">
                  <Image
                    src={cover}
                    alt={post.title}
                    fill
                    priority={false}
                    loading="lazy"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </Link>

              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                </div>

                {date && (
                  <CardDescription className="text-muted-foreground">
                    {format(new Date(date), "MMM dd, yyyy")}
                  </CardDescription>
                )}
              </CardHeader>

              <CardContent className="flex flex-col flex-1">
                {!!post.description && (
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {post.description}
                  </p>
                )}

              </CardContent>

              <CardFooter>
                <Button variant="forest-ghost" size="sm" asChild className="flex-1">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};