import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Shopifyを活用したEC構築・カスタマイズ",
    description:
      " •	特定のビジネスニーズに応じたカスタムアプリを開発。例えば、予約システムやポイントプログラムの導入など、貴社独自の機能を追加します。\n•	物流システムや在庫管理システムとのAPI連携を実装し、受注から発送までのプロセスを自動化。ヒューマンエラーを減少させ、効率的な運営をサポートします。",
    icon: ShoppingBagIcon,
  },
  {
    name: "生成AI・RAGソリューション",
    description:
      "•	Difyなどを活用し、自社データを活用した生成AIを開発し自社の業務に合わせたエージェントを作成し定例業務を自動化。\n•	既存のCRMやERPシステムと生成AIを連携させることで、独自データを学習した高度な生成AIが利用して対応業務を自動化。",
    icon: CloudArrowUpIcon,
  },
  {
    name: "最新の技術を用いたモダンなWeb開発",
    description:
      "•	顧客管理システムや業務管理ツールなど、ビジネス向けのシステムを高性能に開発し、業務効率化を支援します。\n•	GCP、Firebaseを活用したWeb開発により維持費、管理コストを大幅に削減、小規模事業者でもお金をかけずにサーバーを管理できます。",
    icon: ServerIcon,
  },
];

export default function FeatureSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold text-indigo-600">
                こんなことが得意です
              </h2>
              <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                私たちはお客様のビジネス課題を根本から解決する“デジタルパートナー”です。
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                AI活用による自動化から、EC構築・モダンアプリ開発まで。煩雑な業務を一挙に効率化し、売上と顧客満足度を飛躍的にアップさせます。
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="block text-sm">
                      {feature.description.split("\n").map((line, index) => (
                        <p key={index} className="mt-2">
                          {line}
                        </p>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Product screenshot"
              src="assets/images/work_flow.jpg"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
