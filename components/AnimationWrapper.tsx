"use client";

import React, { useEffect, useState, useRef } from "react";
import { AnimationType } from "../types/animationTypes";

interface AnimationWrapperProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  duration?: number;
  delay?: number;
}

export function AnimationWrapper({
  children,
  animationType = "fade-in",
  duration = 3000,
  delay = 200,
}: AnimationWrapperProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out";
    switch (animationType) {
      case "fade-in":
        return `${baseClasses} ${isIntersecting ? "opacity-100" : "opacity-0"}`;
      case "slide-up":
        return `${baseClasses} ${
          isIntersecting
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`;
      case "slide-down":
        return `${baseClasses} ${
          isIntersecting
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
        }`;
      case "slide-left":
        return `${baseClasses} ${
          isIntersecting
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10"
        }`;
      case "slide-right":
        return `${baseClasses} ${
          isIntersecting
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`;
      default:
        return `${baseClasses} ${isIntersecting ? "opacity-100" : "opacity-0"}`;
    }
  };

  return (
    <div
      ref={ref}
      className={getAnimationClasses()}
      style={{
        overflow: "hidden",
        transitionDuration: `${duration}ms`, // Add this line
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
