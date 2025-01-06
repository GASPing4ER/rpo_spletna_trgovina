"use client";

import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCarouselProps } from "@/types";
import { useCartContext } from "@/hooks";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

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
          <button
            className="bg-onSurface rounded-full p-2"
            onClick={handlePrev}
          >
            <ArrowLeftIcon className="w-6 h-6 text-textPrimary" />
          </button>
        </div>
        {Array.from({ length: 4 }).map((_, index) => {
          const product = products[(currentIndex + index) % products.length];

          return (
            <div
              key={index}
              className="bg-onSurface flex-1 h-[438px] flex flex-col items-center justify-between py-14 px-4 gap-4 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col gap-2 items-center">
                <Link href="/products/[id]" as={`/products/${product.id}`}>
                  <Image
                    src={product.imgUrl}
                    alt={product.name}
                    width={200}
                    height={200}
                  />
                </Link>
                <h2 className="text-center text-textPrimary">{product.name}</h2>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h3 className="text-2xl font-bold text-textPrimary">
                  {product.price},00 €
                </h3>
                <button
                  onClick={() => handleAddProduct(product)}
                  className="px-8 py-3 bg-primary text-textOnPrimary rounded-[8px]"
                >
                  {t("add_button")}
                </button>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center items-center absolute top-[50%] -right-20">
          <button
            className="bg-onSurface rounded-full p-2"
            onClick={handleNext}
          >
            <ArrowRightIcon className="w-6 h-6 text-textPrimary" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedCarousel;
