import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg">

        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-7xl font-extrabold text-[#ffb606]"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-3xl font-bold text-gray-900"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-600 leading-relaxed"
        >
          Looks like this page got lost in the kitchen 🍔  
          The page you are looking for doesn’t exist or was moved.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="
              inline-block rounded-md
              bg-[#ffb606] px-8 py-3
              font-semibold text-black
              transition duration-300
              hover:bg-transparent hover:text-[#ffb606]
              border border-[#ffb606]
            "
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
