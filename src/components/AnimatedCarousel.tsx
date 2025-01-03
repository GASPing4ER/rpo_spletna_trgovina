"use client";

import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCarouselProps } from "@/types";
import { useCartContext } from "@/hooks";
import { useTranslations } from "next-intl";
import Image from "next/image";

const variants = {
  enter: (direction: string) => ({
    x: direction === "left" ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: string) => ({
    x: direction === "left" ? -1000 : 1000,
    opacity: 0,
  }),
};

const AnimatedCarousel = ({
  products,
  initialIndex,
}: AnimatedCarouselProps) => {
  const t = useTranslations("Home");
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<string>("");
  const { handleAddProduct } = useCartContext();

  const handleNext = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex + 4) % products.length);
  };

  const handlePrev = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 < 0 ? products.length - 4 : prevIndex - 4
    );
  };

  return (
    <AnimatePresence initial={false} custom={direction} mode="popLayout">
      <motion.div
        key={currentIndex}
        className="flex gap-10 relative"
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
        custom={direction}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center items-center absolute top-[50%] -left-20">
          <button className="bg-gray-200 rounded-full p-2" onClick={handlePrev}>
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
        </div>
        {Array.from({ length: 4 }).map((_, index) => {
          const product = products[(currentIndex + index) % products.length];

          return (
            <div
              key={index}
              className="bg-[#F6F6F6] flex-1 h-[438px] flex flex-col items-center justify-between py-14 px-4 gap-4 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src="/images/product-placeholder.png"
                  alt="product"
                  width={246}
                  height={185}
                />
                <h3 className="text-center">
                  {product.name}, {product.description}
                </h3>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <p className="text-2xl font-bold">{product.price},00 €</p>
                <button
                  onClick={() => handleAddProduct(product)}
                  className="px-8 py-3 bg-[#4156D8] text-white rounded-[8px]"
                >
                  {t("add_button")}
                </button>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center items-center absolute top-[50%] -right-20">
          <button className="bg-gray-200 rounded-full p-2" onClick={handleNext}>
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedCarousel;
