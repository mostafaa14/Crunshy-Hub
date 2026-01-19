import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/img/food1.jpg";
import img2 from "../../assets/img/food2.jpg";
import img3 from "../../assets/img/food3.jpg";
import img4 from "../../assets/img/food4.jpg";
import img5 from "../../assets/img/food5.jpg";
import img6 from "../../assets/img/food6.jpg";
import bgImage from "../../assets/img/food-bg.png";

const menuItems = [
  {
    id: 1,
    name: "Mexican Eggrolls",
    price: "$14.50",
    img: img1,
    description:
      "Crispy eggrolls stuffed with spicy Mexican veggies and cheese.",
  },
  {
    id: 2,
    name: "Chicken Burger",
    price: "$9.50",
    img: img2,
    description:
      "Juicy grilled chicken burger with fresh lettuce, tomato, and our special sauce.",
  },
  {
    id: 3,
    name: "Topu Lasange",
    price: "$12.50",
    img: img3,
    description:
      "Layers of pasta, meat, and rich tomato sauce baked to perfection.",
  },
  {
    id: 4,
    name: "Pepper Potatoes",
    price: "$14.50",
    img: img4,
    description: "Crispy potatoes tossed with black pepper and herbs.",
  },
  {
    id: 5,
    name: "Bean Salad",
    price: "$8.50",
    img: img5,
    description:
      "A refreshing mix of beans, fresh veggies, and tangy dressing.",
  },
  {
    id: 6,
    name: "Meatball Hoagie",
    price: "$11.50",
    img: img6,
    description:
      "Soft hoagie bread filled with savory meatballs and marinara sauce.",
  },
];

export default function MenuSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden" style={{backgroundImage:`url(${bgImage})`,backgroundPosition:"right top",backgroundRepeat:"no-repeat"}}>
      <div className="relative mx-auto px-4 max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-left"
        >
          <motion.h2
            className="text-3xl font-bold leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#ffb606] italic">we serve</span>
            <br />
            <span className="text-gray-900 font-bold">delicious food</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            They're fill divide i their yielding our after have him fish on
            there for greater man moveth, moved Won't together isn't for fly
            divide mids fish firmament on net.
          </motion.p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer border border-gray-100 transition-all duration-500"
            >
              <motion.img
                src={item.img}
                alt={item.name}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-6 transition-colors duration-500 group-hover:bg-yellow-400">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold transition-colors duration-500 group-hover:text-black">
                    {item.name}
                  </h3>
                  <p className="font-semibold text-[#ffb606] transition-colors duration-500 group-hover:text-black">
                    {item.price}
                  </p>
                </div>

                <p className="text-gray-700 transition-colors duration-500 group-hover:text-black">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
