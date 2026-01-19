import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-3 items-start"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Crunchy <span className="text-[#ffb606]">Hub</span>
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed max-w-sm">
              Bite into happiness! Crunchy Hub brings you irresistible snacks,
              bold flavors, and crunchy moments you’ll never forget.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-gray-700">
              {["Home", "Menu", "About Us", "Contact Us"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-[#ffb606] transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Follow Us
            </h3>

            <div className="mt-4 flex items-center gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -4, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="
                      w-10 h-10 flex items-center justify-center
                      rounded-full border border-gray-300
                      text-gray-700 hover:text-black
                      hover:border-[#ffb606]
                    "
                  >
                    <Icon />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-gray-200 text-center"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Crunchy Hub. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
