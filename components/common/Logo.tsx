"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image
        src={"/assets/images/logo-black.png"}
        alt="logo"
        width={30}
        height={30}
      />
    ); // または、デフォルトのロゴを表示
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <Image
      src={
        currentTheme === "dark"
          ? "/assets/images/logo-white.png"
          : "/assets/images/logo-black.png"
      }
      alt="logo"
      width={30}
      height={30}
    />
  );
};

export default Logo;
