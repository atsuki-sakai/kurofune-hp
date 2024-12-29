import React from "react";
import { Trophy, Lightbulb, Zap, Building } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "豊富な開発実績",
    description:
      "100社以上のShopify構築実績があり、様々な業種・規模のECサイトを手がけてきました。",
  },
  {
    icon: Lightbulb,
    title: "独自機能の提案力",
    description:
      "お客様のビジネスに最適な機能を提案し、カスタマイズ開発で実現します。",
  },
  {
    icon: Zap,
    title: "API連携・自動化",
    description:
      "基幹システムとの連携や業務自動化により、運営の効率化を実現します。",
  },
  {
    icon: Building,
    title: "BtoB対応力",
    description:
      "法人向けECサイトの構築経験が豊富で、複雑な要件にも対応可能です。",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            選ばれる4つの理由
          </h2>
          <p className="text-xl text-gray-600">私たちが提供する価値と強み</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
