"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, CheckCircle2, Feather, Compass, Gem, Layers } from "lucide-react";
import { signatureProduct } from "@/data/products";

export default function ProductDetails() {
  const { detailsSection, features, stats, price, name } = signatureProduct;

  const featureIcons = [
    <Sparkles key="sparkles" className="w-5 h-5 text-luxury-gold-dark dark:text-luxury-gold" />,
    <Compass key="compass" className="w-5 h-5 text-luxury-gold-dark dark:text-luxury-gold" />,
    <Gem key="gem" className="w-5 h-5 text-luxury-gold-dark dark:text-luxury-gold" />,
    <Feather key="feather" className="w-5 h-5 text-luxury-gold-dark dark:text-luxury-gold" />,
  ];

  return (
    <section
      id="details"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-champagne-light via-white to-champagne-light dark:from-jewellery-black dark:via-deep-burgundy/30 dark:to-jewellery-black overflow-hidden border-t border-neutral-200 dark:border-luxury-gold/10 transition-colors duration-500"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-champagne/40 dark:bg-deep-burgundy/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-luxury-gold/10 dark:bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        {/* Section Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-luxury-gold-dark dark:to-luxury-gold" />
          <span className="text-xs font-light tracking-[0.3em] uppercase text-neutral-700 dark:text-champagne">
            Exclusive Specification
          </span>
        </motion.div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Editorial Heading & Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-tight leading-[1.05] text-neutral-900 dark:text-white">
              {detailsSection.title.split(" ")[0]} <br />
              <span className="gold-gradient-text font-light">
                {detailsSection.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg font-light text-neutral-700 dark:text-white/75 leading-relaxed">
              {detailsSection.description}
            </p>

            {/* Hallmarks & Standards */}
            <div className="pt-6 border-t border-neutral-200 dark:border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-light text-neutral-800 dark:text-white/90">
                <Shield className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold shrink-0" />
                <span>BIS Hallmarked 750 (18-Karat Pure Gold Composition)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-light text-neutral-800 dark:text-white/90">
                <Sparkles className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold shrink-0" />
                <span>IGI & SGL International Diamond Authenticity Report</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-light text-neutral-800 dark:text-white/90">
                <CheckCircle2 className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold shrink-0" />
                <span>100% Conflict-Free Ethically Mined Natural Gemstones</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Product Presentation, Feature Cards & Specs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Title & Pricing Card */}
            <div className="glass-luxury p-8 sm:p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-luxury-gold/10 dark:bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-neutral-200 dark:border-white/10 pb-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-600 dark:text-luxury-gold/80 block mb-1">
                    Signature Masterwork
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-neutral-900 dark:text-white">
                    {name}
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs text-neutral-500 dark:text-white/50 block">Investment Value</span>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-light gold-gradient-text">
                    {price}
                  </span>
                </div>
              </div>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="p-4 rounded-xl bg-white/70 dark:bg-white/[0.02] border border-luxury-gold/25 dark:border-luxury-gold/15 hover:border-luxury-gold hover:bg-white dark:hover:bg-white/[0.04] transition-all duration-300 flex items-center gap-3 shadow-sm"
                  >
                    <div className="p-2 rounded-lg bg-champagne/80 dark:bg-deep-burgundy/40 border border-luxury-gold/30 dark:border-luxury-gold/20">
                      {featureIcons[idx] || <Sparkles className="w-5 h-5 text-luxury-gold" />}
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-light tracking-wide text-neutral-900 dark:text-white/90 block">
                        {feature}
                      </span>
                      <span className="text-[10px] text-neutral-600 dark:text-luxury-gold/60 font-extralight tracking-wider uppercase">
                        Guaranteed
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specifications Matrix Table */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold" />
                <h4 className="text-xs sm:text-sm uppercase tracking-[0.2em] font-light text-neutral-800 dark:text-champagne">
                  Technical Specifications
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-lg bg-white/60 dark:bg-black/40 border border-neutral-200 dark:border-white/5 flex flex-col justify-center"
                  >
                    <span className="text-[11px] tracking-wider uppercase text-neutral-500 dark:text-white/45">
                      {stat.label}
                    </span>
                    <span className="text-sm sm:text-base font-light text-neutral-900 dark:text-white/90 mt-0.5">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}