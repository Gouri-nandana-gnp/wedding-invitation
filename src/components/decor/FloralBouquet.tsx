"use client";

import { motion } from "framer-motion";

/** Watercolor-style top-left bouquet for the invite hero */
export function FloralBouquetTopLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="absolute -top-1 -left-2 z-0 w-[200px] sm:w-[220px]"
      aria-hidden
    >
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full drop-shadow-sm"
      >
        <defs>
          <radialGradient id="roseGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0ebe4" />
          </radialGradient>
          <radialGradient id="leafGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4e0d0" />
            <stop offset="100%" stopColor="#b8c9b0" stopOpacity="0.6" />
          </radialGradient>
        </defs>

        {/* Leaves */}
        <ellipse
          cx="95"
          cy="155"
          rx="42"
          ry="14"
          fill="url(#leafGrad)"
          transform="rotate(-25 95 155)"
        />
        <ellipse
          cx="130"
          cy="140"
          rx="36"
          ry="12"
          fill="url(#leafGrad)"
          transform="rotate(15 130 140)"
        />
        <ellipse
          cx="60"
          cy="120"
          rx="28"
          ry="10"
          fill="url(#leafGrad)"
          transform="rotate(-40 60 120)"
        />
        <path
          d="M40 100 Q55 130 70 160"
          stroke="#b8c9b0"
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M100 90 Q115 130 125 165"
          stroke="#b8c9b0"
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />

        {/* Main rose */}
        <circle cx="88" cy="72" r="26" fill="url(#roseGrad)" />
        <circle cx="75" cy="82" r="20" fill="url(#roseGrad)" />
        <circle cx="102" cy="82" r="20" fill="url(#roseGrad)" />
        <circle cx="88" cy="90" r="16" fill="#faf8f5" />

        {/* Anemone */}
        <circle cx="130" cy="58" r="22" fill="url(#roseGrad)" />
        <circle cx="118" cy="68" r="16" fill="url(#roseGrad)" />
        <circle cx="142" cy="68" r="16" fill="url(#roseGrad)" />
        <circle cx="130" cy="62" r="8" fill="#2d4f4f" fillOpacity="0.75" />

        {/* Small rose */}
        <circle cx="55" cy="55" r="16" fill="url(#roseGrad)" />
        <circle cx="48" cy="62" r="12" fill="url(#roseGrad)" />
        <circle cx="62" cy="62" r="12" fill="url(#roseGrad)" />

        {/* Bud */}
        <ellipse cx="155" cy="95" rx="10" ry="14" fill="url(#roseGrad)" />

        {/* Line sprigs */}
        <path
          d="M20 60 Q35 80 45 100"
          stroke="#c5d4bc"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M165 45 Q175 70 170 95"
          stroke="#c5d4bc"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </motion.div>
  );
}

export function FloralAccentCorner({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.35 }}
      transition={{ duration: 1.6, delay: 0.3 }}
      className={className}
      aria-hidden
    >
      <svg
        viewBox="0 0 80 80"
        fill="none"
        className={`h-full w-full ${flip ? "scale-x-[-1]" : ""}`}
      >
        <circle cx="40" cy="30" r="14" fill="white" fillOpacity="0.7" />
        <circle cx="28" cy="40" r="10" fill="white" fillOpacity="0.6" />
        <circle cx="52" cy="40" r="10" fill="white" fillOpacity="0.6" />
        <ellipse cx="40" cy="55" rx="18" ry="8" fill="#d4e0d0" fillOpacity="0.4" />
      </svg>
    </motion.div>
  );
}
