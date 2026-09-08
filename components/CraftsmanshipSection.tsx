"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Gem, Award, CheckCircle2, Sparkles, Scale } from "lucide-react";

export default function CraftsmanshipSection() {
  const investmentPillars = [
    {
      title: "Purity & Hallmarking",
      subtitle: "BIS 750 (18-Karat Gold)",
      description: "Cast exclusively in sovereign-certified 18-karat gold with certified hallmark guarantee, retaining intrinsic metal value through global bullion standards.",
      icon: <Scale className="w-6 h-6 text-luxury-gold-dark dark:text-luxury-gold" />,
      number: "01",
    },
    {
      title: "Rare Diamond Provenance",
      subtitle: "IGI & SGL Graded Gemstones",
      description: "Every brilliant-cut diamond is ethically extracted and individually verified for VVS clarity and D-E exceptional color with laser-inscribed provenance reports.",
      icon: <Gem className="w-6 h-6 text-luxury-gold-dark dark:text-luxury-gold" />,
      number: "02",
    },
    {
      title: "Generational Heirlooms",
      subtitle: "Enduring Capital & Heritage",
      description: "Engineered with architectural resilience to resist wear and micro-deformation, ensuring each creation retains both aesthetic and tangible financial legacy.",
      icon: <Award className="w-6 h-6 text-luxury-gold-dark dark:text-luxury-gold" />,
      number: "03",
    },
  ];

  const investmentMetrics = [
    { label: "Bullion Standard", value: "BIS 750 Purity" },
    { label: "Diamond Verification", value: "100% IGI Certified" },
    { label: "Valuation Recognition", value: "Worldwide Salon Standard" },
    { label: "Heirloom Assurance", value: "Lifetime Authenticity" },
  ];

  return (
    <section
      id="investments"
      className="relative py-32 sm:py-40 px-6 sm:px-12 lg:px-20 bg-champagne-light dark:bg-jewellery-black overflow-hidden border-t border-neutral-200 dark:border-luxury-gold/10 transition-colors duration-500"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-champagne/50 dark:bg-deep-burgundy/30 rounded-full blur-[200px] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        {/* Section Heading Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/80 dark:bg-deep-burgundy/50 border border-luxury-gold-dark/30 dark:border-luxury-gold/25 backdrop-blur-md text-[11px] font-light tracking-[0.25em] text-neutral-900 dark:text-champagne uppercase shadow-sm"
          >
            <TrendingUp className="w-3.5 h-3.5 text-luxury-gold-dark dark:text-luxury-gold" />
            Tangible Heritage & Wealth
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-tight text-neutral-900 dark:text-white leading-[1.05]"
          >
            INVESTMENT GRADE <br />
            <span className="gold-gradient-text font-light">HEIRLOOM PIECES.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg font-light text-neutral-700 dark:text-white/75 leading-relaxed pt-2 max-w-2xl mx-auto"
          >
            Beyond their captivating beauty, Lax360 creations are enduring physical stores of capital, crafted from certified high-purity gold and rare natural gemstones with permanent global liquidity.
          </motion.p>
        </div>

        {/* 3 Investment Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {investmentPillars.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.15 * idx, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-white to-champagne/50 dark:from-white/[0.03] dark:to-deep-burgundy/20 border border-luxury-gold-dark/20 dark:border-luxury-gold/15 hover:border-luxury-gold transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            >
              {/* Light streak reflection on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-luxury-gold/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-champagne dark:bg-deep-burgundy/60 border border-luxury-gold-dark/30 dark:border-luxury-gold/25 flex items-center justify-center group-hover:scale-110 group-hover:border-luxury-gold transition-all duration-300">
                    {card.icon}
                  </div>
                  <span className="text-3xl sm:text-4xl font-extralight tracking-widest text-neutral-400 dark:text-luxury-gold/35 group-hover:text-luxury-gold-dark dark:group-hover:text-luxury-gold/70 transition-colors">
                    {card.number}
                  </span>
                </div>

                <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-600 dark:text-luxury-gold/80 block mb-1">
                  {card.subtitle}
                </span>

                <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-neutral-900 dark:text-white group-hover:text-luxury-gold-dark dark:group-hover:text-champagne transition-colors mb-4">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base font-light text-neutral-700 dark:text-white/70 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-neutral-200 dark:border-white/5 flex items-center gap-2 text-[11px] tracking-widest uppercase text-neutral-600 dark:text-luxury-gold/60 group-hover:text-luxury-gold-dark dark:group-hover:text-luxury-gold transition-colors">
                <span>Value Guaranteed</span>
                <span className="h-[1px] w-8 bg-luxury-gold-dark/40 dark:bg-luxury-gold/30 group-hover:w-16 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Investment Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-10 rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-luxury-gold/25 dark:border-luxury-gold/15 grid grid-cols-2 lg:grid-cols-4 gap-6 backdrop-blur-md shadow-sm"
        >
          {investmentMetrics.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center space-y-1">
              <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-white/50">
                {item.label}
              </span>
              <span className="text-lg sm:text-xl font-light text-neutral-900 dark:text-white gold-gradient-text">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}