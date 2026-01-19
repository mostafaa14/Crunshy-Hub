import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import bgImage from "../../assets/img/testimonial-bg.jpg";
import customer1 from "../../assets/img/customer1.png";
import customer2 from "../../assets/img/customer2.png";
import customer3 from "../../assets/img/customer1.png";

export default function FullBgSection() {
  return (
    <section
      className="relative w-full h-150 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col items-center">
        {/* Title + Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl px-4 pt-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Customer <span className="text-[#ffb606]">says</span>
          </h1>

          <p className="text-gray-200 leading-relaxed">
            Beast kind form divide night above let moveth bearing darkness.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="mt-20 w-full max-w-5xl px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            allowTouchMove={true}
            speed={800}
            className="testimonial-swiper"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide className="h-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg flex gap-4 h-full min-h-60">
                <div className="shrink-0">
                  <img
                    src={customer1}
                    alt="customer"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col h-full">
                  <h5 className="text-lg font-semibold text-gray-900">
                    Adam Nesane
                  </h5>
                  <span className="text-sm italic text-gray-500">
                    Chief Customer
                  </span>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    You're had. Subdue grass Meat us winged years you'll doesn't.
                    fruit two also won one yielding creepeth third give may never
                    lie alternet food.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className="h-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg flex gap-4 h-full min-h-60">
                <div className="shrink-0">
                  <img
                    src={customer2}
                    alt="customer"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col h-full">
                  <h5 className="text-lg font-semibold text-gray-900">
                    Sara William
                  </h5>
                  <span className="text-sm italic text-gray-500">
                    Regular Customer
                  </span>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    Amazing service and delicious food. Everything was fresh and
                    perfectly cooked. I will definitely come back again.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide className="h-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg flex gap-4 h-full min-h-60">
                <div className="shrink-0">
                  <img
                    src={customer3}
                    alt="customer"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col h-full">
                  <h5 className="text-lg font-semibold text-gray-900">
                    John Smith
                  </h5>
                  <span className="text-sm italic text-gray-500">
                    Food Blogger
                  </span>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    One of the best dining experiences I’ve had. Great flavors,
                    great atmosphere, and friendly staff.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
