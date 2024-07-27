import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { dir } from "i18next";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "./Header";
import Footer from "./Footer";
import { languages } from "../i18n/settings";

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

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html
      lang={lang}
      dir={dir(lang)}
      className={inter.className}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={lang} />
          <main className="w-full max-w-pagewidth mx-auto min-h-screen p-2 mt-[--header-height]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
