import React from "react";
import { AnimationWrapper } from "./AnimationWrapper";
import { AnimationType } from "../types/animationTypes";

interface AnimationProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  duration?: number;
  delay?: number;
}

export function Animation({
  children,
  animationType = "fade-in",
  duration,
  delay,
}: AnimationProps) {
  return (
    // <AnimationWrapper
    //   animationType={animationType}
    //   duration={duration}
    //   delay={delay}
    // >
    <>{children}</>
    // </AnimationWrapper>
  );
}
