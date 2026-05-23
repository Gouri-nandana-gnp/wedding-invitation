"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IntroPage } from "@/components/intro/IntroPage";
import { InvitationPage } from "@/components/invitation/InvitationPage";
import { FloatingActions } from "@/components/layout/FloatingActions";

export function WeddingHome() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-[100dvh] bg-cream">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <IntroPage key="intro" onOpen={handleOpen} />
        ) : (
          <InvitationPage key="invitation" />
        )}
      </AnimatePresence>

      {isOpen && <FloatingActions />}
    </div>
  );
}
