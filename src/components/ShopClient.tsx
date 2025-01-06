"use client";

import React, { useState, useMemo } from "react";
import { ShopClientProps } from "@/types";
import { useRouter } from "next/navigation";
import { CategoryListBox, FilterDropDown } from "@/components";
import { categoriesData } from "@/constants";
import { useCartContext } from "@/hooks";
import { useTranslations } from "next-intl";
import Pagination from "@mui/material/Pagination";
import Image from "next/image";
import Link from "next/link";

const ShopClient = ({ products, category, page }: ShopClientProps) => {
  const t = useTranslations("Shop");
  const router = useRouter();
  const { handleAddProduct } = useCartContext();

  //State
  const [sortOption, setSortOption] = useState<string>("LowToHigh");
  const [selBrands, setSelBrands] = useState<Record<string, boolean>>({});
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 1500]);

  const handleCategoryClick = (categoryId: string | null) => {
    setSelBrands({});
    setSliderValue([0, 1500]);
    if (categoryId) {
      router.push(`/shop?category=${encodeURIComponent(categoryId)}`);
    } else {
      router.push(`/shop`);
    }
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  const handleBrandChange = (brand: string) => {
    setSelBrands((prevCheckedBrands) => ({
      ...prevCheckedBrands,
      [brand]: !prevCheckedBrands[brand],
    }));
  };

  const handleSliderChange = (value: [number, number]) => {
    setSliderValue(value);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    router.push(`?category=${category}&page=${newPage}`);
  };

  const filteredProducts = useMemo(() => {
    const selectedBrands = Object.keys(selBrands).filter(
      (brand) => selBrands[brand]
    );

    return products
      .filter((product) => {
        return (
          (selectedBrands.length > 0
            ? selectedBrands.includes(product.brand)
            : true) &&
          product.price >= sliderValue[0] &&
          product.price <= sliderValue[1]
        );
      })
      .sort((a, b) => {
        if (sortOption === "LowToHigh") {
          return a.price - b.price;
        } else if (sortOption === "HighToLow") {
          return b.price - a.price;
        } else if (sortOption === "Availability") {
          return b.stock - a.stock;
        } else if (sortOption === "Name") {
          return a.name.localeCompare(b.name);
        } else {
          return 0;
        }
      });
  }, [products, selBrands, sliderValue, sortOption]);

  const renderProducts = () => {
    if (products && filteredProducts.length === 0) {
      return (
        <h1 className="text-2xl text-textPrimary">
          {t("no_products_filters")}
        </h1>
      );
    }

    const startIndex = (page - 1) * 9;
    const endIndex = startIndex + 9;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

    return productsToDisplay.map((product, index) => (
      <div
        key={index}
        className="w-[360px] h-[450px] bg-onSurface text-textPrimary flex flex-col items-center justify-center py-4 px-2 gap-4 shadow-inner transition-all transform hover:scale-105 hover:shadow-lg"
      >
        <Link href="/products/[id]" as={`/products/${product.id}`}>
          <Image
            src="/images/product-placeholder.png"
            alt="product"
            width={246}
            height={185}
          />
        </Link>
        <h3 className="text-center">{product.name}</h3>
        <p className="text-2xl font-bold">{product.price},00 €</p>
        <button
          onClick={() => handleAddProduct(product)}
          className="px-8 py-3 bg-primary text-textOnPrimary rounded-[8px]"
        >
          {t("buy_now")}
        </button>
      </div>
    ));
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-surface mt-20">
      <section className="w-full flex justify-end py-10 px-40">
        <FilterDropDown
          category={category || ""}
          sortOption={sortOption}
          onSortChange={handleSortChange}
          selBrands={selBrands}
          onBrandChange={handleBrandChange}
          sliderValue={sliderValue}
          onSliderChange={handleSliderChange}
        />
        <CategoryListBox
          categories={categoriesData}
          category={category}
          onCategoryChange={handleCategoryClick}
        />
      </section>
      <section className="flex flex-wrap gap-5 justify-center w-full px-4">
        {renderProducts()}
      </section>
      <section className="mt-10">
        <Pagination
          className="p-7"
          count={Math.ceil(filteredProducts.length / 9) || 1}
          page={page}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "var(--textPrimary)",
              "&.Mui-selected": {
                backgroundColor: "var(--primary)",
                color: "var(--textOnPrimary)",
              },
            },
          }}
        />
      </section>
    </main>
  );
};

export default ShopClient;
