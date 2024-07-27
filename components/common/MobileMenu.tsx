import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

import { Label } from "../ui/label";
import { Input } from "../ui/input";

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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>KUROFUNE</SheetTitle>
          <Image
            className="w-full h-auto"
            src="https://via.placeholder.com/350x150"
            alt="logo"
            width={350}
            height={150}
          />
          <SheetDescription className="text-xs tracking-wide">
            想像を超える、驚きのオンライン体験
            高速・高機能・高デザイン。3拍子揃った次世代のウェブソリューション。
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <SheetClose asChild>
            {_buildMobileMenuLink(`/${currentLang}/about`, t("menu.about"))}
          </SheetClose>
          <SheetClose asChild>
            {_buildMobileMenuLink(`/${currentLang}/service`, t("menu.service"))}
          </SheetClose>
          <SheetClose asChild>
            {_buildMobileMenuLink(`/${currentLang}/news`, t("menu.news"))}
          </SheetClose>
          <SheetClose asChild>
            {_buildMobileMenuLink(`/${currentLang}/company`, t("menu.company"))}
          </SheetClose>
        </div>
        <SheetFooter className="flex flex-col gap-3 space-y-0 space-x-0 ">
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
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline">MENU</Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-56">
    //     <DropdownMenuLabel>Information</DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <Link className="block w-full" href={`/${currentLang}/about`}>
    //       <DropdownMenuItem>{t("menu.about")}</DropdownMenuItem>
    //     </Link>
    //     <DropdownMenuSeparator />
    //     <Link className="block w-full" href={`/${currentLang}/service`}>
    //       <DropdownMenuItem>{t("menu.service")}</DropdownMenuItem>
    //     </Link>
    //     <DropdownMenuSeparator />
    //     <Link className="block w-full" href={`/${currentLang}/news`}>
    //       <DropdownMenuItem>{t("menu.news")}</DropdownMenuItem>
    //     </Link>
    //     <DropdownMenuSeparator />
    //     <Link className="block w-full" href={`/${currentLang}/company`}>
    //       <DropdownMenuItem>{t("menu.company")}</DropdownMenuItem>
    //     </Link>
    //     <DropdownMenuSeparator />
    //     <Link className="block w-full" href={`/${currentLang}/contact`}>
    //       <DropdownMenuItem>{t("menu.contact")}</DropdownMenuItem>
    //     </Link>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}

export default MobileMenu;
