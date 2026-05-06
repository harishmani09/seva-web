"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/Guruji2.png",
    title: "Seva Foundation",
    text: "स्वस्थ शरीर स्वस्थ समाज।",
  },
  {
    image: "/images/slider3.jpg",
    title: "Seva Foundation",
    text: "चलो जलायें दीप वहाँ, जहाँ अभी भी अंधेरा है।",
  },
  {
    image: "/images/slider4.jpeg",
    title: "Seva Foundation",
    text: "आपके कारण किसी के जीवन में मुस्कुराहट आ जाये।",
  },
  {
    image: "/images/slide7.jpg",
    title: "Seva Foundation",
    text: "Spirituality, Consciousness, Courage & Strength for Everyone, Everywhere.",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative h-[92vh] bg-cover bg-center flex items-end"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text */}
              <div className="relative z-10 w-full max-w-4xl px-8 pb-24 md:px-16 md:pb-28">
                <p className="text-saffron-400 text-sm font-semibold uppercase tracking-widest mb-2">
                  {slide.title}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg max-w-2xl">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
