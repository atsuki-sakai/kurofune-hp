import { client } from "@/app/services/microcms/client";
import { NEWS_ENDPOINT } from "@/app/services/microcms/const";
import type { News } from "@/types/microcmsTypes";

const FETCH_NEWS_LIMIT = 12;
export async function getNews(): Promise<News[]> {
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
    <div className="container mx-auto min-h-screen mt-[--header-height]">
      <h1>News</h1>
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <p>
              {params.lang === "ja" ? news.title.title_ja : news.title.title_en}
            </p>
            <p>
              {params.lang === "ja"
                ? news.content.content_ja.slice(0, 100)
                : news.content.content_en.slice(0, 100)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
