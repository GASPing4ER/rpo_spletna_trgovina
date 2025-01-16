"use client";

import React, { useState, useEffect } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCarouselProps } from "@/types";
import { useCartContext } from "@/hooks";
import { useLocale, useTranslations } from "next-intl";
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

const getProductsToShow = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1224) return 4; // Large screens
    if (window.innerWidth >= 768) return 2; // Medium screens
    return 1; // Small screens
  }
  return 4; // Default to 4 for SSR
};

const AnimatedCarousel = ({
  products,
  initialIndex,
}: AnimatedCarouselProps) => {
  const t = useTranslations("Home");
  const locale: string = useLocale();

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<string>("");
  const { handleAddProduct } = useCartContext();
  const [productsToShow, setProductsToShow] = useState(getProductsToShow);

  useEffect(() => {
    const handleResize = () => setProductsToShow(getProductsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex + productsToShow) % products.length
    );
  };

  const handlePrev = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex - productsToShow < 0
        ? products.length - productsToShow
        : prevIndex - productsToShow
    );
  };

  return (
    <AnimatePresence initial={false} custom={direction} mode="popLayout">
      <motion.div
        key={currentIndex}
        className="w-full flex gap-4 sm:gap-6 md:gap-8 justify-center relative"
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
        custom={direction}
        transition={{ duration: 0.5 }}
      >
        {/* Left Navigation */}
        <div className="absolute top-[50%] -translate-y-1/2 -left-12 z-10">
          <button
            className="bg-onSurface rounded-full p-2 shadow-md sm:shadow-none"
            onClick={handlePrev}
          >
            <ArrowLeftIcon className="w-6 h-6 text-textPrimary" />
          </button>
        </div>

        {/* Product Cards */}
        {Array.from({ length: productsToShow }).map((_, index) => {
          const product = products[(currentIndex + index) % products.length];

          return (
            <div
              key={index}
              className="bg-onSurface w-full md:w-[45%] lg:flex-1 h-[350px] flex flex-col items-center justify-between py-4 sm:py-6 px-2 sm:px-4 gap-2 sm:gap-4 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col gap-2 items-center">
                <Link href="/products/[id]" as={`/products/${product.id}`}>
                  <Image
                    src={product.imgUrl}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] object-cover"
                  />
                </Link>
                <h2 className="text-center text-sm text-textPrimary">
                  {locale === "en" ? product.name_en : product.name}
                </h2>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h3 className="text-lg sm:text-xl font-bold text-textPrimary">
                  {product.price},00 €
                </h3>
                <button
                  onClick={() => handleAddProduct(product)}
                  className="px-6 py-2 sm:px-8 sm:py-3 bg-primary text-textOnPrimary rounded-[8px] text-sm sm:text-base"
                >
                  {t("add_button")}
                </button>
              </div>
            </div>
          );
        })}

        {/* Right Navigation */}
        <div className="absolute top-[50%] -translate-y-1/2 -right-12 z-10">
          <button
            className="bg-onSurface rounded-full p-2 shadow-md sm:shadow-none"
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
