import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

import { useTranslation } from "@/app/i18n";

async function DesktopMenu({ currentLang }: { currentLang: string }) {
  const { t } = await useTranslation(currentLang, "common");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">MENU</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Information</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link className="block w-full" href={`/${currentLang}/about`}>
          <DropdownMenuItem>{t("menu.about")}</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link className="block w-full" href={`/${currentLang}/service`}>
          <DropdownMenuItem>{t("menu.service")}</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link className="block w-full" href={`/${currentLang}/news`}>
          <DropdownMenuItem>{t("menu.news")}</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link className="block w-full" href={`/${currentLang}/company`}>
          <DropdownMenuItem>{t("menu.company")}</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link className="block w-full" href={`/${currentLang}/contact`}>
          <DropdownMenuItem>{t("menu.contact")}</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DesktopMenu;
