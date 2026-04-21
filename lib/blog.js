import { directus } from "@/lib/directus";
import { readItems } from "@directus/sdk";

export async function getAllBlogPosts() {
  return await directus.request(
    readItems("blogpost", {
      fields: [
        "*",
        {blog_parts:["*"]},
        "blog_parts.bl_gallery.*",
        {bl_gallery:["*"]}
      ],
      
    })
  );
}
