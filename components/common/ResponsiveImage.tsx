"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type ResponsiveSize = {
  sp: {
    width: number;
    height: number;
  };
  pc: {
    width: number;
    height: number;
  };
};

const ResponsiveImage = ({
  spImage,
  pcImage,
  alt,
  borderPx,
  responsiveSize,
  className,
  maxHeight,
}: {
  spImage: string;
  pcImage: string;
  alt: string;
  borderPx?: number;
  responsiveSize?: ResponsiveSize;
  className?: string;
  maxHeight?: number;
}) => {
  const defaultBorderPx = 750;
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   const checkIsDesktop = () => {
  //     const isDesktop = window.innerWidth > (borderPx ?? defaultBorderPx);
  //     setIsDesktop(isDesktop);
  //   };

  //   checkIsDesktop();

  //   window.addEventListener("resize", checkIsDesktop);

  //   return () => {
  //     window.removeEventListener("resize", checkIsDesktop);
  //     setMounted(true);
  //   };
  // }, []);

  // if (!mounted) return null;

  return (
    <div className={`relative w-full h-auto ${className}`}>
      <Image
        className={`object-cover w-full h-auto ${
          maxHeight ? `max-h-[${maxHeight}px]` : ""
        }`}
        src={isDesktop ? pcImage : spImage}
        alt={alt}
        width={
          isDesktop
            ? responsiveSize?.pc.width ?? 1920
            : responsiveSize?.sp.width ?? 300
        }
        height={
          isDesktop
            ? responsiveSize?.pc.height ?? 1080
            : responsiveSize?.sp.height ?? 500
        }
      />
    </div>
  );
};

export default ResponsiveImage;
