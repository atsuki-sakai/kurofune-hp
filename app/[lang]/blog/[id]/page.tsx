import { client } from "@/app/services/microcms/client";
import { BLOG_ENDPOINT } from "@/app/services/microcms/const";
import Image from "next/image";
import { Blog } from "@/types/microcmsTypes";

async function getBlog(id: string): Promise<Blog> {
  const data = await client.get({
    endpoint: BLOG_ENDPOINT,
    contentId: id,
  });
  return data;
}

export default async function BlogPage({
  params: { id, lang },
}: {
  params: { id: string; lang: string };
}) {
  const blog = await getBlog(id);
  const currentLang = lang || "ja";

  if (!blog) return <div>Blog not found</div>;

  console.log(blog);

  return (
    <div className="container mx-auto min-h-screen mt-[--header-height]">
      <div className="py-12">
        <Image
          src={blog.eyecatch.url}
          alt={currentLang === "ja" ? blog.title.title_ja : blog.title.title_en}
          width={blog.eyecatch.width}
          height={blog.eyecatch.height}
        />
        <h2>
          {currentLang === "ja" ? blog.title.title_ja : blog.title.title_en}
        </h2>
        <span>{blog.author}</span>
        <div
          dangerouslySetInnerHTML={{
            __html:
              currentLang === "ja"
                ? blog.content.content_ja
                : blog.content.content_en,
          }}
        />
      </div>
    </div>
  );
}
