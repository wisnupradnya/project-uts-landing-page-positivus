// components/TestimonialSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
  },
  {
    name: "Jane Doe",
    position: "CEO of ABC Inc",
    text: "Great experience with Positivus, their team was amazing!",
  },
  {
    name: "Alex Johnson",
    position: "CTO at Tech Solutions",
    text: "Positivus helped us scale our online presence quickly and efficiently.",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="bg-[#131313] py-10 px-4 rounded-3xl">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="border rounded-2xl p-6 border-lime-400 text-white h-full flex flex-col justify-between">
              <p className="text-sm mb-4">{item.text}</p>
              <div>
                <p className="font-bold text-lime-400">{item.name}</p>
                <p className="text-sm text-gray-300">{item.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
