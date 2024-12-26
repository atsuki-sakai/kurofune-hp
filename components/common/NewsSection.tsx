import { client } from "@/app/services/microcms/client";
import type { News } from "@/types/microcmsTypes";
import { NEWS_ENDPOINT } from "@/app/services/microcms/const";

export async function getNews(): Promise<News[]> {
  const data = await client.get({
    endpoint: NEWS_ENDPOINT,
    queries: {
      limit: 3,
      orders: "-createdAt",
    },
  });
  return data.contents;
}

export default async function NewsSection() {
  const news = await getNews();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            お知らせ
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((post: News) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.publishedAt} className="text-gray-500">
                  {post.publishedAt}
                </time>
                <a
                  href={`/blog/${post.id}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category ? post.category.name : ""}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={`/news/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.content.replace(/<[^>]*>/g, "").slice(0, 120)}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={`/news/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.author}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author_role[0]}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
