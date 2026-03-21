import { Twitter, Facebook, Linkedin, Music2 } from "lucide-react";

type FooterProps = {
  onOpenTerms: () => void;
  onOpenFaq: () => void;
};

export default function Footer({ onOpenTerms, onOpenFaq }: FooterProps) {
  return (
    <footer className="bg-[#01172C] text-white py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* LINKS */}
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

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6">
          <a
            href="https://x.com/loadrivo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5 hover:opacity-80 cursor-pointer" />
          </a>

          <a
            href="https://www.facebook.com/share/17NKtVFr8z/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5 hover:opacity-80 cursor-pointer" />
          </a>

          <a
            href="https://www.linkedin.com/company/loadrivo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 hover:opacity-80 cursor-pointer" />
          </a>

          <a
            href="https://www.tiktok.com/@loadrivo4?_r=1&_t=ZS-94REMkzcFhE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Music2 className="w-5 h-5 hover:opacity-80 cursor-pointer" />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-white/70">
          © 2022 Loadrivo. All right reserved
        </p>
      </div>
    </footer>
  );
}
