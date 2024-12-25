"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

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
  responsiveSize = {
    sp: { width: 500, height: 700 },
    pc: { width: 1920, height: 1080 },
  },
  className,
  maxHeight,
}: {
  spImage: string;
  pcImage: string;
  alt: string;
  responsiveSize?: ResponsiveSize;
  borderPx?: number;
  className?: string;
  maxHeight?: number;
}) => {
  const defaultBorderPx = 750;
  const isDesktop = useMediaQuery({ minWidth: borderPx ?? defaultBorderPx });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const imageSrc = isMounted ? (isDesktop ? pcImage : spImage) : null;
  const imageSize = isMounted
    ? isDesktop
      ? responsiveSize.pc
      : responsiveSize.sp
    : { width: 1, height: 1 };

  if (!isMounted) {
    return null;
  }

  return (
    <Image
      className={`${className} min-h-screen w-full object-cover`}
      src={imageSrc || spImage}
      alt={alt}
      width={imageSize.width}
      height={imageSize.height}
      style={{ maxHeight: maxHeight }}
    />
  );
};

export default ResponsiveImage;
