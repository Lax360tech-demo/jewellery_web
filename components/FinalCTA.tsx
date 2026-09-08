"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  const handleScrollToPurchase = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#purchase");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-32 sm:py-44 px-6 sm:px-12 lg:px-20 bg-champagne-light dark:bg-jewellery-black overflow-hidden transition-colors duration-500">
      {/* Slanted Luxury Banner */}
      <div className="absolute inset-0 bg-gradient-to-r from-champagne-dark via-champagne to-champagne-light dark:from-deep-burgundy dark:via-[#38090E] dark:to-jewellery-black transform -skew-y-2 origin-top-left scale-110 opacity-95 transition-colors duration-500" />

      {/* Moving Gold Light Streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-[200%] bg-gradient-to-r from-transparent via-luxury-gold/[0.12] to-transparent transform rotate-45 animate-light-ray" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-[200%] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent transform -rotate-45 animate-light-ray delay-1000" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-black/40 border border-luxury-gold-dark/30 dark:border-luxury-gold/30 backdrop-blur-md text-xs font-light tracking-[0.3em] uppercase text-neutral-900 dark:text-champagne shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold-dark dark:text-luxury-gold" />
          The Lax360 Legacy
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tight text-neutral-900 dark:text-white leading-[0.95]"
        >
          WEAR <br />
          <span className="gold-gradient-text font-light">THE MOMENT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg lg:text-xl font-light text-neutral-700 dark:text-white/80 max-w-xl mx-auto leading-relaxed"
        >
          Discover a piece designed to become part of your story.
        </motion.p>

        {/* Large Glowing CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4"
        >
          <a
            href="#purchase"
            onClick={handleScrollToPurchase}
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-black bg-gradient-to-r from-champagne via-luxury-gold to-champagne hover:brightness-110 active:scale-[0.98] transition-all duration-300 shadow-[0_0_45px_rgba(212,175,55,0.45)] hover:shadow-[0_0_65px_rgba(212,175,55,0.65)] group"
          >
            <span>Explore the Collection</span>
            <ArrowUpRight className="w-4 h-4 text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}