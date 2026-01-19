import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import dish1 from "../../assets/img/deshes1.png";
import dish2 from "../../assets/img/deshes2.png";

export default function SpecialDishes() {
  return (
    <section className="w-full bg-white py-32">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Title */}
        <div className="mb-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our <span className="text-[#ffb606]">special</span> deshes
          </h2>
          <p className="mt-3 text-sm italic text-gray-500">
            Beast kind form divide night above let moveth bearing darkness.
          </p>
        </div>

        {/* Item 01 */}
        <div className="flex flex-col md:flex-row items-center mb-32 md:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="flex items-center gap-6 mb-6">
              <span className="text-3xl font-bold text-gray-900">01.</span>
              <span className="h-px w-44 bg-black" />
            </div>

            <h3 className="text-3xl font-bold leading-tight mb-4">
              <span className="text-[#ffb606]">Garlic</span>
              <br />
              green beans
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Crisp green beans gently cooked with roasted garlic and premium
              olive oil, delivering a fresh and elegant flavor inspired by
              classic Mediterranean cuisine.
            </p>

            <p className="text-[#ffb606] text-xl font-semibold mb-6">$12.00</p>

            <button className="text-sm font-semibold tracking-wide flex items-center group cursor-pointer">
              BOOK A TABLE
              <HiArrowRight className="ml-3 text-xl transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#ffb606]" />
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img
              src={dish1}
              alt="Garlic green beans"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>

        {/* Item 02 */}
        <div className="flex flex-col md:flex-row items-center mb-16 md:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src={dish2}
              alt="Lemon rosemary chicken"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-6 mb-6">
              <span className="text-3xl font-bold text-gray-900">02.</span>
              <span className="h-px w-44 bg-black" />
            </div>

            <h3 className="text-3xl font-bold leading-tight mb-4">
              <span className="text-[#ffb606]">Lemon</span>
              <br />
              rosemary chicken
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Succulent chicken infused with zesty lemon and fragrant rosemary,
              carefully roasted to achieve a golden finish and a deeply
              satisfying taste.
            </p>

            <p className="text-[#ffb606] text-xl font-semibold mb-6">$12.00</p>

            <button className="text-sm font-semibold tracking-wide flex items-center group cursor-pointer">
              BOOK A TABLE
              <HiArrowRight className="ml-3 text-xl transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#ffb606]" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
