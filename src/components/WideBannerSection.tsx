// components/WideBannerSection.tsx
// =============================
import { motion } from "framer-motion";

export default function WideBannerSection() {
  return (
    <section className="bg-slate-50 px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl"
        >
          <img
            src="/move-without-stress.png"
            alt="Van on the road"
            className="w-full h-75 md:h-120 object-cover"
          />

          {/* Soft dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-20 md:pb-24">
            <h3 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow">
              Move Your Goods Without Stress
            </h3>
            <p className="mt-3 text-white/90 text-sm md:text-base max-w-2xl drop-shadow">
              Book verified drivers, compare prices, and deliver with
              confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
