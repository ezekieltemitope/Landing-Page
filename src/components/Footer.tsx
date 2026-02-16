// components/Footer.tsx
// =============================
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#06263A] text-white py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:opacity-80">
            Contact
          </a>
          <a href="#" className="hover:opacity-80">
            FAQ
          </a>
          <a href="#" className="hover:opacity-80">
            Terms and Conditions
          </a>
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
