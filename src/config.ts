import { FALLBACK_IMAGE } from "@/lib/constants";

const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");

  const siteName = "sarabaqla.dev";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE ?? "Sara Baqla – Full Stack Developer";

  const defaultDescription =
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ??
    "Sara Baqla is a full stack developer in Odessa, Texas, and the founder of Artemis Bytes. She builds React, Next.js, TanStack, and Shopify sites.";

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  return {
    baseUrl,

    site: {
      name: siteName,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s | ${siteName}`,
        },
        description: defaultDescription,
        images: [FALLBACK_IMAGE],
      },
    },

    blog: {
      blogId,
      copyright:
        process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || siteName,
        description: "Thoughts, learnings, and insights from my journey in tech."
    },
  };
};

export const config = buildConfig();
