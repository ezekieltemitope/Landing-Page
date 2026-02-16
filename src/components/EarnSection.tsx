// components/EarnSection.tsx
// =============================
import { motion } from "framer-motion";

export default function EarnSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
            Earn with your car
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-md">
            Take delivery jobs, set your price, get paid fast.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow transition"
          >
            Start Earning with Your Car
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <img
            src="/earn-car.png"
            alt="Driver loading packages into a car"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
