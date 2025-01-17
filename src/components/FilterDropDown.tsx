"use client";

import React from "react";
import {
  Menu,
  MenuButton,
  MenuItems,
  RadioGroup,
  Field,
  Radio,
  Label,
  Checkbox,
} from "@headlessui/react";
import { categoriesData } from "@/constants";
import { Filter } from "lucide-react";
import { useTranslations } from "next-intl";
import * as Slider from "@radix-ui/react-slider";

interface FilterDropDownProps {
  category: string;
  sortOption: string;
  onSortChange: (value: string) => void;
  selBrands: Record<string, boolean>;
  onBrandChange: (brand: string) => void;
  sliderValue: [number, number];
  onSliderChange: (value: [number, number]) => void;
}

const FilterDropDown = ({
  category,
  sortOption,
  onSortChange,
  selBrands,
  onBrandChange,
  sliderValue,
  onSliderChange,
}: FilterDropDownProps) => {
  const t = useTranslations("Shop");

  return (
    <Menu>
      <MenuButton className="relative block rounded-lg bg-onSurface py-1.5 px-1.5 text-center text-sm font-semibold focus:outline-none">
        <Filter className="w-5 h-5 text-textPrimary" />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="bg-onSurface mt-2 p-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <p className="text-sm font-medium text-textSecondary mb-1">
          {t("sort_by")}
        </p>
        <RadioGroup
          value={sortOption}
          onChange={onSortChange}
          aria-label="Sort options"
          className="flex flex-col gap-1 text-textPrimary"
        >
          <Field
            key={"LowToHigh"}
            className="flex items-center justify-between gap-5"
          >
            <Label>{t("low_to_high")}</Label>
            <Radio
              value={"LowToHigh"}
              className="group flex size-5 items-center justify-center rounded-full border border-border bg-onBackground data-[checked]:bg-primary"
            >
              <span className="invisible size-2 rounded-full bg-onBackground group-data-[checked]:visible" />
            </Radio>
          </Field>
          <Field
            key={"HighToLow"}
            className="flex items-center justify-between gap-5"
          >
            <Label>{t("high_to_low")}</Label>
            <Radio
              value={"HighToLow"}
              className="group flex size-5 items-center justify-center rounded-full border border-border bg-onBackground data-[checked]:bg-primary"
            >
              <span className="invisible size-2 rounded-full bg-onBackground group-data-[checked]:visible" />
            </Radio>
          </Field>
          <Field
            key={"Availability"}
            className="flex items-center justify-between gap-5"
          >
            <Label>{t("availability")}</Label>
            <Radio
              value={"Availability"}
              className="group flex size-5 items-center justify-center rounded-full border border-border bg-onBackground data-[checked]:bg-primary"
            >
              <span className="invisible size-2 rounded-full bg-onBackground group-data-[checked]:visible" />
            </Radio>
          </Field>
          <Field
            key={"Name"}
            className="flex items-center justify-between gap-5"
          >
            <Label>{t("name")}</Label>
            <Radio
              value={"Name"}
              className="group flex size-5 items-center justify-center rounded-full border border-border bg-onBackground data-[checked]:bg-primary"
            >
              <span className="invisible size-2 rounded-full bg-onBackground group-data-[checked]:visible" />
            </Radio>
          </Field>
        </RadioGroup>

        {category && (
          <>
            <div className="h-[1px] rounded bg-separator my-2" />
            <div className="text-sm font-medium text-textSecondary mb-1">
              {t("filter_by_brand")}
            </div>
            {categoriesData
              .filter((cat) => cat.slugId === category)
              .map((cat) =>
                cat.brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-textPrimary"
                  >
                    <p>{brand}</p>
                    <Checkbox
                      checked={selBrands[brand] || false}
                      onChange={() => onBrandChange(brand)}
                      className="group block size-4 rounded border bg-onBackground data-[checked]:bg-primary"
                    >
                      <svg
                        className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Checkbox>
                  </div>
                ))
              )}
          </>
        )}
        <div className="h-[1px] rounded bg-separator my-2" />
        <div className="text-sm font-medium text-textSecondary mb-1">
          {t("filter_by_price")}
        </div>
        <div className="flex flex-col items-center">
          <Slider.Root
            className="relative flex items-center select-none touch-none w-64 h-5"
            value={sliderValue}
            onValueChange={onSliderChange}
            max={1500}
            step={1}
            aria-label="Price Range"
          >
            <Slider.Track className="bg-separator relative flex-1 rounded-full h-1">
              <Slider.Range className="absolute bg-primary rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-5 h-5 bg-onBackground border border-border rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75" />
            <Slider.Thumb className="block w-5 h-5 bg-onBackground border border-border rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75" />
          </Slider.Root>
          <div className="text-textSecondary">
            {sliderValue[0]}€ - {sliderValue[1]}€
          </div>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default FilterDropDown;
