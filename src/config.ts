// src/config.ts
const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");

  const siteName = "sarabaqla.dev";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE ?? "Sara Baqla – Full Stack Developer";

  const defaultDescription =
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ??
    "Personal portfolio showcasing my projects, experience, and skills as a professional developer";

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const defaultOgImage = "/fallback-blog.png";

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
        images: [defaultOgImage],
      },
    },

    blog: {
      blogId,
      displayName: process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "SEB",
      copyright:
        process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || siteName,
    },

    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",
  };
};

export const config = buildConfig();

// const buildConfig = () => {
//   const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
//   if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");
//   const name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "SEB";
//   const copyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || "sarabaqla.dev";
//   const defaultTitle =
//     process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Sara Baqla - Dev";
//   const defaultDescription = process.env.NEXT_PUBLIC_BLOG_DESCRIPTION || "Blog about web development, good reads, trumpet, and outdoor adventures.";

//   return {
//     baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
//     blog: {
//       name,
//       copyright,
//       metadata: {
//         title: {
//           absolute: defaultTitle,
//           default: defaultTitle,
//           template: `%s - ${defaultTitle}`,
//         },
//         description: defaultDescription,
//       },
//     },
//     ogImageSecret:
//       process.env.OG_IMAGE_SECRET ||
//       "secret_used_for_signing_and_verifying_the_og_image_url",
//     wisp: {
//       blogId,
//     },
//   };
// };

// export const config = buildConfig();
