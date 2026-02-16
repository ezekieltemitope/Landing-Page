// components/MoveAnythingSection.tsx
// =============================
import { motion } from "framer-motion";

export default function MoveAnythingSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Image (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/move-anything.png"
            alt="Woman with delivery boxes"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Text (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
            Move Anything,
            <br />
            Anytime
          </h3>

          <p className="mt-5 text-gray-600 text-base md:text-lg max-w-md">
            Book verified drivers and track your delivery in real time.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-lg font-medium shadow transition"
          >
            Book a Driver Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
