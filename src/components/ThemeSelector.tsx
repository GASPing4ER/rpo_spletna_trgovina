"use client";

import React from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { SunMoon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ThemeSelector = () => {
  const t = useTranslations("Header");
  const { theme, setTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Menu as="div" className="relative">
            <MenuButton className="relative py-1.5 px-1.5 text-sm font-semibold text-textSecondary focus:outline-none">
              <SunMoon className="h-6 w-6 text-iconColor" />
            </MenuButton>
            <MenuItems className="absolute flex flex-col right-0 top-full bg-surface mt-2 p-2 w-36 rounded-md shadow-lg focus:outline-none z-50">
              <p className="text-sm font-medium text-textSecondary mb-1">
                {t("theme_select_title")}
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "default", value: "default" },
                  { label: "whiteOnBlack", value: "whiteOnBlack" },
                  { label: "blackOnWhite", value: "blackOnWhite" },
                  { label: "yellowOnBlue", value: "yellowOnBlue" },
                  { label: "blackOnBeige", value: "blackOnBeige" },
                  { label: "greenOnBlack", value: "greenOnBlack" },
                ].map(({ label, value }) => (
                  <button
                    key={value}
                    onClick={() => setTheme(value)}
                    className={`text-sm py-2 px-2 rounded-md w-full text-left ${
                      theme === value
                        ? "bg-primary text-textOnPrimary"
                        : "text-textPrimary hover:text-primary"
                    }`}
                  >
                    {t(label)}
                  </button>
                ))}
              </div>
            </MenuItems>
          </Menu>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("theme_select_title")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeSelector;
