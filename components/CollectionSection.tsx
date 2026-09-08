"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShoppingBag,
  Eye,
  Shield,
  Gem,
  Award,
  ArrowRight,
  Check,
  X,
} from "lucide-react";

export interface CollectionItem {
  id: string;
  name: string;
  category: "Rings" | "Necklaces" | "Bracelets" | "Earrings";
  price: string;
  rawPrice: number;
  image: string;
  tagline: string;
  specs: {
    metal: string;
    carat: string;
    clarity: string;
    certification: string;
  };
  description: string;
}

export const collectionItems: CollectionItem[] = [
  {
    id: "solitaire-ring",
    name: "Lax360 Solitaire Diamond Ring",
    category: "Rings",
    price: "₹1,25,000",
    rawPrice: 125000,
    image: "/images/collection/solitaire-ring.webp",
    tagline: "The Pinnacle of Brilliance",
    specs: {
      metal: "18K Solid Yellow Gold (750)",
      carat: "2.45 ct Solitaire",
      clarity: "VVS1 (D-E Color Grade)",
      certification: "IGI & SGL International",
    },
    description:
      "Sculpted with micro-precision in solid 18-karat gold, holding an exceptional hand-selected brilliant cut solitaire diamond designed to refract light with unparalleled scintillation.",
  },
  {
    id: "emerald-necklace",
    name: "Royal Emerald & Diamond Pendant",
    category: "Necklaces",
    price: "₹2,85,000",
    rawPrice: 285000,
    image: "/images/collection/emerald-necklace.webp",
    tagline: "Verdant Imperial Majesty",
    specs: {
      metal: "18K Solid Gold & Diamond Chain",
      carat: "4.10 ct Colombian Emerald + 1.8 ct Dia",
      clarity: "Natural Vivid Green / VVS",
      certification: "GRS & IGI Certified",
    },
    description:
      "A rare, ethically sourced Colombian emerald encircled by a double halo of baguette and pear cut brilliant diamonds, suspended from a meticulously articulated gold chain.",
  },
  {
    id: "diamond-bracelet",
    name: "Luminescent Diamond Tennis Bracelet",
    category: "Bracelets",
    price: "₹3,40,000",
    rawPrice: 340000,
    image: "/images/collection/diamond-bracelet.webp",
    tagline: "Continuous River of Light",
    specs: {
      metal: "18K Solid Gold Setting",
      carat: "5.20 ct Total Diamond Weight",
      clarity: "VVS2-VVS1 Brilliant Round",
      certification: "IGI Hallmark Certified",
    },
    description:
      "Over fifty calibrated brilliant-cut diamonds handset in a flexible 18-karat gold lattice with safety clasp, ensuring fluid movement and maximum brilliance on the wrist.",
  },
  {
    id: "diamond-earrings",
    name: "Artisanal Chandelier Drop Earrings",
    category: "Earrings",
    price: "₹2,10,000",
    rawPrice: 210000,
    image: "/images/collection/diamond-earrings.webp",
    tagline: "Cascading Luminescence",
    specs: {
      metal: "18K Solid Gold Filigree",
      carat: "3.60 ct Pear & Marquise Diamonds",
      clarity: "VVS1 Ideal Cut",
      certification: "IGI & BIS 750 Hallmarked",
    },
    description:
      "Intricately crafted drop earrings inspired by classical royal silhouettes, cascading with pear and marquise shaped diamonds that sway gracefully with every movement.",
  },
];

