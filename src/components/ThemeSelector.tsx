"use client";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { SunMoon } from "lucide-react";

const ThemeSelector = () => {
  const t = useTranslations("Header");
  const { theme, setTheme } = useTheme();

  return (
    <Menu as="div" className="relative">
      <MenuButton className="relative py-1.5 px-1.5 text-sm font-semibold text-textSecondary focus:outline-none">
        <SunMoon className="h-6 w-6 text-iconColor" />
      </MenuButton>
      <MenuItems className="absolute flex flex-col right-0 top-full bg-surface mt-2 p-2 w-36 rounded-md shadow-lg focus:outline-none z-50">
        <p className="text-sm font-medium text-textSecondary mb-1">
          {t("theme_select_title")}
        </p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setTheme("default")}
            className={`text-sm py-2 px-2 rounded-md w-full text-left ${
              theme === "default"
                ? "bg-primary text-textOnPrimary"
                : "text-textPrimary hover:text-primary"
            }`}
          >
            {t("default")}
          </button>
          <button
            onClick={() => setTheme("whiteOnBlack")}
            className={`text-sm py-2 px-2 rounded-md w-full text-left ${
              theme === "whiteOnBlack"
                ? "bg-primary text-textOnPrimary"
                : "text-textPrimary hover:text-primary"
            }`}
          >
            {t("whiteOnBlack")}
          </button>
          <button
            onClick={() => setTheme("blackOnWhite")}
            className={`text-sm py-2 px-2 rounded-md w-full text-left ${
              theme === "blackOnWhite"
                ? "bg-primary text-textOnPrimary"
                : "text-textPrimary hover:text-primary"
            }`}
          >
            {t("blackOnWhite")}
          </button>
          <button
            onClick={() => setTheme("yellowOnBlue")}
            className={`text-sm py-2 px-2 rounded-md w-full text-left ${
              theme === "yellowOnBlue"
                ? "bg-primary text-textOnPrimary"
                : "text-textPrimary hover:text-primary"
            }`}
          >
            {t("yellowOnBlue")}
          </button>
          <button
            onClick={() => setTheme("blackOnBeige")}
            className={`text-sm py-2 px-2 rounded-md w-full text-left ${
              theme === "blackOnBeige"
                ? "bg-primary text-textOnPrimary"
                : "text-textPrimary hover:text-primary"
            }`}
          >
            {t("blackOnBeige")}
          </button>
          <button
            onClick={() => setTheme("greenOnBlack")}
            className={`text-sm py-2 px-2 rounded-md w-full text-left ${
              theme === "greenOnBlack"
                ? "bg-primary text-textOnPrimary"
                : "text-textPrimary hover:text-primary"
            }`}
          >
            {t("greenOnBlack")}
          </button>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default ThemeSelector;
