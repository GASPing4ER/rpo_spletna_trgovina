"use client";

import { useCartContext } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { products } = useCartContext();
  return (
    <Link href="/cart" className="relative">
      <Image
        src="/icons/shopping-bag.svg"
        alt="shopping bag"
        width={20}
        height={20}
      />
      {products.length !== 0 && (
        <p className="absolute -bottom-2 left-3 border text-white text-xs bg-black px-1 rounded-sm">
          {products.length}
        </p>
      )}
    </Link>
  );
};

export default Cart;
