import Navbar from "@/components/Navbar";
import JewelleryScroll from "@/components/JewelleryScroll";
import CollectionSection from "@/components/CollectionSection";
import ProductDetails from "@/components/ProductDetails";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import BuyNowSection from "@/components/BuyNowSection";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { signatureProduct } from "@/data/products";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-jewellery-black text-white selection:bg-luxury-gold/30 selection:text-white">
      {/* Global Luxury Navigation */}
      <Navbar />

      <div className="relative w-full">
        {/* 1. Cinematic 500vh Sticky Scroll Hero Experience */}
        <JewelleryScroll
          totalFrames={120}
          folderPath={signatureProduct.folderPath}
        />

        {/* 2. Haute Joaillerie Signature Collection Gallery */}
        <CollectionSection />

        {/* 3. Haute Joaillerie Product Information & Specification */}
        <ProductDetails />

        {/* 4. Investment Grade Heirlooms & Bullion Standards */}
        <CraftsmanshipSection />

        {/* 5. Atelier Acquisition & Guarantee Section */}
        <BuyNowSection />

        {/* 6. Cinematic Slanted Final CTA */}
        <FinalCTA />

        {/* 7. Luxury Private Salon & Concierge Contact Form */}
        <ContactSection />
      </div>

      {/* 8. Luxury 4-Column Footer */}
      <Footer />
    </main>
  );
}