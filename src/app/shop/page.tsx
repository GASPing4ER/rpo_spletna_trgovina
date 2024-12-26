"use server";

import React from "react";
import { getProducts } from "@/actions/products";
import { categoriesData } from "@/constants";
import { ShopClient } from "@/components";

export default async function Shop({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const params = await searchParams;

  const category = Array.isArray(params.category)
    ? params.category[0]
    : params.category || "";

  const page = Array.isArray(params.page)
    ? parseInt(params.page[0], 10)
    : parseInt(params.page || "1", 10);

  const validCategory = categoriesData.some((cat) => cat.slugId === category)
    ? category
    : "";

  const validPage = Number.isInteger(page) && page > 0 ? page : 1;

  const { data: products } = await getProducts(category);

  return (
    <ShopClient
      products={products || []}
      category={validCategory}
      page={validPage}
    />
  );
}
