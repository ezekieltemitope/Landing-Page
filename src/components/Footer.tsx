import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

type FooterProps = {
  onOpenTerms: () => void;
  onOpenFaq: () => void;
};

export default function Footer({ onOpenTerms, onOpenFaq }: FooterProps) {
  return (
    <footer className="bg-[#01172C] text-white py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <div className="flex justify-center gap-6 text-sm">
          <button
            type="button"
            onClick={onOpenFaq}
            className="hover:opacity-80 transition"
          >
            Contact
          </button>

          <button
            type="button"
            onClick={onOpenFaq}
            className="hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-white/40 rounded"
          >
            FAQ
          </button>

          <button
            type="button"
            onClick={onOpenTerms}
            className="hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-white/40 rounded"
          >
            Terms and Conditions
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <Instagram className="w-5 h-5 hover:opacity-80 cursor-pointer" />
          <Twitter className="w-5 h-5 hover:opacity-80 cursor-pointer" />
          <Facebook className="w-5 h-5 hover:opacity-80 cursor-pointer" />
          <Linkedin className="w-5 h-5 hover:opacity-80 cursor-pointer" />
        </div>

        <p className="text-xs text-white/70">
          © 2022 Loadrivo. All right reserved
        </p>
      </div>
    </footer>
  );
}
