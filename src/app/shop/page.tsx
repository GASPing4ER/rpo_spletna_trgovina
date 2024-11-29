"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { productsDummyData, categoriesData } from "@/constants";
import { TProduct } from "@/types";
import Image from "next/image";

export default function Shop() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [products, setProducts] = useState<TProduct[]>([]);
  const [sortOption, setSortOption] = useState<string>("priceLowToHigh");

  useEffect(() => {
    let filteredProducts = category
      ? productsDummyData.filter((product) => product.category === category)
      : productsDummyData;

    if (sortOption === "priceLowToHigh") {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
    } else if (sortOption === "priceHighToLow") {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => b.price - a.price
      );
    }

    setProducts(filteredProducts);
  }, [category, sortOption]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value.startsWith("price")) {
      setSortOption(value);
    } else {
      const params = new URLSearchParams(window.location.search);
      if (value) {
        params.set("category", value);
      } else {
        params.delete("category");
      }
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
    }
  };

  if (!products.length) {
    return (
      <main className="w-full min-h-screen flex flex-col items-center justify-center">
        <select
          className="mb-5 p-2 border border-gray-300 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={category || ""}
          onChange={handleSelectChange}
          style={{ backgroundColor: sortOption ? "#f0f0f0" : "white" }}
        >
          {categoriesData.map((categoryItem, index) => (
            <option
              key={index}
              value={categoryItem.slugId}
              style={{
                backgroundColor:
                  categoryItem.slugId === category ? "#e0e0e0" : "white",
              }}
            >
              {categoryItem.title}
            </option>
          ))}
        </select>
        <h1 className="text-2xl">Za to kategorijo ni produktov!</h1>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <section className="w-full flex mt-20 justify-end py-10 px-40">
        <select
          className="p-2 border border-gray-300 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={sortOption}
          onChange={handleSelectChange}
          style={{ backgroundColor: sortOption ? "#f0f0f0" : "white" }}
        >
          <option disabled className="font-semibold">
            Cena:
          </option>
          <option
            value="priceLowToHigh"
            style={{
              backgroundColor:
                sortOption === "priceLowToHigh" ? "#e0e0e0" : "white",
            }}
          >
            Nizka do Visoka
          </option>
          <option
            value="priceHighToLow"
            style={{
              backgroundColor:
                sortOption === "priceHighToLow" ? "#e0e0e0" : "white",
            }}
          >
            Visoka do Nizka
          </option>
          <option disabled className="font-semibold">
            Kategorija:
          </option>
          {categoriesData.map((categoryItem, index) => (
            <option
              key={index}
              value={categoryItem.slugId}
              style={{
                backgroundColor:
                  categoryItem.slugId === category ? "#e0e0e0" : "white",
              }}
            >
              {categoryItem.title}
            </option>
          ))}
        </select>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 bg-white w-full pb-20 px-40 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#F6F6F6] flex-1 h-[438px] flex flex-col items-center pt-14 px-4 gap-4"
          >
            <Image
              src={product.imgUrl}
              alt="product"
              width={246}
              height={185}
            />
            <h3 className="text-center">
              {product.name}, {product.description}
            </h3>
            <p className="text-2xl font-bold">{product.price},00 €</p>
            <button className="px-16 py-3 bg-[#4156D8] text-white rounded-[8px]">
              Kupi zdaj
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
