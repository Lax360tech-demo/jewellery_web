"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  MessageCircle,
  Truck,
  ShieldCheck,
  PackageCheck,
  RotateCcw,
  Sparkles,
  CheckCircle,
  X,
  Send,
} from "lucide-react";
import { signatureProduct } from "@/data/products";

export default function BuyNowSection() {
  const { buyNowSection, price, name } = signatureProduct;

  const [selectedSize, setSelectedSize] = useState<string>("Standard (16 in / 40 cm)");
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false);
  const [enquirySent, setEnquirySent] = useState<boolean>(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: "", email: "", phone: "", message: "" });

  const sizeOptions = [
    "Petite (14 in / 35 cm)",
    "Standard (16 in / 40 cm)",
    "Classic (18 in / 45 cm)",
    "Bespoke Made-to-Measure",
  ];

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 4000);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
    setTimeout(() => {
      setEnquiryModalOpen(false);
      setEnquirySent(false);
      setEnquiryForm({ name: "", email: "", phone: "", message: "" });
    }, 2500);
  };

  const assuranceBadges = [
    { label: "Complimentary Delivery", icon: <Truck className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold" /> },
    { label: "Secure Packaging", icon: <PackageCheck className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold" /> },
    { label: "Authenticity Certificate", icon: <ShieldCheck className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold" /> },
    { label: "Easy Returns", icon: <RotateCcw className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold" /> },
  ];

  return (
    <section
      id="purchase"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-champagne-light via-champagne/30 to-champagne-light dark:from-jewellery-black dark:via-deep-burgundy/25 dark:to-jewellery-black overflow-hidden border-t border-neutral-200 dark:border-luxury-gold/10 transition-colors duration-500"
    >
      {/* Background Lighting Halos */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-champagne/50 dark:bg-deep-burgundy/40 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        {/* Centered Purchase Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass-luxury rounded-3xl p-8 sm:p-14 lg:p-16 border border-luxury-gold-dark/30 dark:border-luxury-gold/30 shadow-lg dark:shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          {/* Subtle Golden Ambient Corner Light */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-luxury-gold/15 dark:bg-luxury-gold/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Title */}
          <div className="text-center space-y-3 pb-8 border-b border-neutral-200 dark:border-white/10">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-light tracking-[0.3em] uppercase text-neutral-700 dark:text-luxury-gold">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold-dark dark:text-luxury-gold" /> Direct Atelier Acquisition
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 dark:text-white tracking-wide">
              {name}
            </h2>
            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="text-sm sm:text-base text-neutral-500 dark:text-white/50 font-light">Price on Acquisition:</span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-light gold-gradient-text tracking-tight">
                {price}
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-white/40 tracking-wider">
              All taxes, insured transport and valuation included
            </p>
          </div>

          {/* Sizing & Customization Selector */}
          <div className="py-8 border-b border-neutral-200 dark:border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-light text-neutral-700 dark:text-white/80 tracking-wider uppercase text-[11px]">
                Select Fit / Proportions
              </span>
              <span className="text-luxury-gold-dark dark:text-luxury-gold text-xs underline cursor-pointer hover:text-champagne transition-colors">
                Bespoke Sizing Guide
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-3.5 rounded-xl text-xs sm:text-sm font-light tracking-wider transition-all duration-300 text-left border flex items-center justify-between ${
                    selectedSize === size
                      ? "border-luxury-gold-dark dark:border-luxury-gold bg-champagne dark:bg-luxury-gold/15 text-neutral-900 dark:text-white shadow-sm dark:shadow-[0_0_15px_rgba(212,175,55,0.2)] font-medium"
                      : "border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.02] text-neutral-700 dark:text-white/70 hover:border-luxury-gold/40 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  <span>{size}</span>
                  {selectedSize === size && (
                    <span className="w-2 h-2 rounded-full bg-luxury-gold-dark dark:bg-luxury-gold shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 px-8 rounded-full text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-black bg-gradient-to-r from-champagne via-luxury-gold to-champagne hover:brightness-105 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.35)] relative overflow-hidden group"
              >
                <ShoppingBag className="w-4 h-4 text-black" />
                <span>{isAddedToCart ? "Added to Private Vault" : "Add to Collection"}</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>

              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="py-4 px-8 rounded-full text-xs sm:text-sm font-light tracking-[0.2em] uppercase text-neutral-900 dark:text-champagne bg-champagne/50 dark:bg-transparent border border-luxury-gold-dark/40 dark:border-luxury-gold/40 hover:border-luxury-gold hover:bg-champagne dark:hover:bg-luxury-gold/10 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold" />
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Notification Confirmation Banner */}
            <AnimatePresence>
              {isAddedToCart && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3.5 rounded-xl bg-champagne/80 dark:bg-luxury-gold/20 border border-luxury-gold/50 flex items-center justify-center gap-2 text-xs font-light text-neutral-900 dark:text-champagne"
                >
                  <CheckCircle className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold" />
                  <span>The Lax360 Signature has been reserved in your private collection.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4 Information Guarantee Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 mt-6 border-t border-neutral-200 dark:border-white/10">
            {assuranceBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center text-center gap-2 p-2">
                <div className="w-10 h-10 rounded-full bg-champagne dark:bg-deep-burgundy/50 border border-luxury-gold/30 dark:border-luxury-gold/20 flex items-center justify-center shadow-sm">
                  {badge.icon}
                </div>
                <span className="text-xs font-light text-neutral-700 dark:text-white/75 tracking-wider">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          {/* Delivery & Processing Promises */}
          <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-light text-neutral-500 dark:text-white/50 text-center sm:text-left gap-2">
            <span>{buyNowSection.deliveryPromise}</span>
            <span className="text-luxury-gold-dark dark:text-luxury-gold/70">{buyNowSection.processingInfo}</span>
          </div>
        </motion.div>
      </div>

      {/* Private Concierge Enquiry Modal */}
      <AnimatePresence>
        {enquiryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:glass-luxury rounded-3xl p-8 max-w-lg w-full border border-luxury-gold/40 relative shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            >
              <button
                onClick={() => setEnquiryModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-neutral-500 dark:text-white/60 hover:text-black dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold-dark dark:text-luxury-gold">
                  Private Salon Concierge
                </span>
                <h3 className="text-2xl font-light text-neutral-900 dark:text-white">Bespoke Acquisition Enquiry</h3>
                <p className="text-xs text-neutral-600 dark:text-white/70">
                  Connect with a dedicated high jewellery specialist for personalized appointments and custom commissions.
                </p>
              </div>

              {enquirySent ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-luxury-gold-dark dark:text-luxury-gold mx-auto animate-bounce" />
                  <h4 className="text-lg font-light text-neutral-900 dark:text-white">Enquiry Received</h4>
                  <p className="text-xs text-neutral-600 dark:text-white/70 max-w-xs mx-auto">
                    A senior Lax360 concierge advisor will contact you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] tracking-wider uppercase text-neutral-600 dark:text-white/60 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      placeholder="e.g. Lady Victoria Sterling"
                      className="w-full px-4 py-2.5 rounded-xl bg-champagne-light dark:bg-black/50 border border-neutral-300 dark:border-white/15 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-luxury-gold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] tracking-wider uppercase text-neutral-600 dark:text-white/60 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={enquiryForm.email}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                        placeholder="vip@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-champagne-light dark:bg-black/50 border border-neutral-300 dark:border-white/15 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-wider uppercase text-neutral-600 dark:text-white/60 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-champagne-light dark:bg-black/50 border border-neutral-300 dark:border-white/15 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-wider uppercase text-neutral-600 dark:text-white/60 mb-1">
                      Personal Note or Custom Request
                    </label>
                    <textarea
                      rows={3}
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                      placeholder="Inquire about engraving, bespoke adjustments or private viewing..."
                      className="w-full px-4 py-2.5 rounded-xl bg-champagne-light dark:bg-black/50 border border-neutral-300 dark:border-white/15 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-luxury-gold resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase text-black bg-gradient-to-r from-champagne via-luxury-gold to-champagne hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5 text-black" />
                    Submit Private Request
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}