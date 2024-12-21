"use client";

import React from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "../utils/lang/locale";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const LanguageSelector = () => {
  const [isPending, startTransition] = useTransition();
  const locale: string = useLocale();
  const t = useTranslations("Header");

  const onlanguagechange = (value: string) => {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

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
        <p className="text-sm font-medium text-gray-600 mb-1">
          {t("lang_select_title")}
        </p>
        <div className="flex flex-col gap-2">
          <button
            disabled={isPending}
            onClick={() => onlanguagechange("en")}
            className={`text-sm py-2 px-4 rounded-md w-full text-left ${
              locale === "en" ? "bg-[#4156D8] text-white" : "hover:bg-[#e5e5e5]"
            }`}
          >
            {t("eng")}
          </button>
          <button
            disabled={isPending}
            onClick={() => onlanguagechange("sl")}
            className={`text-sm py-2 px-4 rounded-md w-full text-left ${
              locale === "sl" ? "bg-[#4156D8] text-white" : "hover:bg-[#e5e5e5]"
            }`}
          >
            {t("slo")}
          </button>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default LanguageSelector;
