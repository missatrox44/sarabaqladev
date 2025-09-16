// components/BlogsClient.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
// use the same enhanced button + variants as Featured
import { Button } from "@/components/ui/enhanced-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export interface BlogItem {
  title: string;
  excerpt: string;
  coverImage?: string;
  date: Date | string; // ISO string
  slug: string;
  category?: string;
  // Optional tags if you have them; safe to omit in data
  tags?: string[];
}

interface BlogsClientProps {
  posts: BlogItem[];
}

export function BlogsClient({ posts }: BlogsClientProps) {
  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.tags ?? []))
  ).sort((a, b) => a.localeCompare(b));

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = posts.filter((post) => {
    const q = searchQuery.toLowerCase();

    const inTitle = post.title.toLowerCase().includes(q);
    const inExcerpt = post.excerpt.toLowerCase().includes(q);
    const inTags = (post.tags ?? []).some((t) =>
      t.toLowerCase().includes(q)
    );

    const matchesSearch = !q || inTitle || inExcerpt || inTags;

    const matchesTag = selectedTag
      ? (post.tags ?? []).includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const toggleTag = (tag: string) =>
    setSelectedTag(selectedTag === tag ? null : tag);
  return (
    <div className="space-y-10">
      {/* Search + clear */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {selectedTag && (
          <Badge
            variant="secondary"
            className="cursor-pointer"
            onClick={() => setSelectedTag(null)}
          >
            Clear filter
          </Badge>
        )}
      </div>

      {/* Category strip */}
      <div className="flex overflow-x-auto pb-2 space-x-2 hide-scrollbar">
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            className="cursor-pointer whitespace-nowrap"
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Grid of cards — styled to match LatestBlogs */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((blog) => {
          const img = blog.coverImage || "/fallback-blog.png";
          return (
            <Card
              key={blog.slug}
              className="card-forest h-full group flex flex-col transition-transform hover:-translate-y-1"
            >
              <Link href={`/blog/${blog.slug}`} className="block">
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={img}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </Link>

              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <Link href={`/blog/${blog.slug}`} className="hover:underline">
                      {blog.title}
                    </Link>
                  </CardTitle>

                </div>

                <CardDescription className="text-muted-foreground">
                  {format(new Date(blog.date), "MMM dd, yyyy")}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>
                {!!blog.tags?.length && (
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
                <Button variant="forest-ghost" size="sm" asChild className="flex-1">
                  <Link href={`/blog/${blog.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-bold">No articles found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}