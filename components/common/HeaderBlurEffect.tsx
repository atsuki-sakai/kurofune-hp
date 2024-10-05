"use client";

import React, { useEffect, useState, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const HeaderBlurEffect: React.FC<Props> = ({ children }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0 };
    const observerCallback: IntersectionObserverCallback = ([entry]) => {
      setIsBlurred(!entry.isIntersecting);
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const blurredClass = isBlurred
    ? "bg-white/30 dark:bg-gray-900/40 backdrop-blur-sm shadow-sm"
    : "bg-transparent";

  return (
    <>
      <div
        ref={observerRef}
        className="h-screen w-full absolute top-0 left-0 -z-10 pointer-events-none"
      />
      <div
        className={`fixed top-0 left-0 w-screen transition-all duration-500 z-50 ${blurredClass}`}
      >
        {children}
      </div>
    </>
  );
};
