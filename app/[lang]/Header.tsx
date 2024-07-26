import React from "react";

import DarkModeToggleButton from "@/components/common/DarkModeToggleButton";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import DesktopMenu from "@/components/common/DesktopMenu";
import NavigationMenu from "@/components/common/NavigationMenu";

type Props = {
  lang: string;
};

const Header = async ({ lang }: Props) => {
  return (
    <header className="fixed top-0 left-0 w-full h-[--header-height] shadow-sm bg-[--bg-color]">
      <div className="w-full h-auto flex items-center justify-between p-2 max-w-pagewidth mx-auto">
        <div>
          <h1 className="text-2xl font-semibold tracking-wider">KUROFUNE</h1>
          <p className="text-[7px]">Bridging Global Tech Solutions</p>
        </div>
        <div className="flex gap-2">
          <NavigationMenu lang={lang} />
          <LanguageSwitcher currentLang={lang} />
          <DarkModeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
