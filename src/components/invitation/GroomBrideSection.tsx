"use client";

import { motion } from "framer-motion";
import { BRIDE, GROOM } from "@/lib/constants";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FloralDecor } from "@/components/decor/FloralDecor";

function PersonBlock({
  name,
  parents,
  delay,
}: {
  name: string;
  parents: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="text-center"
    >
      <h3 className="font-playfair text-4xl font-bold tracking-[0.04em] text-forest md:text-5xl">
        {name}
      </h3>
      <p className="mt-4 font-poppins text-[10px] leading-relaxed tracking-[0.15em] text-foreground uppercase">
        {parents}
      </p>
    </motion.div>
  );
}

export function GroomBrideSection() {
  return (
    <section id="couple" className="section-block relative">
      <FloralDecor variant="subtle" />

      <div className="relative z-10">
        <SectionTitle withAmpersand>Groom & Bride</SectionTitle>

        <div className="mt-14 space-y-16">
          <PersonBlock name={GROOM.name} parents={GROOM.parents} delay={0.1} />
          <PersonBlock name={BRIDE.name} parents={BRIDE.parents} delay={0.2} />
        </div>
      </div>
    </section>
  );
}
