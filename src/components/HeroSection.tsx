/* components/HeroSection.tsx */
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-[#06263A] text-white overflow-hidden pt-32">
      <div className="flex flex-col items-center justify-center text-center px-6 mt-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight"
        >
          Load It. Book It. Move It.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl"
        >
          Book verified drivers to pickup furniture, goods, and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-6 mt-10 flex-wrap justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-14 w-auto"
            />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-14 w-auto"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
