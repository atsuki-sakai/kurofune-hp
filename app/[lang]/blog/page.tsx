import { client } from "@/app/services/microcms/client";
import { BLOG_ENDPOINT } from "@/app/services/microcms/const";
import Image from "next/image";
import { Blog } from "@/types/microcmsTypes";
import Link from "next/link";
import Heading from "@/components/common/Heading";
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
    <>
      <Heading
        title="Blog"
        content="ブログ"
        image="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      />
      <div className="container mx-auto min-h-screen">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/${currentLang}/blog/${blog.id}`}
              className="block"
            >
              <article
                key={blog.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image
                  alt={
                    lang === "ja" ? blog.title.title_ja : blog.title.title_en
                  }
                  width={blog.eyecatch.width}
                  height={blog.eyecatch.height}
                  src={blog.eyecatch.url}
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="absolute inset-0 -z-10 size-full object-cover"></div>
                <div className="absolute top-0 right-0 -z-10 bg-slate-800 rounded-bl-2xl">
                  <p className="text-white text-sm px-5 py-2">
                    {blog.category
                      ? lang === "ja"
                        ? blog.category.category.category_ja
                        : blog.category.category.category_en
                      : ""}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time dateTime={blog.createdAt} className="mr-8">
                    {blog.createdAt.split("T")[0]}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 size-0.5 flex-none fill-white/50"
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">{blog.author}</div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white">
                  <Link href={`/${lang}/blog/${blog.id}`}>
                    {lang === "ja" ? blog.title.title_ja : blog.title.title_en}
                  </Link>
                </h3>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
