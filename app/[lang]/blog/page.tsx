import { client } from "@/app/services/microcms/client";
import { BLOG_ENDPOINT } from "@/app/services/microcms/const";
import type { Blog } from "@/types/microcmsTypes";

const FETCH_BLOG_LIMIT = 12;
export async function getBlogs(): Promise<Blog[]> {
  const data = await client.get({
    endpoint: BLOG_ENDPOINT,
    queries: { limit: FETCH_BLOG_LIMIT },
  });
  return data.contents;
}

export default async function BlogPage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang || "ja";
  const blogs = await getBlogs();
  if (!blogs) return <div>Blog not found</div>;

  return (
    <div className="container mx-auto min-h-screen mt-[--header-height]">
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <p>{lang === "ja" ? blog.title.title_ja : blog.title.title_en}</p>
            <p>
              {lang === "ja"
                ? blog.content.content_ja
                : blog.content.content_en}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
