import React from "react";
import Link from "next/link";
import Logo from "@/components/common/Logo";

import DarkModeToggleButton from "@/components/common/DarkModeToggleButton";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import MobileMenu from "@/components/common/MobileMenu";
import NavigationMenu from "@/components/common/NavigationMenu";

type Props = {
  lang: string;
};

const Header = async ({ lang }: Props) => {
  return (
    <header className="flex items-center p-2 fixed top-0 left-0 z-50 w-full h-[--header-height] shadow-sm bg-[--bg-color]">
      <div className="flex w-full h-auto items-center justify-between max-w-pagewidth mx-auto">
        <Link href={`/${lang}`} className="block">
          <div className="flex items-center gap-2">
            <Logo />
            <h1 className="text-xl font-semibold tracking-wider">KUROFUNE</h1>
          </div>
          <p className="text-[7px] bg-slate-100 dark:bg-slate-900 w-fit py-0.5 px-1 rounded-sm">
            Bridging Global Tech Solutions
          </p>
        </Link>
        <div className="hidden md:flex gap-2 mr-[5%]">
          <NavigationMenu lang={lang} />
        </div>
        <div className="flex gap-2">
          <LanguageSwitcher currentLang={lang} />
          <DarkModeToggleButton />
        </div>
      </div>
      <div className="block ml-2 md:hidden">
        <MobileMenu currentLang={lang} />
      </div>
    </header>
  );
};

export default Header;
