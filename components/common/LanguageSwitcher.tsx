import Link from "next/link";
import { languages } from "../../app/i18n/settings";

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

async function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const { t } = await useTranslation(currentLang, "common");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-menu">
          {t("menu.currentLanguage")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("menu.switchLanguage")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((lang: string) => (
          <Link
            key={lang}
            className="block w-full"
            href={lang === "/" ? "/" : `/${lang}`}
          >
            <DropdownMenuItem>{lang.toUpperCase()}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSwitcher;
