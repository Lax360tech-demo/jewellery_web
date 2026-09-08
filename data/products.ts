export interface StorySection {
  progress: number;
  tagline: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  alignment: "left" | "right" | "center";
}

export interface ProductStat {
  label: string;
  value: string;
}

export interface CraftsmanshipFeature {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ProductDetailsSection {
  title: string;
  description: string;
  material: string;
  gemstones: string;
  finish: string;
  craft: string;
  weight: string;
  dimensions: string;
  certification: string;
}

export interface CareInstruction {
  title: string;
  description: string;
}

export interface BuyNowSectionData {
  productName: string;
  price: string;
  rawPrice: number;
  currency: string;
  deliveryPromise: string;
  processingInfo: string;
  guarantees: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: string;
  rawPrice: number;
  folderPath: string;
  themeColor: string;
  gradient: string;
  material: string;
  gemstones: string;
  description: string;
  features: string[];
  stats: ProductStat[];
  storySections: StorySection[];
  craftsmanshipSection: {
    heading: string;
    subheading: string;
    features: CraftsmanshipFeature[];
  };
  detailsSection: ProductDetailsSection;
  careSection: CareInstruction[];
  buyNowSection: BuyNowSectionData;
}

export const signatureProduct: Product = {
  id: "signature-diamond",
  name: "Aurelia Signature",
  tagline: "Timeless. Brilliant. Unforgettable.",
  price: "₹1,25,000",
  rawPrice: 125000,
  folderPath: "/images/jewellery",
  themeColor: "#D4AF37",
  gradient: "linear-gradient(135deg, #120304 0%, #4A1015 50%, #D4AF37 100%)",
  material: "18K Solid Yellow & Rose Gold (750 Purity)",
  gemstones: "Natural VVS1 Rare Faceted Brilliant Diamonds",
  description:
    "An architectural masterpiece designed to capture the ethereal luminescence of timeless beauty. Cast in solid 18-karat gold with sculpted rose accents, the Aurelia Signature piece showcases meticulously handset brilliant diamonds engineered to catch and amplify light with every subtle movement.",
  features: [
    "18K Gold",
    "Precision Crafted",
    "Natural Diamonds",
    "Hand Finished",
  ],
  stats: [
    { label: "Carat Weight", value: "2.45 ct Total Weight" },
    { label: "Gold Purity", value: "18K Solid (750)" },
    { label: "Diamond Clarity", value: "VVS1 (D-E Color Grade)" },
    { label: "Certification", value: "IGI & SGL International" },
  ],
  storySections: [
    {
      progress: 0.10,
      tagline: "The Genesis of Elegance",
      headlineLine1: "CRAFTED",
      headlineLine2: "TO CAPTIVATE.",
      description: "Where precision engineering meets timeless organic beauty in a dance of light and shadow.",
      alignment: "left",
    },
    {
      progress: 0.30,
      tagline: "Artisanal Geometry",
      headlineLine1: "EVERY",
      headlineLine2: "FACET MATTERS.",
      description: "Designed with architectural precision. Hand-set and mirror-polished by world-class goldsmiths.",
      alignment: "right",
    },
    {
      progress: 0.60,
      tagline: "Luminous Brilliance",
      headlineLine1: "BRILLIANCE",
      headlineLine2: "IN EVERY DETAIL.",
      description: "Exceptional ethically sourced gemstones reflecting intense fire and everlasting scintillation.",
      alignment: "left",
    },
    {
      progress: 0.85,
      tagline: "An Everlasting Legacy",
      headlineLine1: "MADE TO",
      headlineLine2: "BECOME TIMELESS.",
      description: "A signature heirloom created to transcend generations and celebrate life's most profound moments.",
      alignment: "right",
    },
  ],
  craftsmanshipSection: {
    heading: "CRAFTED WITH PRECISION.",
    subheading:
      "From the first sketch to the final polish, every detail is shaped with patience, precision and purpose.",
    features: [
      {
        title: "Precision",
        subtitle: "Architectural Engineering",
        description:
          "Every curve, prong, and setting is engineered with micron-level tolerances for flawless balance and weightless wear.",
        iconName: "Compass",
      },
      {
        title: "Brilliance",
        subtitle: "Maximum Light Dispersion",
        description:
          "Selected gemstones are angled to capture, refract, and reflect light from every perspective, creating an unmistakable aura.",
        iconName: "Sparkles",
      },
      {
        title: "Craft",
        subtitle: "Haute Joaillerie Finish",
        description:
          "Finished by hand with microscopic attention to every contour, surface, and clasp for effortless velvet touch.",
        iconName: "Crown",
      },
    ],
  },
  detailsSection: {
    title: "THE SIGNATURE PIECE",
    description:
      "Sculpted with uncompromising mastery, the Aurelia Signature embodies the pinnacle of modern luxury jewellery. Handcrafted in our bespoke ateliers, it unites precious metals and radiant diamonds into an enduring work of art.",
    material: "18K Gold",
    gemstones: "Natural Diamonds",
    finish: "Hand Polished",
    craft: "Precision Handmade",
    weight: "14.8 grams",
    dimensions: "Bespoke Custom Fit (Adjustable Link System)",
    certification: "IGI / SGL Certified Diamond & BIS Hallmark 750",
  },
  careSection: [
    {
      title: "Storage",
      description: "Store in the provided suede-lined presentation casket away from direct humidity.",
    },
    {
      title: "Maintenance",
      description: "Complimentary ultrasonic spa cleaning and prong tightening once a year at any boutique.",
    },
    {
      title: "Authentication",
      description: "Includes an NFC-enabled digital authenticity card linked to the tamper-proof ledger.",
    },
  ],
  buyNowSection: {
    productName: "Aurelia Signature",
    price: "₹1,25,000",
    rawPrice: 125000,
    currency: "INR",
    deliveryPromise: "Complimentary insured delivery across India.",
    processingInfo: "Handcrafted and quality inspected before dispatch.",
    guarantees: [
      "Complimentary Delivery",
      "Secure Packaging",
      "Authenticity Certificate",
      "Easy Returns",
    ],
  },
};

export const allProducts: Product[] = [signatureProduct];
export default signatureProduct;
