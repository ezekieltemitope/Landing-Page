// components/QuickRunsSection.tsx
// =============================
import { motion } from "framer-motion";

export default function QuickRunsSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Text (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
            Quick Runs,
            <br />
            Fast Cash
          </h3>

          <p className="mt-5 text-gray-600 text-base md:text-lg max-w-md">
            Handle small deliveries and earn on your schedule.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-lg font-medium shadow transition"
          >
            Start Taking Jobs
          </motion.button>
        </motion.div>

        {/* Image (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:pl-4"
        >
          <img
            src="/quick-runs.png"
            alt="Courier handing over a package"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
