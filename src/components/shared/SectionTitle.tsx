"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  withAmpersand?: boolean;
}

export function SectionTitle({
  children,
  className,
  withAmpersand = false,
}: SectionTitleProps) {
  if (withAmpersand && typeof children === "string") {
    const parts = children.split("&");
    return (
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className={cn(
          "font-playfair text-center text-xl tracking-wide text-gold md:text-2xl",
          className
        )}
      >
        {parts[0]?.trim()}
        <span className="mx-1 font-playfair text-forest">&</span>
        {parts[1]?.trim()}
      </motion.h2>
    );
  }

  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "font-playfair text-center text-xl tracking-wide text-gold md:text-2xl",
        className
      )}
    >
      {children}
    </motion.h2>
  );
}
