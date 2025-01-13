"use client";

import { useCartContext } from "@/hooks";
import { Button } from "./ui/button";
import { TProduct } from "@/types";
import { useTranslations } from "next-intl";

const AddToCartButton = ({ product }: { product: TProduct }) => {
  const { handleAddProduct } = useCartContext();
  const t = useTranslations("Products");

  return (
    <Button
      onClick={() => handleAddProduct(product)}
      size="lg"
      className="w-full bg-primary text-textOnPrimary"
    >
      {t("add_to_cart")}
    </Button>
  );
};

export default AddToCartButton;
