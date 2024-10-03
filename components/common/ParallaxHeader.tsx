"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface ParallaxHeaderProps {
  imageUrl: string;
  altText: string;
}

const ParallaxHeader: React.FC<ParallaxHeaderProps> = ({
  imageUrl,
  altText,
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;
    if (!parallaxElement) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      parallaxElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full h-[300px] md:h-[600px] relative overflow-hidden`}>
      <div
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translateY(0)" }}
      >
        <Image
          className="object-cover w-full h-[120%]"
          src={imageUrl}
          width={1920}
          height={1296}
          alt={altText}
          priority
        />
      </div>
    </div>
  );
};

export default ParallaxHeader;
