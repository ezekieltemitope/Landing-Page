// LandingPage.tsx
import { useState } from "react";
import TermsModal from "./components/TermsModal";
import FaqContactModal from "./components/FaqContactModal";

import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import EarnSection from "./components/EarnSection";
import MoveBiggerLoadsSection from "./components/MoveBiggerLoadsSection";
import DeliverMoreSection from "./components/DeliverMoreSection";
import QuickRunsSection from "./components/QuickRunsSection";
import WideBannerSection from "./components/WideBannerSection";
import MoveAnythingSection from "./components/MoveAnythingSection";
import Footer from "./components/Footer";

export default function LandingPage() {
  const [termsOpen, setTermsOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <Navbar onOpenFaq={() => setFaqOpen(true)} />

      {/* Main Sections */}
      <HeroSection />
      <EarnSection />
      <MoveBiggerLoadsSection />
      <DeliverMoreSection />
      <QuickRunsSection />
      <WideBannerSection />
      <MoveAnythingSection />

      {/* Footer */}
      <Footer
        onOpenTerms={() => setTermsOpen(true)}
        onOpenFaq={() => setFaqOpen(true)}
      />

      {/* Modals */}
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />

      <FaqContactModal open={faqOpen} onClose={() => setFaqOpen(false)} />
    </div>
  );
}
