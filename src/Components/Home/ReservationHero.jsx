import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/img/reservation-bg.jpg";

export default function ReservationHero() {
  return (
    <section
      className="relative w-full h-110 bg-center bg-cover flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 max-w-xl"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-4xl font-bold mb-4"
        >
          Natural ingredients and testy food
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          viewport={{ once: true }}
          className="text-gray-200 italic mb-8"
        >
          Some Trendy And Popular Courses Offered
        </motion.p>

        {/* Button (نفس CTA بالظبط) */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="
            inline-block
            bg-[#ffb606]
            px-8
            py-3
            font-semibold
            text-black
            border
            border-[#ffb606]
            transition
            duration-500
            hover:bg-transparent
            hover:text-[#ffb606]
            cursor-pointer
          "
        >
          RESERVATION
        </motion.button>
      </motion.div>
    </section>
  );
}
