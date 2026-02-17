// LandingPage.tsx
import { useState } from "react";
import TermsModal from "./components/TermsModal";
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

  return (
    <>
      <Navbar />

      <HeroSection />
      <EarnSection />
      <MoveBiggerLoadsSection />
      <DeliverMoreSection />
      <QuickRunsSection />
      <WideBannerSection />
      <MoveAnythingSection />

      {/* Footer opens Terms modal */}
      <Footer onOpenTerms={() => setTermsOpen(true)} />

      {/* Overlay modal */}
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
}
