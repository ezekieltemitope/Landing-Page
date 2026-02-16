// components/MoveBiggerLoadsSection.tsx
// =============================
import { motion } from "framer-motion";

export default function MoveBiggerLoadsSection() {
  return (
    <section className="bg-offwhite px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
        >
          {/* Image */}
          <div className="p-8 md:p-10">
            <img
              src="/move-bigger-loads.png"
              alt="People loading larger items into a van"
              className="w-full h-auto rounded-xl object-cover"
            />

            {/* Text */}
            <div className="text-center mt-10">
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#0F172A]">
                Move Bigger Loads
              </h3>

              <p className="mt-4 text-gray-600 text-base md:text-lg">
                Turn your bus into a steady income machine.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-lg font-medium shadow transition"
              >
                List Your Bus
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
