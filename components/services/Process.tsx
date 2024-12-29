import React from "react";
import {
  MessageSquare,
  FileText,
  Code2,
  TestTube,
  Rocket,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "ヒアリング",
    description: "要件定義・課題の明確化",
  },
  {
    icon: FileText,
    title: "プラン提案",
    description: "最適なソリューションの提案",
  },
  {
    icon: Code2,
    title: "デザイン/開発",
    description: "UI/UX設計・システム開発",
  },
  {
    icon: TestTube,
    title: "テスト/改善",
    description: "品質検証・パフォーマンス改善",
  },
  {
    icon: Rocket,
    title: "リリース",
    description: "本番環境への展開・移行",
  },
  {
    icon: Headphones,
    title: "運用サポート",
    description: "継続的な改善・技術支援",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">開発の流れ</h2>
          <p className="text-xl text-gray-600">プロジェクトの進め方をご紹介</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-200 transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
