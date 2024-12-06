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
          {Array.from({ length: 6 }).map((_, index) => {
            const category =
              categories[(currentIndex + index) % categories.length];

            return (
              <motion.li
                key={category.slug}
                className="flex-1 flex flex-col items-center justify-center h-[128px] bg-white rounded-[15px]"
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                custom={"left"}
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
