import { getProducts } from "@/actions/products";
import { TProduct } from "@/types";

export const fetchProducts = async (
  category: string | null
): Promise<TProduct[] | null> => {
  try {
    const { data } = await getProducts(category as string);
    if (data) {
      return data;
    }
  } catch (error) {
    return { error: true, message: error.message };
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
