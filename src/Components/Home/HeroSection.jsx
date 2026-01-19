import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/img/banner-bg.jpg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative lg:h-screen lg:flex lg:items-center lg:justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 text-center">
        <div className="mx-auto max-w-prose">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            Welcome to <strong className="text-[#ffb606]">Crunchy Hub</strong>
            <br />
            Delicious & Crunchy Bites!
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-base text-gray-200 sm:text-lg/relaxed"
          >
            Discover our menu filled with mouth-watering dishes crafted with
            love. Whether you’re craving burgers, fries, or sweet treats,
            Crunshy Hub is your go-to spot.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex justify-center gap-4"
          >
            {/* Primary Button */}
            <a
              href="#menu"
              className="
                rounded-md
                border border-transparent
                bg-[#ffb606]
                px-6 py-3
                font-medium
                text-white
                transition-all duration-500
                hover:bg-transparent
                hover:text-[#ffb606]
                hover:border-[#ffb606]
              "
            >
              View Menu
            </a>

            {/* Secondary Button */}
            <a
              href="/about-us"
              className="
                rounded-md
                border border-[#ffb606]
                px-6 py-3
                font-medium
                text-[#ffb606]
                transition-all duration-500
                hover:bg-[#ffb606]
                hover:text-white
              "
            >
              About Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
