"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COUPLE } from "@/lib/constants";

interface IntroPageProps {
  onOpen: () => void;
}

export function IntroPage({ onOpen }: IntroPageProps) {
  return (
    <motion.div
      key="intro"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="invite-shell flex min-h-[100dvh] flex-col items-center justify-center bg-cream px-8 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full max-w-[300px] flex-col items-center"
      >
        <div className="relative w-full">
          <div className="arch-mask relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden border border-[#e8e0d8] bg-[#f5f0eb] shadow-arch">
            <Image
              src="/images/couple-intro.png"
              alt={`${COUPLE.groom} and ${COUPLE.bride}`}
              fill
              priority
              unoptimized
              className="object-cover object-[center_25%]"
              sizes="280px"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 w-full text-center"
        >
          <div className="mx-auto mb-5 h-px w-8 bg-[#d9d2cb]" />
          <h1 className="font-poppins text-[15px] font-medium tracking-[0.12em] text-foreground uppercase">
            {COUPLE.groom} & {COUPLE.bride}
          </h1>
          <p className="mt-3 font-poppins text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            {COUPLE.introSubtitle}
          </p>
        </motion.div>

        <motion.button
          type="button"
          onClick={onOpen}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 w-full max-w-[280px] rounded-full bg-espresso py-4 font-poppins text-[11px] font-medium tracking-[0.25em] text-white uppercase transition-colors hover:bg-[#3d3430]"
        >
          Open Invitation
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
