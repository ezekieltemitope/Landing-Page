/* components/Navbar.tsx */
import { motion } from "framer-motion";

export default function Navbar() {
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
        <a href="#contact" className="hover:opacity-80 transition">
          Contact
        </a>
        <a href="#faq" className="hover:opacity-80 transition">
          FAQ
        </a>
      </div>
    </motion.nav>
  );
}
