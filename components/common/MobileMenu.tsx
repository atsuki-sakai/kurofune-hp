import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useTranslation } from "@/app/i18n";

function _buildMobileMenuLink(href: string, text: string) {
  return (
    <Link
      href={href}
      className="block w-full py-2 text-left text-sm font-medium transition-colors duration-300 ease-out border-b tracking-wide"
    >
      {text}
    </Link>
  );
}

async function MobileMenu({ currentLang }: { currentLang: string }) {
  const { t } = await useTranslation(currentLang, "common");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">MENU</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>KUROFUNE</SheetTitle>
          <Image
            className="w-full h-auto"
            src="https://via.placeholder.com/350x150"
            alt="logo"
            width={350}
            height={150}
          />
          <SheetDescription className="text-[10px] text-start">
            想像を超える、驚きのオンライン体験
            高速・高機能・高品質。3拍子揃った次世代のウェブソリューションに乗り換えませんか？
          </SheetDescription>
        </SheetHeader>
        <div className="grid">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t("menu.all-services")}</AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-3 my-3">
                <Link href={`/${currentLang}`}>
                  <Button className="w-full block pt-2 pb-1 h-full text-start tracking-wide shadow-sm">
                    <p className="text-xs font-bold">
                      WEBサイト・WEBアプリ開発
                    </p>
                    <p className="text-[9px] text-gray-500 whitespace-normal leading-4 py-1">
                      最新のNext.jsで構築するので非常に高速に動作し他社のサイトと差別化が図れます。
                    </p>
                  </Button>
                </Link>
                <Link href={`/${currentLang}`}>
                  <Button className="w-full block pt-2 pb-1 h-full text-start tracking-wide shadow-sm">
                    <p className="text-xs font-bold">
                      Shopify構築・独自機能開発
                    </p>
                    <p className="text-[9px] text-gray-500 whitespace-normal leading-4 py-1">
                      Shopifyの可能性を最大限に引き出しビジネスニーズに合わせた独自機能の開発で、競争力のあるオンラインストアを実現します。
                    </p>
                  </Button>
                </Link>
                <Link href={`/${currentLang}`}>
                  <Button className="w-full block pt-2 pb-1 h-full text-start tracking-wide shadow-sm">
                    <p className="text-xs font-bold">業務改善システム開発</p>
                    <p className="text-[9px] text-gray-500 whitespace-normal leading-4 py-1">
                      日々の業務を自動化するプログラムの開発を行います。まずは改善したい業務をお聞かせ下さい。
                    </p>
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>企業情報</AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-3 my-3">
                <Link href={`/${currentLang}/company`}>
                  <Button className="w-full block py-2 h-full text-start tracking-wide shadow-sm">
                    <p className="text-sm text-center">会社概要</p>
                  </Button>
                </Link>
                <Link href={`/${currentLang}/company`}>
                  <Button className="w-full block py-2 h-full text-start tracking-wide shadow-sm">
                    <p className="text-sm text-center">お知らせ</p>
                  </Button>
                </Link>
                <Link href={`/${currentLang}/company`}>
                  <Button className="w-full block py-2 h-full text-start tracking-wide shadow-sm">
                    <p className="text-sm text-center">ブログ</p>
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <SheetClose asChild className="mt-4">
            <Button className="w-full">
              <Link href={`/${currentLang}/service-pricing`}>
                {t("menu.price-title")}
              </Link>
            </Button>
          </SheetClose>
        </div>

        <SheetFooter className="flex flex-col sm:flex-col gap-3 space-y-0 space-x-0 mt-3">
          <SheetClose asChild>
            <Button className="w-full">
              <Link href={`/${currentLang}/contact`}>{t("menu.contact")}</Link>
            </Button>
          </SheetClose>

          <div className="w-full border border-dashed border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 dark:bg-gray-900">
            <p className="text-center text-xs font-medium tracking-wide">
              営業時間 - 10:00～17:00
            </p>
            <a
              className="block w-full text-center text-xl tracking-wide font-bold"
              href="tel:070-9030-8805"
            >
              070-9030-8805
            </a>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
