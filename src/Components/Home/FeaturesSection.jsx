import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FaRegUser, FaRegCalendar } from "react-icons/fa";
import img1 from "../../assets/img/update1.jpg";
import img2 from "../../assets/img/update2.jpg";
import img3 from "../../assets/img/update3.jpg";

const features = [
  {
    title: "High performance",
    description: "Lightning-quick load times optimized for every device",
    img: img1,
    author: "Admin",
    date: "Jan 15, 2026",
  },
  {
    title: "Enterprise security",
    description: "Enterprise-grade security built into every layer",
    img: img2,
    author: "Admin",
    date: "Jan 10, 2026",
  },
  {
    title: "Highly configurable",
    description: "Adapt every aspect to match your brand and needs",
    img: img3,
    author: "Admin",
    date: "Jan 12, 2026",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="relative mx-auto px-4 max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.h2
            className="text-3xl font-bold leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-[#ffb606]">food</span> update
          </motion.h2>

          <motion.p
            className="mt-4 mx-auto max-w-md text-gray-600 leading-relaxed italic"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Latest posts and updates about our menu and services.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer border border-gray-100 transition-all duration-500"
            >
              {/* Image */}
              <motion.img
                src={feature.img}
                alt={feature.title}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Author & Date */}
              <div className="flex justify-between px-6 py-2 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <FaRegUser className="w-4 h-4" />
                  {feature.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegCalendar className="w-4 h-4" />
                  {feature.date}
                </span>
              </div>

              {/* Title & Description */}
              <div className="p-6 transition-colors duration-500 group-hover:bg-yellow-400">
                <h3 className="text-xl font-bold mb-2 transition-colors duration-500 group-hover:text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mb-4 transition-colors duration-500 group-hover:text-black">
                  {feature.description}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 font-semibold text-black group">
                  <span>Read More</span>
                  <HiArrowRight className="w-5 h-5 text-black transform transition-all duration-500 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
