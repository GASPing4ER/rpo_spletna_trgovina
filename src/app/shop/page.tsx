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
import Pagination from "@mui/material/Pagination";

export default function Shop() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<TProduct[] | null>(null);
  const [sortOption, setSortOption] = useState<string>("LowToHigh");
  const [selBrands, setSelBrands] = useState<Record<string, boolean>>({});
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 1500]);
  const { handleAddProduct } = useCartContext();

  const validCategory = categoriesData.find((cat) => cat.slugId === category)
    ? category
    : "";

  const validPage = Number.isInteger(page) && page > 0 ? page : 1;

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const { data } = await fetchProducts(validCategory);
      setProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, [validCategory, validPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    if (validCategory)
      router.push(`?category=${validCategory}&page=${newPage}`);
    else router.push(`?page=${newPage}`);
  };

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

    const startIndex = (validPage - 1) * 9;
    const endIndex = startIndex + 9;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

    return productsToDisplay.map((product, index) => (
      <div
        key={index}
        className="w-[390px] h-[450px] bg-[#F6F6F6] flex flex-col items-center justify-center py-4 px-2 gap-4 shadow-inner"
      >
        <Image
          src="/images/product-placeholder.png"
          alt="product"
          width={246}
          height={185}
        />
        <h3 className="text-center">
          {product.name}, {product.description}
        </h3>
        <p className="text-2xl font-bold">{product.price},00 €</p>
        <button
          onClick={() => handleAddProduct(product)}
          className="px-8 py-3 bg-[#4156D8] text-white rounded-[8px]"
        >
          Kupi zdaj
        </button>
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
    <main className="min-h-screen flex flex-col items-center mt-20">
      <section className="w-full flex justify-end py-10 px-40">
        <FilterDropDown
          category={validCategory || ""}
          sortOption={sortOption}
          onSortChange={handleSortChange(setSortOption)}
          selBrands={selBrands}
          onBrandChange={handleBrandChange(setSelBrands)}
          sliderValue={sliderValue}
          onSliderChange={handleSliderChange(setSliderValue)}
        />
        <CategoryListBox
          categories={categoriesData}
          category={validCategory}
          onCategoryChange={handleCategoryClick(
            router,
            setSelBrands,
            setSliderValue
          )}
        />
      </section>
      <section className="flex flex-wrap gap-5 justify-center w-full px-4">
        {renderProducts()}
      </section>
      <section className="mt-10">
        <Pagination
          className="p-5"
          count={(products && Math.ceil(products.length / 9)) || 1}
          page={validPage}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#111",
              "&.Mui-selected": {
                backgroundColor: "#4156D8",
                color: "#fff",
              },
            },
          }}
        />
      </section>
    </main>
  );
}
