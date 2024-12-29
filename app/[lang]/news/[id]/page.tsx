import { client } from "@/services/microcms/client";
import { NEWS_ENDPOINT } from "@/services/microcms/const";
import Image from "next/image";
import type { News } from "@/types/microcmsTypes";

async function getNews(id: string): Promise<News> {
  const data = await client.get({
    endpoint: NEWS_ENDPOINT,
    contentId: id,
  });
  return data;
}

export default async function NewsIdPage({
  params,
}: {
  params: { id: string; lang: string };
}) {
  const news = await getNews(params.id);
  const currentLang = params.lang || "ja";

  if (!news) return <div>News not found</div>;

  console.log(news);

  return (
    <div className="container mx-auto min-h-screen mt-[--header-height]">
      <div className="py-12">
        <h2>
          {currentLang === "ja" ? news.title.title_ja : news.title.title_en}
        </h2>
        <span>{news.author}</span>
        <div
          dangerouslySetInnerHTML={{
            __html:
              currentLang === "ja"
                ? news.content.content_ja
                : news.content.content_en,
          }}
        />
      </div>
    </div>
  );
}
