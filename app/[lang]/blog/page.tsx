import { client } from "@/app/services/microcms/client";
import { BLOG_ENDPOINT } from "@/app/services/microcms/const";
import Image from "next/image";
import { Blog } from "@/types/microcmsTypes";

async function getBlogs(): Promise<Blog[]> {
  const data = await client.get({
    endpoint: BLOG_ENDPOINT,
    queries: {
      orders: "-createdAt",
    },
  });
  return data.contents;
}

export default async function BlogPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const blogs = await getBlogs();
  const currentLang = lang || "ja";

  return (
    <div className="container mx-auto min-h-screen mt-[--header-height]">
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href={`/${currentLang}/blog/${blog.id}`}
            className="block"
          >
            <div className="relative">
              <Image
                src={blog.eyecatch.url}
                alt={
                  currentLang === "ja"
                    ? blog.title.title_ja
                    : blog.title.title_en
                }
                width={blog.eyecatch.width}
                height={blog.eyecatch.height}
                className="w-full aspect-video object-cover"
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold">
              {currentLang === "ja" ? blog.title.title_ja : blog.title.title_en}
            </h2>
            <span className="text-gray-500">{blog.author}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
