"use client";

import React from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { TCategory } from "@/types";
import { X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

interface ListBoxProps {
  categories: TCategory[];
  category: string | null;
  onCategoryChange: (value: string | null) => void;
}

const CategoryListBox = ({
  categories,
  category,
  onCategoryChange,
}: ListBoxProps) => {
  const t = useTranslations("Shop");
  const locale = useLocale();

  return (
    <Listbox value={category} onChange={onCategoryChange}>
      <div className="relative min-w-40 ml-2">
        <ListboxButton
          className={`flex items-center pl-2 pr-1 ${
            category ? "justify-between" : "justify-center"
          } w-full rounded-lg bg-onSurface py-1.5 text-sm font-semibold text-textPrimary focus:outline-none`}
        >
          {category
            ? categories.find((cat) => cat.slugId === category)?.[
                locale === "sl" ? "sl_title" : "en_title"
              ]
            : t("category_select")}
          {category && (
            <X
              size={18}
              className="cursor-pointer"
              onClick={() => onCategoryChange(null)}
            />
          )}
        </ListboxButton>
        <ListboxOptions className="absolute z-50 w-full bg-onSurface shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {categories.map((category) => (
            <ListboxOption
              key={category.slugId}
              value={category.slugId}
              className={({ selected }) =>
                `cursor-default select-none relative py-2 pl-3 pr-4 ${
                  selected
                    ? "text-textOnPrimary bg-primary"
                    : "text-textPrimary"
                } ${selected ? "font-medium" : "font-normal"}`
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    {locale === "sl" ? category.sl_title : category.en_title}
                  </span>
                  {selected ? (
                    <span
                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                        selected ? "text-textPrimary" : "text-primary"
                      }`}
                    ></span>
                  ) : null}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default CategoryListBox;
