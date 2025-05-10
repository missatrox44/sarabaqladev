// components/BlogsClient.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export interface BlogItem {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;          // ISO string
  slug: string;
  category: string;
}

interface BlogsClientProps {
  posts: BlogItem[];
}

export function BlogsClient({ posts }: BlogsClientProps) {
  // derive all unique categories from your incoming posts
  const allCategories = Array.from(new Set(posts.map(p => p.category))).sort();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const toggleCategory = (cat: string) =>
    setSelectedCategory(selectedCategory === cat ? null : cat);

  return (
    <div className="space-y-8">
      {/* search + clear badge */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-10"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        {selectedCategory && (
          <Badge
            variant="secondary"
            className="cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            Clear filter
          </Badge>
        )}
      </div>

      {/* category strip */}
      <div className="flex overflow-x-auto pb-2 space-x-2 hide-scrollbar">
        {allCategories.map(cat => (
          <Badge
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            className="cursor-pointer whitespace-nowrap"
            onClick={() => toggleCategory(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* grid of cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((blog, i) => (
          <Card key={i} className="overflow-hidden group h-full flex flex-col">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2 flex-grow">
              <div className="flex justify-between items-center mb-2">
                <Badge
                  variant={selectedCategory === blog.category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleCategory(blog.category)}
                >
                  {blog.category}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {format(new Date(blog.date), "MMM dd, yyyy")}
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