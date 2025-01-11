"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRightIcon,
  Laptop,
  Smartphone,
  Headset,
  Watch,
  Tablet,
  Keyboard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCategoryProps } from "@/types";
import { useTranslations, useLocale } from "next-intl";
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

const getCategoriesToShow = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1024) return 6; // Large screens
    if (window.innerWidth >= 768) return 4; // Medium screens
    if (window.innerWidth >= 640) return 2; // Medium screens
    return 1; // Small screens
  }
  return 6; // Default to 6 for SSR
};

const AnimatedCategory = ({
  categories,
  initialIndex,
}: AnimatedCategoryProps) => {
  const t = useTranslations("Home");
  const locale: string = useLocale();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [categoriesToShow, setCategoriesToShow] = useState(getCategoriesToShow);

  useEffect(() => {
    const handleResize = () => setCategoriesToShow(getCategoriesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categoryCount = categories.length;

  const visibleCategories = Array.from({ length: categoriesToShow }).map(
    (_, index) => {
      const categoryIndex = (currentIndex + index) % categoryCount;
      return categories[categoryIndex];
    }
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-2xl text-textPrimary">{t("category_title")}</h2>
        <button onClick={handleNext}>
          <ArrowRightIcon className="text-textPrimary" />
        </button>
      </div>
      <ul className="flex gap-8">
        <AnimatePresence initial={false} custom={"left"} mode="popLayout">
          {visibleCategories.map((category, index) => {
            const isFirst = index === 0;
            const isLast = index === categoriesToShow - 1;

            return (
              <motion.li
                key={`${category.slug}-${index}`}
                className="flex-1 flex flex-col items-center justify-center h-[128px] bg-onBackground rounded-[15px]"
                initial={isLast ? "enter" : undefined}
                animate="center"
                exit={isFirst ? "exit" : undefined}
                variants={variants}
                custom="left"
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={category.slug}
                  className="flex flex-col items-center gap-1"
                >
                  {category.slugId === "racunalniki" ? (
                    <Laptop className="w-6 h-6 text-iconColor" />
                  ) : category.slugId === "telefoni" ? (
                    <Smartphone className="w-6 h-6 text-iconColor" />
                  ) : category.slugId === "slusalke" ? (
                    <Headset className="w-6 h-6 text-iconColor" />
                  ) : category.slugId === "pametne-ure" ? (
                    <Watch className="w-6 h-6 text-iconColor" />
                  ) : category.slugId === "tablice" ? (
                    <Tablet className="w-6 h-6 text-iconColor" />
                  ) : (
                    <Keyboard className="w-6 h-6 text-iconColor" />
                  )}
                  <h3 className="text-textPrimary">
                    {locale === "sl" ? category.sl_title : category.en_title}
                  </h3>
                </Link>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </>
  );
};

export default AnimatedCategory;
