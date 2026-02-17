/* components/Navbar.tsx */
import { motion } from "framer-motion";

type NavbarProps = {
  onOpenFaq: () => void;
};

export default function Navbar({ onOpenFaq }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-[#01172C] text-white"
    >
      <div className="flex items-center gap-3">
        <img
          src="/LOGO3.png"
          alt="Loadrivo logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-lg font-semibold">Loadrivo</span>
      </div>

      <div className="flex gap-8 text-sm">
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
          className="hover:opacity-80 transition"
        >
          FAQ
        </button>
      </div>
    </motion.nav>
  );
}
