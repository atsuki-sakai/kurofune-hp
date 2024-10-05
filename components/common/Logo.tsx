"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

type Props = {
  lang?: string;
};

const Logo = ({ lang }: Props) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Link href={`/${lang ?? ""}`} className="block">
        <div className="flex items-center gap-2">
          <Image
            src={"/assets/images/logo-black.jpg"}
            alt="logo"
            width={30}
            height={30}
          />
          <h1 className="text-base md:text-xl font-semibold tracking-wider">
            KUROFUNE
          </h1>
        </div>
        <p className="text-[7px] w-fit py-0.5 px-1 rounded-sm">
          Bridging Global Tech Solutions
        </p>
      </Link>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <Link href={`/${lang ?? ""}`} className="block">
      <div className="flex items-center gap-2">
        <Image
          src={
            currentTheme === "dark"
              ? "/assets/images/logo-white.jpg"
              : "/assets/images/logo-black.jpg"
          }
          alt="logo"
          width={30}
          height={30}
        />
        <h1 className="text-base md:text-xl font-semibold tracking-wider">
          KUROFUNE
        </h1>
      </div>
      <p className="text-[7px] w-fit py-0.5 px-1 rounded-sm">
        Bridging Global Tech Solutions
      </p>
    </Link>
  );
};

export default Logo;
