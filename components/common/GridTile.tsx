export default function GridTile() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600">
          サービス概要
        </h2>
        <p className="mt-2 max-w-3xl text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          生成AI×デジタルイノベーションで、あなたのビジネスを新たな高みへ。
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/3 font-semibold text-indigo-600">
                  生成AIソリューション
                </h3>
                <p className="mt-2 text-lg font-bold tracking-tight text-gray-950">
                  AIで業務を自動化し、本当に大切な仕事に集中しませんか？
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  <ul className="space-y-2 mt-4">
                    <li>
                      • 問い合わせ対応の自動化
                      AIチャットボットが顧客からの質問を素早く対応。スタッフの負担を減らし、顧客満足度をアップ。
                    </li>
                    <li>
                      • データ活用で精度の高いレコメンド
                      購買履歴や閲覧情報を解析し、ユーザーごとに最適な商品・プランを提案。リピート率と売上を高めます。
                    </li>
                    <li>
                      • 社内ナレッジの有効活用
                      マニュアルやFAQなどをAIに学習させれば、社内問い合わせもスムーズに。新人教育コストが軽減されます。
                    </li>
                  </ul>
                  <div className="mt-4">
                    <p className="text-base font-bold bg-green-100 w-fit px-3 rounded-full text-green-800">
                      導入のメリット
                    </p>
                    <ul className="mt-1 underline space-y-2">
                      <li>
                        •
                        パーソナライズ接客による売上・LTV（顧客生涯価値）の向上
                      </li>
                      <li>• スタッフがコア業務に集中できる環境づくり</li>
                    </ul>
                  </div>
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-releases.png"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  ECサイト構築・カスタマイズ
                </h3>
                <p className="mt-2 text-lg font-bold tracking-tight text-gray-950">
                  魅力的なオンライン店舗で、24時間365日売上を伸ばしましょう。
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  <ul className="space-y-2 mt-4">
                    <li>
                      •
                      Shopifyを軸とした拡張性の高いEC構築在庫管理・注文管理の自動化からブランドイメージに合わせたデザインまで、幅広く対応。
                    </li>
                    <li>
                      • Shopify
                      Flowや独自アプリで業務効率化在庫切れ通知やマーケティングメール配信など、煩雑な作業を自動化。ヒューマンエラーを減らし、接客やマーケティングに集中できます。
                    </li>
                    <li>
                      •
                      海外展開・多言語対応もお任せリーズナブルに世界へ販路を拡大。今まで手が届かなかった市場を開拓するチャンスです。
                    </li>
                  </ul>
                  <div className="mt-4">
                    <p className="text-base font-bold bg-green-100 w-fit px-3 rounded-full text-green-800">
                      導入のメリット
                    </p>
                    <ul className="mt-1 underline space-y-2">
                      <li>• 運用コストの大幅削減＆顧客体験の向上</li>
                      <li>
                        • ブランド力を高めるオリジナルデザインや独自機能を実装
                      </li>
                    </ul>
                  </div>
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-speed.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  システム開発
                </h3>
                <p className="mt-2 text-lg font-bold tracking-tight text-gray-950">
                  高速かつスケーラブルなシステムが、ビジネス成長を強力に後押し。
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  <ul className="space-y-2 mt-4">
                    <li>
                      •貴社のニーズに合わせたシステムをご提案します。具体的な運用コストなども提示でき導入までのコストもご提案できます。
                    </li>
                    <li>
                      •GCP×CloudRun×Firestoreの構成で自動スケーリングでアクセスが集中しても落ちにくく、使った分だけの料金でコストを最適化。コスパの高い独自システムを構築。
                    </li>
                    <li>
                      •Firestoreを利用することで、初期費用を抑えつつ高速で動作するDBを構築します。収集したいデータをリアルタイムで常に最新状態に、更に収集したデータを活用できます。
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  WEBサイト、WEBアプリケーション制作
                </h3>
                <p className="mt-2 text-lg font-bold tracking-tight text-gray-950">
                  コスト削減、ユーザー体験の向上と開発効率の最適化を同時に実現します。
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  <ul>
                    <li>
                      •Next.jsのサーバーサイドレンダリング機能とFastAPIの高性能なバックエンド開発を組み合わせページの表示速度を大幅に向上。ユーザーがストレスなくサイトを利用できる環境を提供します。また機能追加もスムーズに行えるためビジネスの段階に合わせて追加開発が可能です。
                    </li>
                    <li>
                      •Google Cloud
                      Platform（GCP)を活用し、アクセスが集中しても安定したパフォーマンスを維持。自動スケーリングにより、必要な時に必要なリソースを動的に割り当てるため、コストを最小限に抑えつつ高い可用性を確保します。使った分だけの料金体系で、無駄なコストを削減します。
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-network.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  グローバルにビジネスを展開
                </h3>
                <p className="mt-2 text-lg font-bold tracking-tight text-gray-950">
                  今こそ世界へ販路を拡大。今まで手が届かなかった市場を開拓するチャンスです。
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  <ul className="space-y-2 mt-4">
                    <li>
                      •
                      海外展開・多言語対応もお任せリーズナブルに世界へ販路を拡大。今まで手が届かなかった市場を開拓するチャンスです。
                    </li>
                    <li>
                      •
                      海外展開・多言語対応もお任せリーズナブルに世界へ販路を拡大。今まで手が届かなかった市場を開拓するチャンスです。
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
