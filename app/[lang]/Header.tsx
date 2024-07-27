import React from "react";

import DarkModeToggleButton from "@/components/common/DarkModeToggleButton";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import MobileMenu from "@/components/common/MobileMenu";
import NavigationMenu from "@/components/common/NavigationMenu";

type Props = {
  lang: string;
};

const Header = async ({ lang }: Props) => {
  return (
    <header className="flex items-center p-2 fixed top-0 left-0 w-full h-[--header-height] shadow-sm bg-[--bg-color]">
      <div className="flex w-full h-auto items-center justify-between max-w-pagewidth mx-auto">
        <div>
          <h1 className="text-2xl font-semibold tracking-wider">KUROFUNE</h1>
          <p className="text-[7px]">Bridging Global Tech Solutions</p>
        </div>
        <div className="hidden md:flex gap-2 mr-[10%]">
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
