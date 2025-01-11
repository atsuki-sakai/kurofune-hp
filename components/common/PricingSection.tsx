import { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "@/app/i18n";
import { cn } from "@/lib/utils";

// プラン名や価格をShopify運用サポート向けに変更
export const tiers = [
  {
    name: "Lite",
    displayName: "ライト",
    id: "tier-lite",
    href: "#",
    priceMonthly: "¥19,980",
    mostPopular: false,
  },
  {
    name: "Pro",
    displayName: "プロ",
    id: "tier-pro",
    href: "#",
    priceMonthly: "¥39,980",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    displayName: "エンタープライズ",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "¥99,980",
    mostPopular: false,
  },
];

export const sections = [
  {
    name: "Shopify運用機能",
    features: [
      {
        name: "商品登録・在庫管理代行（月あたり対応件数）",
        tiers: { Lite: "30件", Pro: "200件", Enterprise: "無制限" },
      },
      {
        name: "テーマアップデート・軽微な修正",
        tiers: { Lite: true, Pro: true, Enterprise: true },
      },
      {
        name: "SEO対策・検索順位改善アドバイス",
        tiers: {
          Lite: "基本チェック",
          Pro: "詳細レポート",
          Enterprise: "継続コンサル",
        },
      },
      {
        name: "多言語対応サポート",
        tiers: { Lite: false, Pro: "一部対応", Enterprise: "全ページ" },
      },
      {
        name: "カスタム機能の追加開発",
        tiers: { Lite: false, Pro: false, Enterprise: true },
      },
    ],
  },
  {
    name: "販促・集客支援",
    features: [
      {
        name: "SNS広告運用アドバイス",
        tiers: { Lite: true, Pro: true, Enterprise: true },
      },
      {
        name: "キャンペーン施策企画",
        tiers: { Lite: false, Pro: true, Enterprise: true },
      },
      {
        name: "リピート顧客向け施策設計",
        tiers: { Lite: false, Pro: false, Enterprise: true },
      },
      {
        name: "ブランド向上のためのデザイン監修",
        tiers: { Lite: false, Pro: false, Enterprise: true },
      },
    ],
  },
  {
    name: "サポート",
    features: [
      {
        name: "メール・チャットによる質問対応",
        tiers: { Lite: true, Pro: true, Enterprise: true },
      },
      {
        name: "月次オンラインミーティング",
        tiers: { Lite: false, Pro: true, Enterprise: true },
      },
      {
        name: "優先電話サポート",
        tiers: { Lite: false, Pro: false, Enterprise: true },
      },
      {
        name: "1対1の専任担当による運用コンサル",
        tiers: { Lite: false, Pro: false, Enterprise: true },
      },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function PricingSection({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base/7 font-semibold text-primary">
            {t("home.pricing.subtitle")}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("home.pricing.title")}
          </h2>
          <p className="mt-6 text-lg/8 text-muted-foreground">
            {t("home.pricing.description")}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm/6 text-muted-foreground">
          {t("home.pricing.disclaimer")}
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                tier.mostPopular
                  ? "bg-muted ring-2 ring-primary"
                  : "ring-1 ring-border",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold text-foreground"
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm/6 text-muted-foreground">
                {t(`home.pricing.tier-${tier.id}.description`)}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  {tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold text-muted-foreground">
                  /month
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={cn(
                  tier.mostPopular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-muted text-foreground hover:bg-muted/80",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                )}
              >
                {t(`home.pricing.tier-${tier.id}.cta`)}
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm/6 text-muted-foreground"
              >
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-3">
                      {section.features.map((feature: any) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-primary"
                            />
                            <span>
                              {feature.name}{" "}
                              {typeof feature.tiers[tier.name] === "string" ? (
                                <span className="text-sm/6 text-muted-foreground">
                                  ({feature.tiers[tier.name]})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
