import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { format } from 'date-fns';
import { wisp } from '@/lib/wisp';
import { Button } from '../ui/enhanced-button';

export async function LatestBlogs() {
  const result = await wisp.getPosts({ limit: 3 });

  const latestBlogs = result.posts.map((post) => ({
    title: post.title,
    // guard against null from CMS
    excerpt: post.description ?? '',
    coverImage: post.image || '/fallback-blog.png',
    date: post.publishedAt || post.updatedAt,
    slug: post.slug,
    category: post.tags?.[0]?.name ?? 'Uncategorized',
    tags: post.tags?.map((t: { name: string }) => t.name) ?? [],
  }));

  return (
    <section id="blog" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, learnings, and insights from my journey in tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="block group"
            >
              <Card className="card-forest h-full group flex flex-col transition-transform hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {blog.title}
                    </CardTitle>

                    {/* category pill (optional) */}
                    {/* <Badge variant="outline" className="whitespace-nowrap">
                      {blog.category}
                    </Badge> */}
                  </div>

                  <CardDescription className="text-muted-foreground">
                    {format(new Date(blog.date), 'MMM dd, yyyy')}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground line-clamp-3 mb-4">{blog.excerpt}</p>

                  {!!blog.tags.length && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {blog.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{blog.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>

                <CardFooter>

                  <div className="flex gap-3 mt-auto w-full">
                    <Button
                      variant="forest-ghost"
                      size="sm"
                      className="flex-1 text-xs group-hover:bg-primary/10 group-hover:border-primary"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog">
            <Button variant="hero">View All Articles</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}