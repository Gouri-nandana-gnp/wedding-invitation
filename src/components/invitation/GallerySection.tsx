"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FloralDecor } from "@/components/decor/FloralDecor";
import { cn } from "@/lib/utils";

const photos = GALLERY_IMAGES.slice(0, 5);

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const scrollThumbTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const selectPhoto = useCallback(
    (index: number) => {
      setSelectedIndex(index);
      scrollThumbTo(index);
    },
    [scrollThumbTo]
  );

  const goPrev = () => {
    const next = (selectedIndex - 1 + photos.length) % photos.length;
    selectPhoto(next);
  };

  const goNext = () => {
    const next = (selectedIndex + 1) % photos.length;
    selectPhoto(next);
  };

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const selected = photos[selectedIndex];

  return (
    <section id="gallery" className="section-block relative pb-24">
      <FloralDecor variant="subtle" />

      <div className="relative z-10">
        <SectionTitle>Gallery</SectionTitle>

        {/* Main viewer */}
        <div className="relative mx-auto mt-10 max-w-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-3xl border-4 border-white shadow-soft"
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className={cn(
                  "object-cover",
                  selected.src.startsWith("/images/") && "object-[center_25%]"
                )}
                sizes="280px"
                priority={selectedIndex === 0}
                unoptimized={selected.src.startsWith("/images/")}
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={goPrev}
            className="absolute top-1/2 -left-2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow-soft backdrop-blur-sm"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute top-1/2 -right-2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow-soft backdrop-blur-sm"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-3 text-center font-poppins text-xs text-muted-foreground">
          {selectedIndex + 1} / {photos.length}
        </p>

        {/* Scrollable thumbnails */}
        <div className="mt-8 overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-x gap-4 px-4">
            {photos.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => selectPhoto(index)}
                className={cn(
                  "relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 transition-all duration-300 md:h-24 md:w-24",
                  selectedIndex === index
                    ? "scale-105 border-gold shadow-soft"
                    : "border-white opacity-70 hover:opacity-100"
                )}
                aria-label={`View photo ${index + 1}: ${image.alt}`}
                aria-current={selectedIndex === index}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-5 flex justify-center gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => selectPhoto(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "w-6 bg-gold"
                  : "w-2 bg-[#d9d2cb]"
              )}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
