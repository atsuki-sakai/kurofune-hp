import { client } from "@/services/microcms/client";
import { NEWS_ENDPOINT } from "@/services/microcms/const";
import type { News } from "@/types/microcmsTypes";
import Heading from "@/components/common/Heading";

const FETCH_NEWS_LIMIT = 12;
async function getNews(): Promise<News[]> {
  const data = await client.get({
    endpoint: NEWS_ENDPOINT,
    queries: { limit: FETCH_NEWS_LIMIT },
  });
  return data.contents;
}

export default async function NewsPage({
  params,
}: {
  params: { lang: string };
}) {
  const news = await getNews();
  if (!news) return <div>News not found</div>;
  return (
    <>
      <Heading
        title="News"
        content="ニュース"
        image="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
      />
      <div className="container w-full max-w-4xl mx-auto min-h-screen mt-[--header-height]">
        <ul>
          {news.map((news) => (
            <li
              key={news.id}
              className="block mb-6 border-b border-gray-200 pb-6"
            >
              <span className="text-pretty text-sm text-gray-500 sm:text-base">
                {news.createdAt.split("T")[0]}
              </span>
              <span className="text-pretty text-sm text-indigo-600 sm:text-sm font-semibold tracking-wide bg-gray-100 px-4 py-1 rounded-full ml-4">
                {params.lang === "ja"
                  ? news.category.category.category_ja
                  : news.category.category.category_en}
              </span>
              <p className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl mt-2">
                {params.lang === "ja"
                  ? news.title.title_ja
                  : news.title.title_en}
              </p>
              <p className="text-pretty text-sm font-medium text-gray-500 sm:text-sm my-2">
                {params.lang === "ja"
                  ? news.content.content_ja
                      .replace(/<[^>]*>?/gm, "")
                      .slice(0, 150)
                      .replace(/&nbsp;/g, " ")
                      .concat("...")
                  : news.content.content_en
                      .replace(/<[^>]*>?/gm, "")
                      .slice(0, 150)
                      .replace(/&nbsp;/g, " ")
                      .concat("...")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
