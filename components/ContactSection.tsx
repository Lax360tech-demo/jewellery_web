"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  CheckCircle2,
  Mail,
  Phone,
  User,
  MessageSquare,
  Clock,
  MapPin,
  ShieldCheck,
  Gem,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "Bespoke Jewellery Commission",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    // Simulate luxury API concierge dispatch
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "Bespoke Jewellery Commission",
        message: "",
      });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-champagne-light via-white to-champagne-light dark:from-jewellery-black dark:via-deep-burgundy/25 dark:to-jewellery-black overflow-hidden border-t border-neutral-200 dark:border-luxury-gold/15 transition-colors duration-500"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-luxury-gold/10 dark:bg-deep-burgundy/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-champagne-dark/30 dark:bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/80 dark:bg-deep-burgundy/60 border border-luxury-gold-dark/30 dark:border-luxury-gold/30 backdrop-blur-md text-[11px] sm:text-xs font-light tracking-[0.25em] text-neutral-900 dark:text-champagne uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold-dark dark:text-luxury-gold" />
            Private Salon & Concierge
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-neutral-900 dark:text-white leading-[1.05]"
          >
            GET IN <span className="font-light gold-gradient-text">TOUCH</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base lg:text-lg font-light text-neutral-600 dark:text-white/70 leading-relaxed"
          >
            Whether you desire a bespoke high jewellery commission, a private salon appointment, or product guidance, our concierge specialists are at your service.
          </motion.p>
        </div>

        {/* 2-Column Responsive Layout: Info Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Salon Experience & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-neutral-200/80 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.8)] space-y-8">
              <div>
                <h3 className="text-2xl font-light text-neutral-900 dark:text-white tracking-wide mb-2">
                  Lax360 Flagship Atelier
                </h3>
                <p className="text-xs sm:text-sm font-light text-neutral-600 dark:text-white/65 leading-relaxed">
                  Experience our collections in a private viewing suite with our master gemologists.
                </p>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-champagne/80 dark:bg-deep-burgundy/60 border border-luxury-gold/40 flex items-center justify-center shrink-0 text-neutral-900 dark:text-luxury-gold shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] tracking-wider uppercase text-neutral-500 dark:text-luxury-gold/80 block">
                      Private Viewing Suite
                    </span>
                    <p className="text-sm font-light text-neutral-800 dark:text-white/90 mt-0.5">
                      18 Bond Street, Mayfair, London <br />
                      & Altamount Road, Mumbai
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-champagne/80 dark:bg-deep-burgundy/60 border border-luxury-gold/40 flex items-center justify-center shrink-0 text-neutral-900 dark:text-luxury-gold shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] tracking-wider uppercase text-neutral-500 dark:text-luxury-gold/80 block">
                      Direct Concierge
                    </span>
                    <a
                      href="mailto:concierge@lax360.luxury"
                      className="text-sm font-light text-neutral-800 dark:text-white/90 hover:text-luxury-gold transition-colors block mt-0.5"
                    >
                      concierge@lax360.luxury
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-champagne/80 dark:bg-deep-burgundy/60 border border-luxury-gold/40 flex items-center justify-center shrink-0 text-neutral-900 dark:text-luxury-gold shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] tracking-wider uppercase text-neutral-500 dark:text-luxury-gold/80 block">
                      Private Salon Line
                    </span>
                    <a
                      href="tel:+919876543210"
                      className="text-sm font-light text-neutral-800 dark:text-white/90 hover:text-luxury-gold transition-colors block mt-0.5"
                    >
                      +91 (0) 98765 43210 / +44 20 7946 0912
                    </a>
                  </div>
                </div>

                {/* Salon Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-champagne/80 dark:bg-deep-burgundy/60 border border-luxury-gold/40 flex items-center justify-center shrink-0 text-neutral-900 dark:text-luxury-gold shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] tracking-wider uppercase text-neutral-500 dark:text-luxury-gold/80 block">
                      Salon Hours
                    </span>
                    <p className="text-sm font-light text-neutral-800 dark:text-white/90 mt-0.5">
                      Monday – Saturday: 10:00 AM – 7:30 PM <br />
                      <span className="text-xs text-neutral-500 dark:text-white/50">Private Sunday Viewings by Prior Appointment</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Assurance Badges */}
              <div className="pt-6 border-t border-neutral-200 dark:border-white/10 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-xs font-light text-neutral-700 dark:text-white/80">
                  <ShieldCheck className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold shrink-0" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-light text-neutral-700 dark:text-white/80">
                  <Gem className="w-4 h-4 text-luxury-gold-dark dark:text-luxury-gold shrink-0" />
                  <span>GIA & IGI Certified</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-12 rounded-3xl bg-white/85 dark:bg-black/50 backdrop-blur-2xl border border-neutral-200/80 dark:border-luxury-gold/25 shadow-[0_15px_50px_rgba(74,16,21,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-16 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-champagne dark:bg-deep-burgundy/60 border border-luxury-gold flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                      <CheckCircle2 className="w-8 h-8 text-luxury-gold-dark dark:text-luxury-gold animate-pulse" />
                    </div>
                    <h3 className="text-3xl font-light text-neutral-900 dark:text-white tracking-wide">
                      Thank You
                    </h3>
                    <p className="text-sm sm:text-base font-light text-neutral-600 dark:text-white/80 max-w-md mx-auto leading-relaxed">
                      Your enquiry has been securely received by our private salon. A dedicated Lax360 concierge advisor will get in touch with you shortly.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setStatus("idle")}
                        className="px-8 py-3 rounded-full text-xs font-medium tracking-[0.2em] uppercase text-neutral-900 dark:text-champagne bg-champagne/80 dark:bg-deep-burgundy/60 border border-luxury-gold/50 hover:border-luxury-gold transition-all"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-light text-neutral-900 dark:text-white tracking-wide mb-1">
                        Send an Enquiry
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-neutral-500 dark:text-white/60">
                        Please provide your details below and our team will respond within 2 business hours.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-600 dark:text-red-400">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-xs font-light tracking-wider uppercase text-neutral-700 dark:text-white/70"
                        >
                          Full Name <span className="text-luxury-gold-dark dark:text-luxury-gold">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Eleanor Vance"
                            className="w-full px-4 py-3.5 pl-11 rounded-xl bg-neutral-50/80 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all"
                          />
                          <User className="w-4 h-4 text-neutral-400 dark:text-white/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-xs font-light tracking-wider uppercase text-neutral-700 dark:text-white/70"
                        >
                          Email Address <span className="text-luxury-gold-dark dark:text-luxury-gold">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. eleanor@vance.com"
                            className="w-full px-4 py-3.5 pl-11 rounded-xl bg-neutral-50/80 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all"
                          />
                          <Mail className="w-4 h-4 text-neutral-400 dark:text-white/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="block text-xs font-light tracking-wider uppercase text-neutral-700 dark:text-white/70"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. +1 (555) 019-2834"
                            className="w-full px-4 py-3.5 pl-11 rounded-xl bg-neutral-50/80 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all"
                          />
                          <Phone className="w-4 h-4 text-neutral-400 dark:text-white/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Enquiry Type */}
                      <div className="space-y-2">
                        <label
                          htmlFor="enquiryType"
                          className="block text-xs font-light tracking-wider uppercase text-neutral-700 dark:text-white/70"
                        >
                          Enquiry Type
                        </label>
                        <select
                          id="enquiryType"
                          name="enquiryType"
                          value={formData.enquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-neutral-50/80 dark:bg-jewellery-black border border-neutral-200 dark:border-white/10 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all cursor-pointer"
                        >
                          <option value="Bespoke Jewellery Commission">Bespoke Jewellery Commission</option>
                          <option value="Private Salon Viewing">Private Salon Viewing Appointment</option>
                          <option value="Signature Collection Acquisition">Signature Collection Acquisition</option>
                          <option value="High Jewellery Advisory">High Jewellery Advisory</option>
                          <option value="Other Enquiries">Other Enquiries</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-xs font-light tracking-wider uppercase text-neutral-700 dark:text-white/70"
                      >
                        Message <span className="text-luxury-gold-dark dark:text-luxury-gold">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about the piece you desire, custom sizing, preferred gems, or appointment timings..."
                          className="w-full px-4 py-3.5 pl-11 rounded-xl bg-neutral-50/80 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all resize-none"
                        />
                        <MessageSquare className="w-4 h-4 text-neutral-400 dark:text-white/40 absolute left-4 top-4 pointer-events-none" />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 rounded-full text-xs font-medium tracking-[0.25em] uppercase text-black bg-gradient-to-r from-champagne via-luxury-gold to-champagne hover:brightness-110 active:scale-[0.99] transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
