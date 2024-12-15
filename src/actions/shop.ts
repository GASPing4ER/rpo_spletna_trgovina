import { getProducts } from "@/actions/products";
import { TProduct } from "@/types";
import { PostgrestError } from "@supabase/supabase-js";

export const fetchProducts = async (
  category: string | null
): Promise<{
  data: TProduct[] | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const { data, error, message } = await getProducts(category as string);
    if (data) {
      return { data, error, message };
    }
    return { data: null, error, message };
  } catch (error) {
    return { data: null, error, message: "Failed" };
  }
};

export const filterAndSortProducts = (
  products: TProduct[],
  selBrands: Record<string, boolean>,
  sliderValue: [number, number],
  sortOption: string
): TProduct[] => {
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
      } else {
        return 0;
      }
    });
};
