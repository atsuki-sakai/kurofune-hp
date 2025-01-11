import { client } from "@/services/microcms/client";
import type { News } from "@/types/microcmsTypes";
import { NEWS_ENDPOINT } from "@/services/microcms/const";
import { useTranslation } from "@/app/i18n";
import Link from "next/link";

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

export default async function NewsSection({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");
  const news = await getNews();

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {t("home.news.title")}
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-border pt-10 sm:mt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((post: News) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time
                  dateTime={post.publishedAt}
                  className="text-muted-foreground"
                >
                  {post.publishedAt}
                </time>
                <a
                  href={`/blog/${post.id}`}
                  className="relative z-10 rounded-full bg-muted px-3 py-1.5 font-medium text-muted-foreground hover:bg-accent"
                >
                  {post.category
                    ? lang === "ja"
                      ? post.category.category.category_ja
                      : post.category.category.category_en
                    : ""}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-foreground group-hover:text-muted-foreground">
                  <Link
                    href={`/${lang}/news/${post.id}`}
                    className="relative z-10"
                  >
                    <span className="absolute inset-0" />
                    {lang === "ja" ? post.title.title_ja : post.title.title_en}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-muted-foreground">
                  {lang === "ja"
                    ? post.content.content_ja
                        .replace(/<[^>]*>/g, "")
                        .slice(0, 120)
                    : post.content.content_en
                        .replace(/<[^>]*>/g, "")
                        .slice(0, 120)}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm/6">
                  <p className="font-semibold text-foreground">
                    <Link
                      href={`/${lang}/news/${post.id}`}
                      className="relative z-10"
                    >
                      <span className="absolute inset-0" />
                      {post.author}
                    </Link>
                  </p>
                  <p className="text-muted-foreground">{post.author_role[0]}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
