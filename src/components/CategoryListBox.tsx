import React from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { TCategory } from "@/types";
import { X } from "lucide-react";

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
  return (
    <Listbox value={category} onChange={onCategoryChange}>
      <div className="relative min-w-40 ml-2">
        <ListboxButton
          className={`flex items-center pl-2 pr-1 ${
            category ? "justify-between" : "justify-center"
          } w-full rounded-lg bg-gray-100 py-1.5 text-sm font-semibold text-gray-700 focus:outline-none`}
        >
          {category
            ? categories.find((cat) => cat.slugId === category)?.title
            : "Select a category"}
          {category && (
            <X
              size={18}
              className="cursor-pointer"
              onClick={() => onCategoryChange(null)}
            />
          )}
        </ListboxButton>
        <ListboxOptions className="absolute w-full bg-gray-50 shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {categories.map((category) => (
            <ListboxOption
              key={category.slugId}
              value={category.slugId}
              className={({ selected }) =>
                `cursor-default select-none relative py-2 pl-10 pr-4 ${
                  selected ? "text-white bg-[#4156D8]" : "text-gray-900"
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
                    {category.title}
                  </span>
                  {selected ? (
                    <span
                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                        selected ? "text-white" : "text-[#4156D8]"
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
