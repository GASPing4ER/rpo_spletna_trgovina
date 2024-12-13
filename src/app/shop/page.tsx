"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { categoriesData } from "@/constants";
import { TProduct } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import { CategoryListBox, FilterDropDown } from "@/components";
import { fetchProducts, filterAndSortProducts } from "@/actions/shop";
import {
  handleCategoryClick,
  handleSortChange,
  handleBrandChange,
  handleSliderChange,
} from "@/actions/handlers";
import { useCartContext } from "@/hooks";

export default function Shop() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category");
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<TProduct[] | null>(null);
  const [sortOption, setSortOption] = useState<string>("LowToHigh");
  const [selBrands, setSelBrands] = useState<Record<string, boolean>>({});
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 1500]);
  const { handleAddProduct } = useCartContext();

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts(category);
      setProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, [category]);

  const renderProducts = () => {
    if (!loading && products && products.length === 0) {
      return (
        <h1 className="text-2xl">
          There are no products available for this category!
        </h1>
      );
    }

    if (!loading && products && filteredProducts.length === 0) {
      return (
        <h1 className="text-2xl">No products match the selected filters!</h1>
      );
    }

    return filteredProducts.map((product, index) => (
      <div
        key={index}
        className="bg-[#F6F6F6] flex-1 h-[438px] flex flex-col items-center justify-between py-14 px-4 gap-4 shadow-inner"
      >
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="/images/product-placeholder.png"
            alt="product"
            width={246}
            height={185}
          />
          <h3 className="text-center">
            {product.name}, {product.description}
          </h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-2xl font-bold">{product.price},00 €</p>
          <button
            onClick={() => handleAddProduct(product)}
            className="px-8 py-3 bg-[#4156D8] text-white rounded-[8px]"
          >
            Kupi zdaj
          </button>
        </div>
      </div>
    ));
  };

  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(
      products || [],
      selBrands,
      sliderValue,
      sortOption
    );
  }, [products, selBrands, sliderValue, sortOption]);

  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <section className="w-full flex mt-20 justify-end py-10 px-40">
        <FilterDropDown
          category={category || ""}
          sortOption={sortOption}
          onSortChange={handleSortChange(setSortOption)}
          selBrands={selBrands}
          onBrandChange={handleBrandChange(setSelBrands)}
          sliderValue={sliderValue}
          onSliderChange={handleSliderChange(setSliderValue)}
        />
        <CategoryListBox
          categories={categoriesData}
          category={category}
          onCategoryChange={handleCategoryClick(
            router,
            setSelBrands,
            setSliderValue
          )}
        />
      </section>
      <section className="flex gap-5 items-center justify-center">
        {renderProducts()}
      </section>
    </main>
  );
}
