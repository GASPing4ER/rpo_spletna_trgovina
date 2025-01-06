"use client";

import { useCartContext } from "@/hooks";
import { Button } from "./ui/button";
import { TProduct } from "@/types";

const AddToCartButton = ({ product }: { product: TProduct }) => {
  const { handleAddProduct } = useCartContext();

  return (
    <Button
      onClick={() => handleAddProduct(product)}
      size="lg"
      className="w-full bg-accent"
    >
      Dodaj v košarico
    </Button>
  );
};

export default AddToCartButton;
