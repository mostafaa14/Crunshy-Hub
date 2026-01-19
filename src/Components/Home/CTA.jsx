import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/img/welcome-bg.png";

export default function CTA() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: -1,
            }}
            className="flex justify-center lg:justify-start"
          >
            <motion.img
              src={img}
              alt="Delicious Snacks"
              className="max-w-full rounded-xl"
              whileHover={{
                boxShadow: "0px 25px 50px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-prose"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg font-semibold italic text-[#ffb606]"
            >
              Bite into
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-2 text-4xl font-bold leading-tight text-gray-900"
            >
              Crunchy Hub
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 text-gray-700 leading-relaxed"
            >
              Experience the ultimate snack adventure! From crispy bites to bold
              flavors, Crunchy Hub serves up treats that make your taste buds
              dance and every moment unforgettable.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-4 text-gray-700 leading-relaxed"
            >
              Join our snack revolution and discover mouthwatering delights daily.
              Crunchy Hub is your go-to destination for fun, flavor, and pure
              crunch happiness!
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="mt-8 inline-block bg-[#ffb606] px-8 py-3 font-semibold text-black transition border border-[#ffb606] hover:bg-transparent cursor-pointer duration-500"
            >
              RESERVE YOUR SPOT
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
