import { useRouter } from "next/navigation";
import { TProduct } from "@/types";

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

export const handleCategoryClick =
  (
    router: ReturnType<typeof useRouter>,
    setSelBrands: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
    setSliderValue: React.Dispatch<React.SetStateAction<[number, number]>>
  ) =>
  (categoryId: string | null) => {
    setSelBrands({});
    setSliderValue([0, 1500]);
    if (categoryId) {
      router.push(`/shop?category=${encodeURIComponent(categoryId)}`);
    } else {
      router.push(`/shop`);
    }
  };

export const handleSortChange =
  (setSortOption: React.Dispatch<React.SetStateAction<string>>) =>
  (value: string) => {
    setSortOption(value);
  };

export const handleBrandChange =
  (
    setSelBrands: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
  ) =>
  (brand: string) => {
    setSelBrands((prevCheckedBrands) => ({
      ...prevCheckedBrands,
      [brand]: !prevCheckedBrands[brand],
    }));
  };

export const handleSliderChange =
  (setSliderValue: React.Dispatch<React.SetStateAction<[number, number]>>) =>
  (value: [number, number]) => {
    setSliderValue(value);
  };
