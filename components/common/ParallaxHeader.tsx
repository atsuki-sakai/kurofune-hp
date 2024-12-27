"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxHeaderProps {
  backgroundContent: React.ReactNode;
  height?: "sm" | "md" | "full";
}

const ParallaxHeader: React.FC<ParallaxHeaderProps> = ({
  backgroundContent,
  height = "full",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // スムーズなパララックス効果のためのtransform
  const y = useTransform(scrollY, [0, 1000], [0, 500], {
    ease: (x: number) => x,
  });

  const _height = height === "sm" ? "60vh" : height === "md" ? "80vh" : "100vh";

  return (
    <div className="relative overflow-hidden" style={{ height: _height }}>
      <motion.div
        ref={ref}
        className="absolute left-0 right-0 will-change-transform"
        style={{
          y,
          // パフォーマンス最適化のためのスタイル
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {backgroundContent}
      </motion.div>
    </div>
  );
};

export default ParallaxHeader;
