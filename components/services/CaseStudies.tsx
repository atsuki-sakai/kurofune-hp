import React from "react";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    title: "アパレルブランドのグローバル展開",
    description:
      "多言語・多通貨対応のECサイトを構築し、海外売上が前年比200%増を達成",
    tags: ["グローバル展開", "BtoC"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    title: "工具メーカーの法人向けECサイト",
    description: "見積システムと在庫管理の自動化により、運営工数を50%削減",
    tags: ["BtoB", "システム連携"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
    title: "食品メーカーの定期購入システム",
    description:
      "カスタム開発により柔軟な定期購入システムを実現し、LTVが30%向上",
    tags: ["サブスクリプション", "カスタム開発"],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">導入事例</h2>
          <p className="text-xl text-gray-600">
            多様な業種での成功実績をご紹介
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
            >
              <img
                src={case_.image}
                alt={case_.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {case_.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {case_.title}
                </h3>
                <p className="text-gray-600 mb-4">{case_.description}</p>
                <button className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  詳細を見る
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
