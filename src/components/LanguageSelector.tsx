"use client";

import React, { useState } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import Image from "next/image";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("slo");

  return (
    <Menu as="div" className="relative">
      <MenuButton className="relative py-1.5 px-1.5 text-center text-sm font-semibold text-gray-700 focus:outline-none">
        <Image
          src="/icons/slovene-flag.svg"
          alt="slovene language"
          width={24}
          height={24}
        />
      </MenuButton>
      <MenuItems className="absolute right-0 top-full bg-[#F6F6F6] mt-2 p-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <p className="text-sm font-medium text-gray-600 mb-1">Izberi jezik</p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setSelectedLanguage("eng")}
            className={`text-sm py-2 px-4 rounded-md w-full text-left ${
              selectedLanguage === "eng"
                ? "bg-[#4156D8] text-white"
                : "hover:bg-[#e5e5e5]"
            }`}
          >
            angleščina
          </button>
          <button
            onClick={() => setSelectedLanguage("slo")}
            className={`text-sm py-2 px-4 rounded-md w-full text-left ${
              selectedLanguage === "slo"
                ? "bg-[#4156D8] text-white"
                : "hover:bg-[#e5e5e5]"
            }`}
          >
            slovenščina
          </button>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default LanguageSelector;
