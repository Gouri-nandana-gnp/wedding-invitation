"use client";

import { motion } from "framer-motion";
import { COUPLE } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const nameLine = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease },
  }),
};

const nameStyles =
  "font-cormorant text-[3.25rem] font-semibold leading-[0.95] tracking-[0.04em] text-forest sm:text-[3.75rem] md:text-[4.25rem]";

export function CoupleNames() {
  return (
    <div className="mt-12 flex flex-col items-center gap-0">
      <motion.span
        custom={0.4}
        variants={nameLine}
        initial="hidden"
        animate="visible"
        className={nameStyles}
      >
        {COUPLE.groom}
      </motion.span>

      <motion.span
        custom={0.62}
        variants={nameLine}
        initial="hidden"
        animate="visible"
        className="font-cormorant my-1 text-[2.5rem] font-medium leading-none tracking-[0.02em] text-forest/90 sm:text-[3rem]"
        aria-hidden
      >
        &
      </motion.span>

      <motion.span
        custom={0.84}
        variants={nameLine}
        initial="hidden"
        animate="visible"
        className={nameStyles}
      >
        {COUPLE.bride}
      </motion.span>
    </div>
  );
}
