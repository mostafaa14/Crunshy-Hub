import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">

        {/* Burger */}
        <div className="relative w-24 h-24 flex items-center justify-center">

          {/* Top Bun */}
          <motion.div
            className="absolute top-2 w-20 h-4 rounded-full bg-[#ffb606]"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Lettuce */}
          <motion.div
            className="absolute top-8 w-20 h-2 rounded-full bg-green-500"
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Cheese */}
          <motion.div
            className="absolute top-11 w-20 h-2 rounded-full bg-yellow-300"
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Patty */}
          <motion.div
            className="absolute top-14 w-20 h-3 rounded-full bg-amber-800"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Bottom Bun */}
          <motion.div
            className="absolute top-18 w-20 h-3 rounded-full bg-[#ffb606]"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Brand */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-gray-900"
        >
          Crunchy <span className="text-[#ffb606]">Hub</span>
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-600 tracking-wide"
        >
          Cooking something crunchy...
        </motion.p>
      </div>
    </div>
  );
}
