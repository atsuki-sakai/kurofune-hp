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
      <header className="fixed inset-x-0 top-0 z-50 h-[--header-height]  px-2 pt-2">
        <div className="flex w-full h-auto items-center justify-between max-w-pagewidth mx-auto md:px-8 md:py-1.5">
          <Logo lang={lang} />
          <nav className="hidden md:flex px-12">
            <NavigationMenu lang={lang} />
          </nav>
          <div className="flex gap-2">
            <LanguageSwitcher currentLang={lang} />
            <DarkModeToggleButton />
          </div>
          <div className="block md:hidden">
            <MobileMenu currentLang={lang} />
          </div>
        </div>
      </header>
    </HeaderBlurEffect>
  );
};

export default Header;
