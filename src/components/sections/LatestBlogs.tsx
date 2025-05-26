import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
// import { blogData } from '@/lib/data';
import { format } from 'date-fns';
import { wisp } from '@/lib/wisp';


export async function LatestBlogs() {
  // const result = await wisp.getPosts({ limit: "all" });
    const result = await wisp.getPosts({ limit: 3 });

  console.log("Latest Blogs Data:", result);

  const latestBlogs = result.posts.map(post => ({
    title: post.title,
    excerpt: post.description,
    coverImage: post.image || "/fallback-blog.png",
    date: post.publishedAt || post.updatedAt,
    slug: post.slug,
    category: post.tags[0]?.name ?? "Uncategorized",
  }));

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-16">
          <div className="inline-block">
            <Badge variant="outline" className="text-sm font-medium rounded-full px-4 py-1">
              Latest Articles
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            My Blog
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Thoughts, learnings, and insights from my journey in tech and design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestBlogs.map((blog, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">{blog.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {format(new Date(blog.date), 'MMM dd, yyyy')}
                  </span>
                </div>
                <Link href={`/blog/${blog.slug}`} className="hover:underline">
                  <h3 className="text-xl font-bold line-clamp-2">{blog.title}</h3>
                </Link>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild className="mt-2">
                  <Link href={`/blog/${blog.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}