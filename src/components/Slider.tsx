"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    img: "/banner01.jpg",
    url: "/",
  },
  {
    id: 2,
    img: "/banner02.png",
    url: "/",
  },
  {
    id: 3,
    img: "/banner03.png",
    url: "/",
  },
  {
    id: 4,
    img: "/banner04.png",
    url: "/",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
      {/* Slajdovi */}
      <AnimatePresence mode="wait">
        <motion.a
          key={slides[current].id}
          href={slides[current].url}
          className="absolute w-full h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={slides[current].img}
            alt={`Slide ${slides[current].id}`}
            layout="fill"
            objectFit="contain"
          />
        </motion.a>
      </AnimatePresence>

      {/* Dugmad za prebacivanje */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-lama text-zinc-100 p-3 rounded-full opacity-75 hover:opacity-100"
        onClick={prevSlide}
      >
        ⬅
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-lama text-zinc-100 p-3 rounded-full opacity-75 hover:opacity-100"
        onClick={nextSlide}
      >
        ➡
      </button>

      {/* Indikatori */}
      <div className="absolute left-1/2 bottom-8 flex gap-4 transform -translate-x-1/2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-transform ${
              current === index
                ? "scale-150 ring-2 ring-zinc-300 bg-lama bg-opacity-80"
                : "bg-zinc-500 bg-opacity-50 ring-1 ring-zinc-200"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
