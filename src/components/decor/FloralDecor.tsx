"use client";

import { cn } from "@/lib/utils";
import { FloralAccentCorner, FloralBouquetTopLeft } from "./FloralBouquet";

interface FloralDecorProps {
  variant?: "invite" | "subtle";
  className?: string;
}

export function FloralDecor({ variant = "invite", className }: FloralDecorProps) {
  const isInvite = variant === "invite";

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {isInvite ? (
        <FloralBouquetTopLeft />
      ) : (
        <FloralAccentCorner className="absolute -top-2 -left-2 h-28 w-28 opacity-40" />
      )}

      <FloralAccentCorner
        className="absolute top-6 -right-2 h-24 w-24"
        flip
      />

      <FloralAccentCorner className="absolute bottom-28 -left-1 h-20 w-20 opacity-30" />

      <FloralAccentCorner
        className="absolute right-2 bottom-36 h-16 w-16 opacity-25"
        flip
      />
    </div>
  );
}
