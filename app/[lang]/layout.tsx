import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { dir } from "i18next";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "./Header";
import Footer from "./Footer";
import { languages } from "../i18n/settings";
import AnimatedLayout from "./AnimatedLayout";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title:
    "KUROFUNE | WEBサイト開発、システム開発、越境ECサイト構築、業務改善システム開発、API開発",
  description:
    "KUROFUNEは革新的なWEB・システム開発で企業のデジタル化を加速。越境EC構築、業務改善システム、API開発のエキスパート。グローバルビジネスの成功をテクノロジーでサポートします。",
};

type LayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

const RootLayout = ({ children, params }: LayoutProps) => {
  return (
    <html lang={params.lang} dir={dir(params.lang)}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={params.lang} />
          <AnimatedLayout>{children}</AnimatedLayout>
          <Footer lang={params.lang} />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
