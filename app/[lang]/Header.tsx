import React from "react";
import Logo from "@/components/common/Logo";
import DarkModeToggleButton from "@/components/common/DarkModeToggleButton";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import MobileMenu from "@/components/common/MobileMenu";
import NavigationMenu from "@/components/common/NavigationMenu";
import { HeaderBlurEffect } from "@/components/common/HeaderBlurEffect";

type Props = {
  lang: string;
};

const Header: React.FC<Props> = ({ lang }) => {
  return (
    <HeaderBlurEffect>
      <header className="flex items-center p-2 w-full h-[var(--header-height)]">
        <div className="flex w-full h-auto items-center justify-between max-w-pagewidth mx-auto md:px-8 md:py-1.5">
          <Logo />
          <nav className="hidden md:flex px-12">
            <NavigationMenu lang={lang} />
          </nav>
          <div className="flex gap-2">
            <LanguageSwitcher currentLang={lang} />
            <DarkModeToggleButton />
          </div>
        </div>
        <div className="block ml-2 md:hidden">
          <MobileMenu currentLang={lang} />
        </div>
      </header>
    </HeaderBlurEffect>
  );
};

export default Header;
