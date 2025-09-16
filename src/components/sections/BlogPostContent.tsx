"use client";
import { GetPostResult } from "@/lib/wisp";
import Link from "next/link";
import sanitize, { defaults } from "sanitize-html";
import styles from "@/styles/blogPost.module.scss";

export const PostContent = ({ content }: { content: string }) => {
  const sanitizedContent = sanitize(content, {
    allowedTags: [
      "b",
      "i",
      "em",
      "strong",
      "a",
      "img",
      "h1",
      "h2",
      "h3",
      "code",
      "pre",
      "p",
      "li",
      "ul",
      "ol",
      "blockquote",
      // tables
      "td",
      "th",
      "table",
      "tr",
      "tbody",
      "thead",
      "tfoot",
      "small",
      "div",
      "iframe",
    ],
    allowedAttributes: {
      ...defaults.allowedAttributes,
      "*": ["style"],
      iframe: ["src", "allowfullscreen", "style"],
    },
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com"],
  });
  return (
    <div
      className="blog-content mx-auto"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    ></div>
  );
};

export const BlogPostContent = ({ post }: { post: GetPostResult["post"] }) => {
  if (!post) return null;
  const { title, publishedAt, createdAt, content, tags } = post;
  return (
    <div className={styles.blogText}>
      <div className="max-w-4xl mx-auto mb-10 lg:mt-20 break-words">
        <h1 className="font-bold">{title}</h1>
           <div className="text-sm opacity-80 mt-4 mb-2">
            <span className="block mb-2">By Sara Baqla</span>
          {Intl.DateTimeFormat("en-US").format(
            new Date(publishedAt || createdAt)
          )}
        </div>
        <div className="opacity-80 text-sm mb-8">
          {tags.map((tag) => (
            // change span to Link in future
            <span
              key={tag.id}
              // href={`/tag/${tag.name}`}
              className="text-primary mr-2"
            >
              #{tag.name}
            </span>
          ))}
        </div>
     
        <PostContent content={content} />

      </div>
    </div>
  );
};
