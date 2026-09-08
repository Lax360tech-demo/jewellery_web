"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Sparkles, Gem, Award } from "lucide-react";

interface TextOverlaysProps {
  progress: MotionValue<number>;
}

export default function JewelleryTextOverlays({ progress }: TextOverlaysProps) {
  // Overlay 1: Fully visible at 0 (page load) and stays until 0.18, then fades out by 0.24
  const opacity1 = useTransform(progress, [0, 0.18, 0.24], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.18, 0.24], [0, 0, -40]);

  // Overlay 2: Appears at 0.26, holds through 0.42, fades out by 0.48
  const opacity2 = useTransform(progress, [0.26, 0.32, 0.42, 0.48], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.26, 0.32, 0.42, 0.48], [40, 0, 0, -40]);

  // Overlay 3: Appears at 0.50, holds through 0.68, fades out by 0.74
  const opacity3 = useTransform(progress, [0.50, 0.56, 0.68, 0.74], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.50, 0.56, 0.68, 0.74], [40, 0, 0, -40]);

  // Overlay 4: Appears at 0.76, holds through 0.95, fades out by 1.0
  const opacity4 = useTransform(progress, [0.76, 0.82, 0.95, 1.0], [0, 1, 1, 0]);
  const y4 = useTransform(progress, [0.76, 0.82, 0.95, 1.0], [40, 0, 0, -30]);

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-12 lg:p-20 w-full h-full">
      {/* Overlay 1: Visible on Initial Load */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-14 lg:left-24 max-w-xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 dark:bg-deep-burgundy/80 border border-luxury-gold/50 backdrop-blur-md mb-4 text-[11px] sm:text-xs font-light tracking-[0.25em] text-white dark:text-champagne uppercase shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
          The Genesis of Elegance
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight leading-[0.95] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
          CRAFTED <br />
          <span className="font-light gold-gradient-text drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)]">TO CAPTIVATE.</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg font-light tracking-wide text-white/90 leading-relaxed max-w-lg border-l-2 border-luxury-gold/70 pl-4 drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
          Where precision meets timeless beauty.
        </p>
      </motion.div>

      {/* Overlay 2: Right Aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-14 lg:right-24 max-w-xl text-right"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 dark:bg-deep-burgundy/80 border border-luxury-gold/50 backdrop-blur-md mb-4 text-[11px] sm:text-xs font-light tracking-[0.25em] text-white dark:text-champagne uppercase shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
          Artisanal Geometry
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight leading-[0.95] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
          EVERY <br />
          <span className="font-light gold-gradient-text drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)]">FACET MATTERS.</span>
        </h2>
        <div className="flex justify-end mt-4 sm:mt-6">
          <p className="text-sm sm:text-base lg:text-lg font-light tracking-wide text-white/90 leading-relaxed max-w-lg border-r-2 border-luxury-gold/70 pr-4 text-right drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
            Designed with precision. Finished by hand.
          </p>
        </div>
      </motion.div>

      {/* Overlay 3: Left Aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-14 lg:left-24 max-w-xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 dark:bg-deep-burgundy/80 border border-luxury-gold/50 backdrop-blur-md mb-4 text-[11px] sm:text-xs font-light tracking-[0.25em] text-white dark:text-champagne uppercase shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          <Gem className="w-3.5 h-3.5 text-luxury-gold" />
          Luminous Light Refraction
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight leading-[0.95] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
          BRILLIANCE <br />
          <span className="font-light gold-gradient-text drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)]">IN EVERY DETAIL.</span>
        </h2>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg font-light tracking-wide text-white/90 leading-relaxed max-w-lg border-l-2 border-luxury-gold/70 pl-4 drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
          Exceptional gemstones. Refined craftsmanship.
        </p>
      </motion.div>

      {/* Overlay 4: Center-Right Aligned */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-14 lg:right-24 max-w-xl text-right"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 dark:bg-deep-burgundy/80 border border-luxury-gold/50 backdrop-blur-md mb-4 text-[11px] sm:text-xs font-light tracking-[0.25em] text-white dark:text-champagne uppercase shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          <Award className="w-3.5 h-3.5 text-luxury-gold" />
          An Everlasting Legacy
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight leading-[0.95] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
          MADE TO <br />
          <span className="font-light gold-gradient-text drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)]">BECOME TIMELESS.</span>
        </h2>
        <div className="flex justify-end mt-4 sm:mt-6">
          <p className="text-sm sm:text-base lg:text-lg font-light tracking-wide text-white/90 leading-relaxed max-w-lg border-r-2 border-luxury-gold/70 pr-4 text-right drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
            A signature piece created to be remembered.
          </p>
        </div>
      </motion.div>

      {/* Scroll indicator prompt at bottom */}
      <motion.div
        style={{ opacity: useTransform(progress, [0, 0.08], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-center"
      >
        <span className="text-[11px] font-light tracking-[0.3em] uppercase text-white dark:text-champagne drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Scroll to Unveil
        </span>
        <div className="w-5 h-9 rounded-full border border-luxury-gold/60 flex justify-center pt-1.5 bg-black/60 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-2.5 rounded-full bg-luxury-gold shadow-[0_0_10px_#D4AF37]"
          />
        </div>
      </motion.div>
    </div>
  );
}