"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type AnimatedLayoutProps = {
  children: React.ReactNode;
};

const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.main>
  );
};

export default AnimatedLayout;
