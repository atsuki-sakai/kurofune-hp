"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "BtoBの会員制サイトは構築できますか？",
    answer:
      "はい、可能です。会員登録、承認フロー、会員限定価格など、BtoB特有の機能を実装できます。また、基幹システムとの連携も可能です。",
  },
  {
    question: "既存のシステムと連携したいのですが…",
    answer:
      "ShopifyのAPIを活用し、基幹システムや在庫管理システムなど、様々なシステムとの連携が可能です。具体的な要件をヒアリングの上、最適な連携方法をご提案いたします。",
  },
  {
    question: "制作費用はどのくらいかかりますか？",
    answer:
      "要件によって費用は異なりますが、基本的なカスタマイズで100万円〜、フルカスタマイズで300万円〜が目安となります。詳細は無料相談にてお見積りをご提案させていただきます。",
  },
  {
    question: "納期はどのくらいですか？",
    answer:
      "標準的なカスタマイズで2-3ヶ月、大規模なカスタマイズで3-6ヶ月程度です。プロジェクトの規模や要件によって変動しますので、詳細は個別にご相談させていただきます。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-xl text-gray-600">
            お客様からいただく質問にお答えします
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="flex-shrink-0 text-gray-500" />
                  ) : (
                    <Plus className="flex-shrink-0 text-gray-500" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
