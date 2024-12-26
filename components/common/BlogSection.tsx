import type { Blog } from "@/types/microcmsTypes";
import { BLOG_ENDPOINT } from "@/app/services/microcms/const";
import { client } from "@/app/services/microcms/client";

export async function getBlogs(): Promise<Blog[]> {
  const data = await client.get({
    endpoint: BLOG_ENDPOINT,
    queries: {
      limit: 3,
      orders: "-createdAt",
    },
  });

  return data.contents;
}

export default async function BlogSection() {
  const blogs = await getBlogs();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            技術ブログ
          </h2>
          <p className="mt-2 text-base text-gray-600">
            最新の技術やEC運用のノウハウを掲載しています。
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog: Blog) => (
            <article
              key={blog.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                alt=""
                src={blog.eyecatch.url}
                className="absolute inset-0 -z-10 size-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="absolute inset-0 -z-10 size-full object-cover"></div>
              <div className="absolute top-0 right-0 -z-10 bg-slate-500 rounded-bl-2xl shadow-lg">
                <p className="text-white px-5 py-2">
                  {blog.category ? blog.category.name : ""}
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
                <a href={`/blog/${blog.id}`}>
                  <span className="absolute inset-0" />
                  {blog.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
