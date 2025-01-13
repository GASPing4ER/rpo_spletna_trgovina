"use client";

import Link from "next/link";
import Image from "next/image";
import { TProduct } from "@/types";
import { useCartContext } from "@/hooks";
import { useLocale, useTranslations } from "next-intl";

type ProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { handleAddProduct } = useCartContext();
  const t = useTranslations("Products");
  const locale: string = useLocale();

  return (
    <div className="bg-onSurface w-full lg:flex-1 h-[300px] md:h-[350px] flex flex-col items-center justify-between py-4 sm:py-6 px-2 sm:px-4 gap-2 sm:gap-4 transition-all transform hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col gap-2 items-center">
        <Link href="/products/[id]" as={`/products/${product.id}`}>
          <Image
            src={product.imgUrl}
            alt={product.name}
            width={150}
            height={150}
            className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] object-cover"
          />
        </Link>
        <h2 className="text-center text-sm text-textPrimary">
          {locale === "en" ? product.name_en : product.name}
        </h2>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-lg sm:text-xl font-bold text-textPrimary">
          {product.price},00 €
        </h3>
        <button
          onClick={() => handleAddProduct(product)}
          className="px-6 py-2 sm:px-8 sm:py-3 bg-primary text-textOnPrimary rounded-[8px] text-sm sm:text-base"
        >
          {t("add_button")}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
