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


async function MobileMenu({ currentLang }: { currentLang: string }) {
  const { t } = await useTranslation(currentLang, "common");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-xs">
          {t("menu.title")}
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>KUROFUNE</SheetTitle>
          <Image
            className="w-full h-auto w"
            src="https://via.placeholder.com/350x150"
            alt="logo"
            width={350}
            height={150}
          />
          <SheetDescription className="text-[10px] text-start">
            {t("menu.service_description")}
          </SheetDescription>
        </SheetHeader>
        <div className="grid">
          <Accordion
            type="single"
            collapsible
            className="w-full whitespace-pre-line"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>{t("menu.all-services")}</AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-3 my-3">
                <Link href={`/${currentLang}`} locale={currentLang}>
                  <Button className="w-full block pt-2 pb-1 h-full text-start tracking-wide shadow-sm">
                    <p className="text-xs font-bold whitespace-pre-line">
                      {t("menu.web-development_title")}
                    </p>
                    <p className="text-[9px] text-gray-500 whitespace-normal leading-4 py-1">
                      {t("menu.web-development_description")}
                    </p>
                  </Button>
                </Link>
                <Link href={`/${currentLang}`} locale={currentLang}>
                  <Button className="w-full block pt-2 pb-1 h-full text-start tracking-wide shadow-sm">
                    <p className="text-xs font-bold whitespace-pre-line">
                      {t("menu.shopify_title")}
                    </p>
                    <p className="text-[9px] text-gray-500 whitespace-normal leading-4 py-1">
                      {t("menu.shopify_description")}
                    </p>
                  </Button>
                </Link>
                <Link href={`/${currentLang}`} locale={currentLang}>
                  <Button className="w-full block pt-2 pb-1 h-full text-start tracking-wide shadow-sm">
                    <p className="text-xs font-bold whitespace-pre-line">
                      {t("menu.business-improvement_title")}
                    </p>
                    <p className="text-[9px] text-gray-500 whitespace-normal leading-4 py-1">
                      {t("menu.business-improvement_description")}
                    </p>
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{t("menu.company")}</AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-3 my-3">
                <Link href={`/${currentLang}/company`} locale={currentLang}>
                  <Button className="w-full block py-2 h-full text-start tracking-wide shadow-sm">
                    <p className="text-sm text-center">{t("menu.about")}</p>
                  </Button>
                </Link>
                <Link
                  href={`/${currentLang}/company`}
                  locale={currentLang}
                  className="w-full block py-2 h-full text-start tracking-wide shadow-sm"
                >
                  <p className="text-sm text-center">{t("menu.news")}</p>
                </Link>
                <Link
                  href={`/${currentLang}/company`}
                  locale={currentLang}
                  className="w-full block py-2 h-full text-start tracking-wide shadow-sm"
                >
                  <p className="text-sm text-center">{t("menu.blog")}</p>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <SheetClose asChild className="mt-4">
            <Button className="w-full">
              <Link
                href={`/${currentLang}/service-pricing`}
                locale={currentLang}
              >
                {t("menu.price-title")}
              </Link>
            </Button>
          </SheetClose>
        </div>

        <SheetFooter className="flex flex-col sm:flex-col gap-3 space-y-0 space-x-0 mt-3">
          <SheetClose asChild>
            <Button className="w-full">
              <Link href={`/${currentLang}/contact`} locale={currentLang}>
                {t("menu.contact")}
              </Link>
            </Button>
          </SheetClose>

          <div className="w-full border border-dashed border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 dark:bg-gray-900">
            <p className="text-center text-xs font-medium tracking-wide">
              {t("menu.business_hours")}
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
