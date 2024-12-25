"use client";

import { usePathname, useRouter } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

type LanguageSwitchLinkProps = {
  lang: string;
  currentLang: string;
};

function LanguageSwitchLink({ lang, currentLang }: LanguageSwitchLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lang: string) => {
    let newPath;
    if (pathname === "/") {
      newPath = pathname.replace("/", "/" + lang);
    } else {
      newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
    }
    window.location.href = newPath;
  };

  return (
    <DropdownMenuItem key={lang} onClick={() => handleLanguageChange(lang)}>
      {lang.toUpperCase()}
    </DropdownMenuItem>
  );
}

export default LanguageSwitchLink;
