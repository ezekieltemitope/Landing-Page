// components/Footer.tsx
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

type FooterProps = {
  onOpenTerms: () => void;
};

export default function Footer({ onOpenTerms }: FooterProps) {
  return (
    <footer className="bg-[#01172C] text-white py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Links */}
        <div className="flex justify-center gap-6 text-sm">
          <Link to="/faq" className="hover:opacity-80 transition">
            Contact
          </Link>

          <Link to="/faq" className="hover:opacity-80 transition">
            FAQ
          </Link>

          {/* ✅ Now opens modal instead of routing */}
          <button
            type="button"
            onClick={onOpenTerms}
            className="hover:opacity-80 transition"
          >
            Terms and Conditions
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <Instagram className="w-5 h-5 hover:opacity-80 cursor-pointer" />
          <Twitter className="w-5 h-5 hover:opacity-80 cursor-pointer" />
          <Facebook className="w-5 h-5 hover:opacity-80 cursor-pointer" />
          <Linkedin className="w-5 h-5 hover:opacity-80 cursor-pointer" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/70">
          © 2022 Loadrivo. All right reserved
        </p>
      </div>
    </footer>
  );
}
