"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { VENUE, WEDDING_EVENT } from "@/lib/constants";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FloralDecor } from "@/components/decor/FloralDecor";

export function WeddingEventsSection() {
  return (
    <section id="events" className="section-block relative">
      <FloralDecor variant="subtle" />

      <div className="relative z-10 text-center">
        <SectionTitle>Events</SectionTitle>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-vibes mt-10 text-5xl text-forest md:text-6xl"
        >
          {WEDDING_EVENT.title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 space-y-3"
        >
          <div className="flex items-center justify-center gap-2.5 font-playfair text-base md:text-lg text-muted-foreground">
            <Calendar className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <span>{WEDDING_EVENT.date}</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 font-playfair text-base md:text-lg text-muted-foreground">
            <Clock className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <span>{WEDDING_EVENT.time}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8"
        >
          <div className="flex justify-center">
            <MapPin className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <p className="font-playfair mt-2 text-lg md:text-xl font-medium tracking-[0.12em] text-muted-foreground uppercase">
            {WEDDING_EVENT.venueName}
          </p>
          {WEDDING_EVENT.venueLines.map((line) => (
            <p
              key={line}
              className="font-playfair text-base md:text-lg text-muted-foreground"
            >
              {line}
            </p>
          ))}
        </motion.div>

        <motion.a
          href={VENUE.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-block rounded-md bg-navy px-10 py-3 font-poppins text-sm font-medium tracking-wide text-white"
        >
          View Map
        </motion.a>
      </div>
    </section>
  );
}
