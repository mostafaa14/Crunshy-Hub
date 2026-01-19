import React from "react";
import { motion } from "framer-motion";
import { useArea } from "../../Hooks/useArea";
import Loading from "../Loading";
import { GiWorld } from "react-icons/gi";

export default function Area() {
  const { data, isLoading, error, isError } = useArea();

  if (isLoading) return <Loading />;

  if (isError)
    return <h1 className="text-center text-red-500">{error.message}</h1>;

  return (
    <section className="w-full py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-left"
        >
          <h2 className="text-3xl font-bold leading-relaxed">
            <span className="text-[#ffb606] italic">discover</span>
            <br />
            <span className="text-gray-900">food areas</span>
          </h2>
        </motion.div>

        {/* Area Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.meals?.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer border border-gray-100 transition-all duration-500"
            >
              {/* Icon Section */}
              <div className="flex items-center justify-center h-40 bg-gray-50 transition-colors duration-500 group-hover:bg-yellow-400">
                <GiWorld className="text-6xl text-[#ffb606] transition-colors duration-500 group-hover:text-black" />
              </div>

              {/* Content */}
              <div className="p-6 text-center transition-colors duration-500 group-hover:bg-yellow-400">
                <h3 className="text-xl font-bold text-gray-900 transition-colors duration-500 group-hover:text-black">
                  {area.strArea}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
