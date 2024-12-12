import { useRouter } from "next/navigation";

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
