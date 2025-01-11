# KUROFUNE – Next.js Multi-language Website

このプロジェクトは、Next.js (App Router) をベースに、多言語対応（i18n）とMicroCMS連携、Tailwind CSSおよびshadcn/ui (Radix UI) を活用して作られた企業サイト・ブログサイトです。
以下では、プロジェクトの機能概要・セットアップ方法・開発フローなどを整理し、運用・開発の際に必要となる情報をまとめています。

## 主な機能概要

### 多言語対応 (i18n)
- i18next と react-i18next、i18next-browser-languagedetector を使用して日本語・英語の切り替えに対応しています。
- URL パスに言語コード（/ja/ または /en/）を含めることで言語を切り替える仕組みになっています（middleware.ts による自動リダイレクト）。

### MicroCMS連携
- services/microcms/client.ts で MicroCMS と通信し、/blog と /news のコンテンツを取得・表示します。
- SSR (サーバーコンポーネント) でデータを取得しているため、ページの初期表示時にデータを取得し、SEOにも配慮しています。

### Tailwind CSS / Shadcn UI
- tailwind.config.ts と globals.css を中心に、Tailwind CSS のカスタマイズを行っています。
- components/ui/ 以下では、shadcn/ui（Radix UI）をベースにした Button, Input, DropdownMenu などを使用し、UI コンポーネントをカスタマイズしています。
- ダークモード（next-themes）にも対応しており、ページ右上のトグルボタンで明暗を切り替えられます。

### Next.js App Router 構成
- app/[lang]/(各ページ)/page.tsx にページコンポーネントがあり、言語コードごとに切り替わるように設定。
- レイアウトは app/[lang]/layout.tsx で共通化されており、ヘッダーやフッターを一括管理しています。
- middleware.ts でトップ（/）アクセス時に /ja へリダイレクトするなどの言語管理が行われています。

## 主要ページ
- /[lang]/（トップページ）
- /[lang]/news（ニュース一覧・詳細）
- /[lang]/blog（ブログ一覧・詳細）
- /[lang]/contact（お問い合わせフォーム、EmailJS でメール送信）
- /[lang]/faq（FAQ ページ）
- /[lang]/price（料金ページ）
- /[lang]/services/*（Shopify、Automation、Web などのサービス紹介ページ）

## ディレクトリ構成

```
atsuki-sakai-kurofune-hp/
├── app/
│   ├── [lang]/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── news/
│   │   ├── price/
│   │   ├── services/
│   │   │   ├── automation/
│   │   │   ├── shopify/
│   │   │   └── web/
│   │   ├── AnimatedLayout.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── i18n/
│   │   ├── locales/
│   │   │   ├── en/
│   │   │   └── ja/
│   │   ├── client.ts
│   │   ├── index.ts
│   │   └── settings.ts
│   ├── globals.css
│   └── ...
├── components/
│   ├── common/
│   ├── contact/
│   ├── services/
│   ├── ui/
│   └── ...
├── services/
│   └── microcms/
│       ├── client.ts
│       └── const.ts
├── types/
├── public/
│   └── assets/
├── middleware.ts
├── next.config.js
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── ...
```

- app/ 配下にページコンポーネント、components/配下にUIやセクションコンポーネントがまとめられています。
- lib/ や services/ にAPIロジック・ユーティリティを配置しています。
- middleware.ts では言語判定とリダイレクトを担当しています。

## セットアップ手順

### 1. リポジトリのクローン
```bash
git clone <REPO_URL>
cd atsuki-sakai-kurofune-hp
```

### 2. 環境変数の設定
.env.localなどに、MicroCMSやEmailJSに関するAPIキー等を設定してください。

```bash
NEXT_PUBLIC_MICROCMS_SERVICE_ID=your_service_id
NEXT_PUBLIC_MICROCMS_API_KEY=your_api_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxx
```

### 3. 依存パッケージのインストール
```bash
npm install
# or yarn
# or pnpm
```

### 4. 開発サーバーの起動
```bash
npm run dev
```
http://localhost:3000 にアクセスすると、サイトを確認できます。

### 5. ビルド & 本番起動
```bash
# 本番ビルド
npm run build

# ローカルでの本番モード起動
npm start
```

## ページの多言語対応
- /ja と /en で日本語/英語に切り替わります。
- トップページ（/）へのアクセスは middleware.ts によって /ja へリダイレクト。
- テキストは app/i18n/locales/ja/common.json と app/i18n/locales/en/common.json で管理。
- 新しいテキストリソースを追加する場合は .json ファイルへキーを追加後、コンポーネント側で t("yourKey") を呼び出す流れです。

## MicroCMS の利用方法
- services/microcms/client.ts で createClient() を通じてAPIを呼び出しています。
- app/[lang]/blog/page.tsx や components/common/BlogSection.tsx などで実際に client.get() を用いてデータ取得し、サーバーコンポーネントで記事をレンダリングしています。
- APIキーの漏洩に注意し、リポジトリをパブリックにする際はGitHub Secretなどを活用してください。

## 主なライブラリ
- Next.js 14+
- TypeScript 5+
- Tailwind CSS 3+
- i18next / react-i18next
- MicroCMS JavaScript SDK
- Framer Motion（アニメーション）
- EmailJS（問い合わせ送信）
- Radix UI / shadcn/ui（UIパーツ）

## コードスタイル & Lint
- eslint-config-next を使用し、Next.jsのルールを適用しています。
- npm run lint でコードスタイル・Lintチェックを実行できます。
- prettier を併用する場合は .prettierrc を設定してください。

## ディプロイ方法

### Vercelを利用する場合
1. Vercel にログインしてNew Projectを作成
2. GitHub リポジトリを連携し、自動デプロイを設定
3. 環境変数（MICROCMS_API_KEY など）をVercel上で設定

連携完了後、Push（またはPull Request Merge）するたびに自動デプロイが行われます。

## 今後の改善ポイント
- ISR (Incremental Static Regeneration) や revalidate を使った動的再生成の導入
- SEO強化（generateMetadata で動的TitleやMetaを出し分け）
- ダークモードのビジュアル最適化
- コンポーネント分割やリファクタ（Atomic Design への移行など）

## ライセンス
社内プロジェクトまたは個人商用プロジェクトの場合は、必要に応じてライセンス情報を追記してください。オープンソースとして公開する場合は、MITライセンスなどを設定しましょう。
