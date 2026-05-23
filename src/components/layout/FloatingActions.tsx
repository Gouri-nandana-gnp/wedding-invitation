"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { VENUE, MUSIC_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

function AudioBars({ playing }: { playing: boolean }) {
  return (
    <div className="flex h-4 items-end justify-center gap-[3px]">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-forest/80"
          animate={
            playing
              ? { height: ["6px", "14px", "8px", "14px", "6px"] }
              : { height: "6px" }
          }
          transition={{
            duration: 0.8,
            repeat: playing ? Infinity : 0,
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  );
}

export function FloatingActions() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.25;

    const playAudio = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Auto-play failed or was prevented by browser:", err);
      }
    };

    playAudio();

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);


  const toggleMusic = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 mx-auto max-w-invite px-5">
      <div className="pointer-events-auto flex items-end justify-between">
        <motion.button
          type="button"
          onClick={toggleMusic}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full shadow-soft transition-colors",
            isPlaying ? "bg-lavender" : "bg-lavender/90"
          )}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <AudioBars playing={isPlaying} />
        </motion.button>

        <motion.a
          href={VENUE.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft"
          aria-label="View venue on map"
        >
          <MapPin className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
        </motion.a>
      </div>
    </div>
  );
}
