"use client";

import { motion } from "framer-motion";
import { COUPLE, INVITE } from "@/lib/constants";
import { FloralDecor } from "@/components/decor/FloralDecor";
import { CoupleNames } from "./CoupleNames";

const ease = [0.22, 1, 0.36, 1] as const;

export function InviteSection() {
  return (
    <section id="invite" className="section-block relative min-h-[100dvh]">
      <FloralDecor variant="invite" />

      <div className="relative z-10 flex min-h-[85dvh] flex-col items-center justify-center px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="font-playfair text-sm text-foreground/80 md:text-base"
        >
          {INVITE.familiesLine}
        </motion.p>

        <CoupleNames />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease }}
          className="font-playfair mt-10 max-w-[300px] text-base leading-relaxed text-foreground/85 md:text-lg"
        >
          {INVITE.message}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25, ease }}
          className="font-playfair mt-10 text-base text-forest md:text-lg"
        >
          {COUPLE.displayDateShort}{" "}
          <span className="mx-2 text-foreground/30">|</span>{" "}
          {COUPLE.displayTime}
        </motion.p>
      </div>
    </section>
  );
}
