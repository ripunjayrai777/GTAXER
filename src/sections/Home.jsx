"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-r from-orange-500 via-red-600 to-gray-900 text-gray-100"
    >
      {/* Background floating circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

      {/* Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-600"
      >
        Welcome to GTAXER
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl max-w-2xl text-gray-200"
      >
        We build modern <span className="font-semibold text-orange-300">websites</span>,{" "}
        <span className="font-semibold text-yellow-300">apps</span>, and{" "}
        <span className="font-semibold text-red-300">digital experiences</span> to
        grow your business.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#services"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-orange-400/50 hover:scale-105 transition transform"
      >
        🚀 Explore Services
      </motion.a>

      {/* Optional scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 text-gray-300 animate-bounce"
      >
        ↓ Scroll Down
      </motion.div>
    </section>
  );
}
