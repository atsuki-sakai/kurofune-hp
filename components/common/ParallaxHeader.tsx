"use client";

import React, { useEffect, useRef } from "react";

interface ParallaxHeaderProps {
  backgroundContent: React.ReactNode;
  height?: "sm" | "md" | "full";
}

const ParallaxHeader: React.FC<ParallaxHeaderProps> = ({
  backgroundContent,
  height = "full",
}) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backgroundElement = backgroundRef.current;

    if (!backgroundElement) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundTranslate = scrollPosition * 0.5;

      backgroundElement.style.transform = `translateY(${backgroundTranslate}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  var _height = height === "sm" ? "60vh" : height == "md" ? "80vh" : "100vh";

  return (
    <div className="relative overflow-hidden" style={{ height: `${_height}` }}>
      <div
        ref={backgroundRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translateY(0)" }}
      >
        {backgroundContent}
      </div>
    </div>
  );
};

export default ParallaxHeader;
