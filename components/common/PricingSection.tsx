import { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "@/app/i18n";

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
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            料金プラン
          </h2>
          <p className="mt-2  text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            ビジネスの成長に
            <br />
            合わせた<span className="text-indigo-400">柔軟なプラン</span>
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-center text-sm font-medium text-gray-400 sm:text-base">
          お客様とのコミュニケーション促進からリピーター獲得、売上アップまでを強力にサポートする
          機能を詰め込んだプランをリーズナブルにご提供いたします。貴社のニーズに合わせてお選びください。
        </p>

        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "rounded-xl bg-white/5 ring-1 ring-inset ring-white/10"
                  : "",
                "p-8"
              )}
            >
              <h3 id={tier.id} className="text-sm/6 font-semibold text-white">
                {tier.name}
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold text-white">
                  {tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold text-gray-300">
                  /month
                </span>
              </p>
              <ul role="list" className="mt-10 space-y-4 text-sm/6 text-white">
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature: any) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-indigo-400"
                            />
                            <span>
                              {feature.name}{" "}
                              {typeof feature.tiers[tier.name] === "string" ? (
                                <span className="text-sm/6 text-gray-400">
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
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  style={{
                    marginLeft: `${
                      (tiers.findIndex((tier) => tier.mostPopular) + 1) * 25
                    }%`,
                  }}
                  aria-hidden="true"
                  className="flex w-1/4 px-4"
                >
                  <div className="w-full rounded-t-xl border-x border-t border-white/10 bg-white/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th
                      key={tier.id}
                      scope="col"
                      className="px-6 pt-6 xl:px-8 xl:pt-8"
                    >
                      <div className="text-sm/7 font-semibold text-white">
                        {tier.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-white">
                        <span className="text-4xl font-semibold">
                          {tier.priceMonthly}
                        </span>
                        <span className="text-sm/6 font-semibold">/month</span>
                      </div>
                      <a
                        href={tier.href}
                        className={classNames(
                          tier.mostPopular
                            ? "bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-600"
                            : "bg-white/10 hover:bg-white/20 focus-visible:outline-white",
                          "mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        )}
                      >
                        Buy plan
                      </a>
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={classNames(
                          sectionIdx === 0 ? "pt-8" : "pt-16",
                          "pb-4 text-sm/6 font-semibold text-white"
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10" />
                      </th>
                    </tr>
                    {section.features.map((feature: any) => (
                      <tr key={feature.name}>
                        <th
                          scope="row"
                          className="py-4 text-sm/6 font-normal text-white"
                        >
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-white/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <div className="text-center text-sm/6 text-gray-300">
                                {feature.tiers[tier.name]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    aria-hidden="true"
                                    className="mx-auto size-5 text-indigo-400"
                                  />
                                ) : (
                                  <MinusIcon
                                    aria-hidden="true"
                                    className="mx-auto size-5 text-gray-500"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
