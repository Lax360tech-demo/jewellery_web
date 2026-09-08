"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Instagram, Facebook, Youtube, Shield, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer id="footer" className="relative bg-neutral-950 text-white dark:bg-black border-t border-luxury-gold/20 overflow-hidden">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 pt-20 pb-12">
        {/* 4 Column Luxury Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div
                style={{ width: "36px", height: "36px", minWidth: "36px" }}
                className="w-9 h-9 rounded-lg border border-luxury-gold/40 flex items-center justify-center bg-white/10 backdrop-blur-md shrink-0 overflow-hidden p-1 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              >
                <img
                  src="/images/logo-transparent.png"
                  alt="Lax360 Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-sans text-xl font-normal tracking-[0.18em] text-white">
                Lax360
              </span>
            </div>

            <p className="text-sm sm:text-base font-light text-white/70 leading-relaxed max-w-sm">
              Timeless jewellery. <br />
              Exceptional craftsmanship.
            </p>

            <div className="flex items-center gap-4 text-white/60 pt-2">
              <a
                href="#instagram"
                style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram style={{ width: 16, height: 16 }} />
              </a>
              <a
                href="#facebook"
                style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook style={{ width: 16, height: 16 }} />
              </a>
              <a
                href="#youtube"
                style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube style={{ width: 16, height: 16 }} />
              </a>
            </div>
          </div>

          {/* Col 2: Collection (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-light uppercase tracking-[0.25em] text-champagne">
              Collection
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-white/65 list-none p-0 m-0">
              {["Necklaces", "Rings", "Earrings", "Bracelets", "Bridal"].map((item) => (
                <li key={item}>
                  <a
                    href="#details"
                    style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
                    className="hover:text-luxury-gold transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-light uppercase tracking-[0.25em] text-champagne">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-white/65 list-none p-0 m-0">
              {["Contact", "Shipping", "Returns", "Care Guide", "FAQs"].map((item) => (
                <li key={item}>
                  <a
                    href="#details"
                    style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
                    className="hover:text-luxury-gold transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-light uppercase tracking-[0.25em] text-champagne flex items-center gap-2">
              <Sparkles style={{ width: 14, height: 14 }} className="text-luxury-gold" />
              JOIN THE INNER CIRCLE
            </h4>
            <p className="text-xs sm:text-sm font-light text-white/65 leading-relaxed">
              Receive private collection previews, stories and exclusive invitations.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-white/[0.06] border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-luxury-gold transition-colors pr-28"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-5 rounded-full bg-luxury-gold text-black text-xs font-medium tracking-wider uppercase hover:bg-champagne transition-all duration-300 flex items-center gap-1"
                >
                  {subscribed ? (
                    <>
                      <Check style={{ width: 14, height: 14 }} />
                      <span>Joined</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight style={{ width: 14, height: 14 }} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-light text-white/45 gap-4">
          <p>© 2026 Lax360 Jewellery. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#privacy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }} className="hover:text-luxury-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }} className="hover:text-luxury-gold transition-colors">
              Terms of Service
            </a>
            <a href="#ethics" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }} className="hover:text-luxury-gold transition-colors flex items-center gap-1.5">
              <Shield style={{ width: 12, height: 12 }} className="text-luxury-gold" />
              Ethical Sourcing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}