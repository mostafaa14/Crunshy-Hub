import React from "react";
import { motion } from "framer-motion";
import { useCategories } from "../../Hooks/useCategories";
import Loading from "../Loading";

export default function Categories() {
  const { data, isLoading, error, isError } = useCategories();

  if (isLoading) return <Loading />;
  if (isError)
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-gray-100 shadow-lg rounded-xl p-10 text-center max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Oops!
        </h2>

        <p className="text-gray-600 mb-6">
          Something went wrong while loading categories.
        </p>

        <p className="text-sm wrap-break-words">
          {error.message}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-8 inline-block rounded-full bg-[#ffb606] border border-[#ffb606] px-8 py-3 font-semibold text-black transition duration-500 hover:bg-transparent"
        >
          Try Again
        </button>
      </motion.div>
    </section>
  );


  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="relative mx-auto px-4 max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-left"
        >
          <h2 className="text-3xl font-bold leading-relaxed">
            <span className="text-[#ffb606] italic">our</span>
            <br />
            <span className="text-gray-900">food categories</span>
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {data?.categories?.map((category, index) => (
            <motion.div
              key={category.idCategory}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer border border-gray-100 transition-all duration-500"
            >
              {/* Image */}
              <motion.img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Content */}
              <div className="p-6 transition-colors duration-500 group-hover:bg-yellow-400 h-full">
                <h3 className="mb-2 text-xl font-bold transition-colors duration-500 group-hover:text-black">
                  {category.strCategory}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 transition-colors duration-500 group-hover:text-black">
                  {category.strCategoryDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
