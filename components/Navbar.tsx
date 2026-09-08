"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ShoppingBag, ShieldCheck, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("aurelia-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("aurelia-theme", "light");
    }
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Collection", href: "#collection" },
    { name: "Investments", href: "#investments" },
    { name: "About", href: "#details" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAF5ED]/95 dark:bg-jewellery-black/95 backdrop-blur-2xl border-b border-luxury-gold/25 py-4 shadow-[0_10px_40px_rgba(74,16,21,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.9)]"
            : "bg-[#FAF5ED]/60 dark:bg-jewellery-black/40 backdrop-blur-md py-6 border-b border-neutral-200/50 dark:border-white/10"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            style={{ textDecoration: "none" }}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div
              style={{ width: "42px", height: "42px", minWidth: "42px" }}
              className="w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-xl border border-luxury-gold/40 flex items-center justify-center bg-white dark:bg-white/10 backdrop-blur-md group-hover:border-luxury-gold transition-all duration-300 shadow-sm dark:shadow-[0_0_15px_rgba(212,175,55,0.25)] shrink-0 overflow-hidden p-1"
            >
              <img
                src="/images/logo-transparent.png"
                alt="Lax360 Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-sans text-xl sm:text-2xl font-normal tracking-[0.18em] text-neutral-900 dark:text-white group-hover:text-luxury-gold-dark dark:group-hover:text-champagne transition-colors leading-tight">
                Lax360
              </span>
              <span className="text-[9px] tracking-[0.3em] text-neutral-600 dark:text-luxury-gold/80 font-light uppercase">
                Luxury Jewellery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ textDecoration: "none" }}
                className="text-xs lg:text-sm font-light tracking-[0.18em] text-neutral-800 dark:text-white/85 hover:text-luxury-gold-dark dark:hover:text-champagne hover:scale-105 transition-all duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-luxury-gold to-champagne group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Theme Toggle & CTA */}
          <div className="flex items-center space-x-4">
            {/* Luxury Dark / Light Mode Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
                className="relative flex items-center justify-center w-10 h-10 rounded-full bg-champagne/80 dark:bg-deep-burgundy/60 border border-luxury-gold/40 hover:border-luxury-gold hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm dark:shadow-[0_0_15px_rgba(212,175,55,0.2)] text-neutral-900 dark:text-champagne group"
                title={`Switch to ${theme === "dark" ? "Light (Champagne)" : "Dark"} Mode`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Sun className="w-4 h-4 text-luxury-gold group-hover:rotate-45 transition-transform" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Moon className="w-4 h-4 text-deep-burgundy group-hover:-rotate-12 transition-transform" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}

            {/* Shop Collection CTA */}
            <a
              href="#purchase"
              onClick={(e) => handleNavClick(e, "#purchase")}
              style={{ textDecoration: "none" }}
              className="relative hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase text-neutral-900 dark:text-champagne bg-champagne dark:bg-deep-burgundy/60 border border-luxury-gold/50 hover:border-luxury-gold hover:bg-champagne-dark dark:hover:bg-luxury-gold/25 transition-all duration-300 gold-glow-hover group overflow-hidden shadow-sm dark:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles style={{ width: 14, height: 14 }} className="text-luxury-gold-dark dark:text-luxury-gold transition-transform duration-500 group-hover:rotate-12" />
                Shop Collection
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-900 dark:text-white/80 hover:text-luxury-gold focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAF5ED]/98 dark:bg-jewellery-black/95 backdrop-blur-2xl md:hidden pt-28 px-8 flex flex-col justify-between pb-12 border-b border-luxury-gold/20"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  style={{ textDecoration: "none" }}
                  className="text-xl font-light tracking-[0.2em] text-neutral-900 dark:text-white/90 hover:text-luxury-gold-dark dark:hover:text-luxury-gold py-2 border-b border-neutral-200 dark:border-white/5 flex items-center justify-between"
                >
                  {link.name}
                  <span className="text-xs text-neutral-500 dark:text-luxury-gold/60">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-champagne/60 dark:bg-white/5 border border-luxury-gold/20">
                <span className="text-xs tracking-wider font-light text-neutral-800 dark:text-white/80">
                  Theme: {theme === "dark" ? "Dark Studio" : "Light Champagne"}
                </span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-white dark:bg-deep-burgundy border border-luxury-gold/40 text-neutral-900 dark:text-champagne font-medium"
                >
                  {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-luxury-gold" /> : <Moon className="w-3.5 h-3.5 text-deep-burgundy" />}
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </button>
              </div>

              <a
                href="#purchase"
                onClick={(e) => handleNavClick(e, "#purchase")}
                style={{ textDecoration: "none" }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase text-black bg-gradient-to-r from-champagne via-luxury-gold to-champagne hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <ShoppingBag style={{ width: 16, height: 16 }} className="text-black" />
                Shop Collection
              </a>
              <div className="flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] text-neutral-600 dark:text-luxury-gold/70 uppercase">
                <ShieldCheck style={{ width: 14, height: 14 }} /> Certified Haute Joaillerie
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}