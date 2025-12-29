import { config } from "@/config";
import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: config.blog.blogId,
});

export type { GetPostsResult, GetPostResult };
