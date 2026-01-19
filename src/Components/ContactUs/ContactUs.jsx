import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight, HiMail } from "react-icons/hi";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const contactMethods = [
  {
    title: "Email Us",
    description: "Reach out via email for any inquiries.",
    icon: <HiMail className="w-6 h-6 text-white" />,
    info: "contact@company.com",
    bgColor: "bg-yellow-400",
  },
  {
    title: "Call Us",
    description: "We are available via phone 24/7.",
    icon: <FaPhoneAlt className="w-6 h-6 text-white" />,
    info: "+20 123 456 789",
    bgColor: "bg-green-400",
  },
  {
    title: "Visit Us",
    description: "Come to our office at any time.",
    icon: <FaMapMarkerAlt className="w-6 h-6 text-white" />,
    info: "123 Street, City, Egypt",
    bgColor: "bg-blue-400",
  },
];

export default function ContactUs() {
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
            Get in <span className="text-[#ffb606]">touch</span> with us
          </motion.h2>

          <motion.p
            className="mt-4 mx-auto max-w-md text-gray-600 leading-relaxed italic"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions or want to work with us? Reach out through any of the options below.
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              viewport={{ once: true }}
              className={`group rounded-xl overflow-hidden shadow-lg cursor-pointer border border-gray-100 transition-all duration-500`}
            >
              {/* Icon */}
              <div className={`${method.bgColor} flex items-center justify-center h-24 w-full`}>
                {method.icon}
              </div>

              {/* Info */}
              <div className="p-6 transition-colors duration-500 group-hover:bg-gray-100">
                <h3 className="text-xl font-bold mb-2 transition-colors duration-500 group-hover:text-black">
                  {method.title}
                </h3>
                <p className="text-gray-700 mb-4 transition-colors duration-500 group-hover:text-black">
                  {method.description}
                </p>
                <p className="text-gray-900 font-semibold">{method.info}</p>

                {/* Action */}
                <div className="flex items-center gap-2 mt-4 font-semibold text-black group cursor-pointer">
                  <span>Contact Now</span>
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
