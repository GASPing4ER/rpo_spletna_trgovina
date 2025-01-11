"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TProduct } from "@/types";
import { useCartContext } from "@/hooks";

type ProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { handleAddProduct } = useCartContext();
  return (
    <Card className="w-full max-w-[350px] group relative space-y-4 overflow-hidden shadow-[0px_6px_10px_rgba(0,0,0,0.06)]">
      <Image
        className="aspect-square w-full"
        src={product.imgUrl}
        width={200}
        height={200}
        alt={product.name}
      />
      <CardContent className="px-4 py-0">
        <div className="flex justify-between gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-sm">
              <Link href={`/products/${product.id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground font-bold">
              {product.category}
            </p>
          </div>
          <p className="text-lg font-semibold">{product.price} €</p>
        </div>
      </CardContent>
      <CardFooter className="p-0 border-t">
        <Button
          onClick={() => handleAddProduct(product)}
          variant="ghost"
          className="w-full"
        >
          <PlusIcon className="size-4 me-1" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
