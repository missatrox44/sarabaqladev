export const revalidate = 3600;

import { NextResponse } from "next/server";
import RSS from "rss";
import urlJoin from "url-join";
import { wisp } from "@/lib/wisp";
import { config } from "@/config";

const baseUrl = config.baseUrl;

export async function GET() {
  const result = await wisp.getPosts({ limit: 20 });

  const feed = new RSS({
    title: config.site.name,
    description: config.blog.description,
    site_url: baseUrl,
    feed_url: urlJoin(baseUrl, "/rss"),
    pubDate: new Date(),
  });
  for (const post of result.posts) {
    feed.item({
      title: post.title,
      description: post.description || "",
      url: urlJoin(baseUrl, `/blog/${post.slug}`),
      date: post.publishedAt || new Date(),
    });
  }

  const xml: string = feed.xml({ indent: true });

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
    },
  });
}
