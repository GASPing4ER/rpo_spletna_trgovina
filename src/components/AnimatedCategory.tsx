"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCategoryProps } from "@/types";

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

const AnimatedCategory = ({
  categories,
  initialIndex,
}: AnimatedCategoryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const visibleLength = 6;
  const categoryCount = categories.length;

  const visibleCategories = Array.from({ length: visibleLength }).map(
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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Išči po kategoriji</h2>
        <button onClick={handleNext}>
          <ArrowRightIcon />
        </button>
      </div>
      <ul className="flex gap-8">
        <AnimatePresence initial={false} custom={"left"} mode="popLayout">
          {visibleCategories.map((category, index) => {
            const isFirst = index === 0;
            const isLast = index === visibleLength - 1;

            return (
              <motion.li
                key={`${category.slug}-${index}`}
                className="flex-1 flex flex-col items-center justify-center h-[128px] bg-white rounded-[15px]"
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
                  <Image
                    src={category.iconUrl}
                    alt="kategorija"
                    width={25}
                    height={25}
                  />
                  <h3>{category.title}</h3>
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
