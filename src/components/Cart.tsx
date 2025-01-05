"use client";

import { useCartContext } from "@/hooks";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const Cart = () => {
  const { products } = useCartContext();
  return (
    <Link href="/cart" className="relative">
      <ShoppingBag className="h-6 w-6 text-iconColor" />
      {products.length !== 0 && (
        <p className="absolute -bottom-2 left-3 border border-border text-textOnPrimary text-xs bg-primary px-1 rounded-sm">
          {products.length}
        </p>
      )}
    </Link>
  );
};

export default Cart;
