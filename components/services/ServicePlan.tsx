import React from "react";
import {
  Settings,
  Code,
  Palette,
  Workflow,
  Building2,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "基本設定・アプリ導入",
    description: "Shopifyの初期設定から必要なアプリの選定・導入までサポート",
  },
  {
    icon: Building2,
    title: "BtoB/BtoCサイト構築",
    description: "法人向け・一般消費者向け、両方のECサイトに対応",
  },
  {
    icon: Palette,
    title: "デザインカスタマイズ",
    description: "ブランドに合わせた独自のデザインを実現",
  },
  {
    icon: Code,
    title: "アプリ開発・API連携",
    description: "独自機能の開発や他システムとの連携を実現",
  },
  {
    icon: Workflow,
    title: "業務自動化",
    description: "受注処理や在庫管理など、業務プロセスを自動化",
  },
  {
    icon: Globe,
    title: "グローバル対応",
    description: "多言語・多通貨対応で海外展開をサポート",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ワンストップ構築・運用サポート
          </h2>
          <p className="text-xl text-gray-600">
            Shopifyを活用した包括的なECサイト構築サービスを提供します
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
