import { useTranslation } from "@/app/i18n";

export const faqs = [
  {
    id: 1,
    question:
      "Shopifyの運用代行を依頼すると、具体的にどのような作業を代行してもらえますか？",
    answer:
      "当社では商品登録、在庫管理、テーマアップデートなどの基本的な運用作業に加え、集客施策の実行サポートまで幅広く対応しています。ご要望に応じてカスタマイズや機能追加開発も承ります。",
  },
  {
    id: 2,
    question: "既存のECサイトからShopifyへの移行は大変ですか？",
    answer:
      "現在お使いのプラットフォームやデータ量にもよりますが、当社では移行に伴うデータ移行・デザイン再現・機能カスタマイズなど一括で支援可能です。移行中もできる限りスムーズに売上を落とさないよう運用を継続しながら進めます。",
  },
  {
    id: 3,
    question: "Shopifyで多言語・多通貨対応は簡単にできますか？",
    answer:
      "Shopify自体に多言語・多通貨機能が整備されており、専用アプリやテーマの設定で柔軟に対応できます。運用サポートプランにご加入いただくと、設定や翻訳サポートだけでなく、ユーザー体験向上のための最適化も行います。",
  },
  {
    id: 4,
    question:
      "システム開発や機能追加はどのような流れで依頼すればよいでしょうか？",
    answer:
      "まずご要望をヒアリングし、要件定義や設計段階を経て開発に着手します。途中でご要望の変更があった場合も柔軟に対応し、テストや導入まで一貫してサポートいたします。",
  },
  {
    id: 5,
    question:
      "運用コストを抑えたいのですが、開発後の保守プランはどうなっていますか？",
    answer:
      "当社では月額プランの運用サポートをご用意しています。更新作業やバグ修正、追加開発・機能拡張のご相談もコストを抑えながらスピーディに対応可能です。",
  },
  {
    id: 6,
    question:
      "緊急でバグが発生した場合、どの程度の時間で対応してもらえますか？",
    answer:
      "緊急度やプラン内容にもよりますが、24時間対応プランをご利用いただいている場合は即時対応を行っています。他プランの方でもできるだけ速やかにトラブルシューティングを行い、原因究明と修正を進めます。",
  },
  {
    id: 7,
    question: "ShopifyのSEO対策や広告運用もサポートしてもらえますか？",
    answer:
      "はい。基本的なSEO対策からSNS広告、リスティング広告の運用支援など幅広いマーケティング施策をサポートします。定期的なレポート提出や改善提案も行い、継続的に売上向上を目指します。",
  },
  {
    id: 8,
    question:
      "大規模なシステム構築や既存の社内システムとの連携も可能でしょうか？",
    answer:
      "クラウドインフラを活用した大規模対応や、Shopify APIを使った在庫管理システム・顧客管理システムとの連携なども行っています。要件に応じて最適なアーキテクチャをご提案いたします。",
  },
];

export default async function Faqs({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {t("home.faqs.title")}
        </h2>

        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-sm/6 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
