"use client";

import React from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "../utils/lang/locale";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const LanguageSelector = () => {
  const [isPending, startTransition] = useTransition();
  const locale: string = useLocale();
  const t = useTranslations("Header");

  const onLanguageChange = (value: string) => {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Menu as="div" className="relative">
            <MenuButton className="relative py-1.5 px-1.5 text-sm font-semibold text-textSecondary focus:outline-none">
              <Image
                src="/icons/slovene-flag.svg"
                alt="Select language"
                width={24}
                height={24}
              />
            </MenuButton>
            <MenuItems className="absolute right-0 top-full bg-surface w-36 mt-2 p-2 rounded-md shadow-lg focus:outline-none z-50">
              <p className="text-sm font-medium text-textSecondary mb-1">
                {t("lang_select_title")}
              </p>
              <div className="flex flex-col gap-2">
                <button
                  disabled={isPending}
                  onClick={() => onLanguageChange("en")}
                  className={`text-sm py-2 px-4 rounded-md w-full text-left ${
                    locale === "en"
                      ? "bg-primary text-textOnPrimary"
                      : "text-textPrimary hover:text-primary"
                  }`}
                >
                  {t("eng")}
                </button>
                <button
                  disabled={isPending}
                  onClick={() => onLanguageChange("sl")}
                  className={`text-sm py-2 px-4 rounded-md w-full text-left ${
                    locale === "sl"
                      ? "bg-primary text-textOnPrimary"
                      : "text-textPrimary hover:text-primary"
                  }`}
                >
                  {t("slo")}
                </button>
              </div>
            </MenuItems>
          </Menu>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("lang_select_title")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LanguageSelector;
