import sanitize, { defaults } from "sanitize-html";
import styles from "@/styles/BAQLA_blogPost.module.scss";

export function BAQLA_BlogPostContent({ content }: { content: string }) {
  const html = sanitize(content, {
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
      iframe: ["src", "allowfullscreen", "style", "title"],
    },
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com"],
  });
  return (
    <div
      className={`${styles.blogText} max-w-[68ch] break-words`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
