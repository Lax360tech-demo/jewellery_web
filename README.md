# Aurelia Jewellery — Haute Joaillerie Cinematic Scrollytelling Website

A world-class, production-ready, interactive luxury e-commerce scrollytelling single-page website for **"Aurelia Jewellery"**, built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **HTML5 Canvas**.

---

## Features

- **Cinematic Canvas Scrollytelling Engine (`JewelleryScroll.tsx`)**:
  - 500vh scroll container mapping viewport scroll progress (0 to 1) directly to a 120-frame image sequence (`1.webp` through `120.webp`).
  - High-DPI / Retina display auto-scaling with `contain` aspect ratio fitting.
  - Zero distortion, centered jewellery presentation with smooth `requestAnimationFrame` render loop.
  - Luxury preloading with real-time percentage progress feedback.
  - Accessible reduced-motion fallback (`prefers-reduced-motion: reduce`) rendering the final hero composition frame.
- **Scroll-Synchronized Editorial Overlays (`JewelleryTextOverlays.tsx`)**:
  - 4 cinematic text checkpoints triggering at `0.10`, `0.30`, `0.60`, and `0.85` progress.
  - Generous luxury whitespace positioned to never occlude the central jewellery hero.
- **Haute Joaillerie Product Information (`ProductDetails.tsx`)**:
  - Editorial split layout with brand narrative, hallmark verifications (BIS 750, IGI / SGL reports), 4 hallmark cards (`18K Gold`, `Precision Crafted`, `Natural Diamonds`, `Hand Finished`), and a technical specifications matrix.
- **Artisanal Storytelling (`CraftsmanshipSection.tsx`)**:
  - 3 luxury interactive cards (`Precision`, `Brilliance`, `Craft`) with floating diamond particles and hover light-reflection effects.
- **Direct Atelier Acquisition (`BuyNowSection.tsx`)**:
  - Centered acquisition card with ₹1,25,000 price point, fit sizing selector, interactive "Add to Collection" cart reservation, VIP Concierge Modal, and 4 assurance badges.
- **Slanted Final CTA (`FinalCTA.tsx`) & 4-Column Luxury Footer (`Footer.tsx`)**:
  - Slanted deep burgundy backdrop with moving gold light streaks, brand links, client care, and newsletter membership.

---

## Project Structure

```text
aurelia-jewellery/
├── app/
│   ├── globals.css              # Custom luxury CSS variables, scrollbar, glowing gradients
│   ├── layout.tsx               # Root layout with Outfit Google Font, SEO metadata
│   └── page.tsx                 # Page orchestrator with AnimatePresence & section flow
│
├── components/
│   ├── JewelleryScroll.tsx      # 500vh sticky HTML5 Canvas scrollytelling engine (120 frames)
│   ├── JewelleryTextOverlays.tsx# 4 cinematic scroll-synchronized text overlays
│   ├── Navbar.tsx               # Fixed luxury navbar with SVG logo, backdrop blur, mobile drawer
│   ├── ProductDetails.tsx       # Luxury editorial product specifications & feature cards
│   ├── CraftsmanshipSection.tsx # Precision, Brilliance, Craft with floating particles
│   ├── BuyNowSection.tsx        # Centered purchase card, actions, badges, delivery guarantees
│   ├── FinalCTA.tsx             # Slanted burgundy CTA with moving gold light streaks
│   └── Footer.tsx               # 4-column dark luxury footer with newsletter & links
│
├── data/
│   └── products.ts              # Product schema & Aurelia Signature dataset
│
├── public/
│   └── images/
│       └── jewellery/
│           ├── 1.webp
│           ├── 2.webp
│           ├── ...
│           └── 120.webp         # 120 cinematic jewellery assembly/reveal frames
│
├── next.config.mjs              # Static export configuration (`output: 'export'`)
├── tailwind.config.ts           # Custom palette (jewellery-black, deep-burgundy, luxury-gold, champagne)
├── postcss.config.mjs           # Tailwind and Autoprefixer config
├── tsconfig.json                # TypeScript configuration with `@/*` aliases
├── package.json                 # Project dependencies & scripts
└── README.md                    # Setup and documentation
```

---

## Jewellery Image Sequence Specification

The scroll animation loads 120 frames located in:

```text
public/images/jewellery/
```

Required filenames:

```text
1.webp
2.webp
3.webp
...
120.webp
```

### Visual Progression Across Frames:
- **Frames 1–25**: Dark empty studio with subtle golden particles and soft silk ribbons.
- **Frames 26–50**: Golden light trails converge toward center; component emergence.
- **Frames 51–75**: Progressive assembly, metal interlocks, diamond facets catching light.
- **Frames 76–100**: Complete jewellery piece visible with warm golden rim lighting.
- **Frames 101–120**: Final hero composition with cinematic light sweep and diamond sparkle.

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export

```bash
npm run build
```

The optimized static export will be generated in the `out/` directory, ready for instant static deployment (Vercel, Netlify, Cloudflare Pages, AWS S3 / CloudFront, GitHub Pages, etc.).

---

## Design System & Palette

- **Jewellery Black**: `#050505`
- **Deep Burgundy**: `#240609`
- **Luxury Gold**: `#D4AF37`
- **Champagne**: `#F5E6C8`
- **Rose Gold**: `#B76E79`
- **Diamond White**: `#FFFFFF`
- **Typography**: Google Font **Outfit** (Weights 200, 300, 400, 500, 600)