export default function CollectionSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [quickViewItem, setQuickViewItem] = useState<CollectionItem | null>(null);

  const categories = ["All", "Rings", "Necklaces", "Bracelets", "Earrings"];

  const filteredItems =
    selectedCategory === "All"
      ? collectionItems
      : collectionItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="collection"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-champagne-light via-white to-champagne-light dark:from-jewellery-black dark:via-deep-burgundy/20 dark:to-jewellery-black overflow-hidden border-t border-neutral-200 dark:border-luxury-gold/15 transition-colors duration-500"
    >
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-champagne-dark/30 dark:bg-deep-burgundy/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-luxury-gold/10 dark:bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/80 dark:bg-deep-burgundy/60 border border-luxury-gold-dark/30 dark:border-luxury-gold/30 backdrop-blur-md text-[11px] sm:text-xs font-light tracking-[0.25em] text-neutral-900 dark:text-champagne uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold-dark dark:text-luxury-gold" />
            Haute Joaillerie Gallery
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-neutral-900 dark:text-white leading-[1.05]"
          >
            THE SIGNATURE <span className="font-light gold-gradient-text">COLLECTION</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base lg:text-lg font-light text-neutral-600 dark:text-white/70 leading-relaxed"
          >
            Each masterpiece is individually sculpted by our master artisans in solid 18K gold and certified VVS diamonds, created to transcend generations.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-light tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-champagne via-luxury-gold to-champagne text-black font-medium shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-105"
                    : "bg-white/60 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-white/70 hover:border-luxury-gold hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                className="group relative flex flex-col justify-between rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-neutral-200/80 dark:border-luxury-gold/20 hover:border-luxury-gold transition-all duration-500 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:-translate-y-2"
              >
                {/* Image Container with Luxury Overlay */}
                <div className="relative aspect-square w-full overflow-hidden bg-black/90 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium text-white bg-black/60 border border-luxury-gold/40 backdrop-blur-md shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button
                      onClick={() => setQuickViewItem(item)}
                      className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase text-black bg-white/95 hover:bg-champagne transition-all shadow-lg flex items-center gap-1.5 cursor-pointer transform translate-y-2 group-hover:translate-y-0 duration-300"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-500 dark:text-luxury-gold/80 block font-light">
                      {item.tagline}
                    </span>
                    <h3 className="text-lg sm:text-xl font-light tracking-wide text-neutral-900 dark:text-white mt-1 group-hover:text-luxury-gold-dark dark:group-hover:text-champagne transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {/* Specs Matrix */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-neutral-200/80 dark:border-white/10 text-[11px]">
                    <div>
                      <span className="text-neutral-400 dark:text-white/40 block">Metal Purity</span>
                      <span className="font-light text-neutral-800 dark:text-white/90">18K Gold (750)</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 dark:text-white/40 block">Carat</span>
                      <span className="font-light text-neutral-800 dark:text-white/90">{item.specs.carat.split(" ")[0]} ct</span>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[10px] text-neutral-400 dark:text-white/50 block uppercase tracking-wider">
                        Price
                      </span>
                      <span className="text-xl sm:text-2xl font-light gold-gradient-text">
                        {item.price}
                      </span>
                    </div>

                    <a
                      href="#purchase"
                      style={{ textDecoration: "none" }}
                      className="px-4 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase text-neutral-900 dark:text-champagne bg-champagne/80 dark:bg-deep-burgundy/60 border border-luxury-gold/50 hover:border-luxury-gold hover:bg-luxury-gold hover:text-black dark:hover:bg-luxury-gold dark:hover:text-black transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Acquire</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-neutral-950 rounded-3xl max-w-3xl w-full border border-neutral-200 dark:border-luxury-gold/40 relative overflow-hidden shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            >
              <button
                onClick={() => setQuickViewItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square bg-black flex items-center justify-center">
                  <img
                    src={quickViewItem.image}
                    alt={quickViewItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-medium text-white bg-black/70 border border-luxury-gold/50 backdrop-blur-md">
                      {quickViewItem.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold-dark dark:text-luxury-gold block font-light mb-1">
                      {quickViewItem.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 dark:text-white tracking-wide">
                      {quickViewItem.name}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm font-light text-neutral-600 dark:text-white/70 leading-relaxed">
                      {quickViewItem.description}
                    </p>
                  </div>

                  {/* Detailed Specs */}
                  <div className="space-y-2 py-4 border-y border-neutral-200 dark:border-white/10 text-xs">
                    <div className="flex justify-between">
                      <span className="text-neutral-500 dark:text-white/50">Metal & Purity:</span>
                      <span className="font-light text-neutral-900 dark:text-white">{quickViewItem.specs.metal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 dark:text-white/50">Carat Weight:</span>
                      <span className="font-light text-neutral-900 dark:text-white">{quickViewItem.specs.carat}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 dark:text-white/50">Clarity & Color:</span>
                      <span className="font-light text-neutral-900 dark:text-white">{quickViewItem.specs.clarity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 dark:text-white/50">Certification:</span>
                      <span className="font-light text-neutral-900 dark:text-white">{quickViewItem.specs.certification}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-[10px] text-neutral-400 dark:text-white/50 block uppercase tracking-wider">
                        Investment Value
                      </span>
                      <span className="text-2xl sm:text-3xl font-light gold-gradient-text">
                        {quickViewItem.price}
                      </span>
                    </div>

                    <a
                      href="#purchase"
                      onClick={() => setQuickViewItem(null)}
                      style={{ textDecoration: "none" }}
                      className="px-6 py-3 rounded-full text-xs font-medium tracking-[0.2em] uppercase text-black bg-gradient-to-r from-champagne via-luxury-gold to-champagne hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    >
                      Acquire Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
