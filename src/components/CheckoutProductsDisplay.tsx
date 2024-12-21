"use client";

import { useCartContext } from "@/hooks";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CheckoutProductsDisplay = () => {
  const { products } = useCartContext();
  const totalPrice = products.reduce(
    (partialSum, product) => product.price * product.quantity + partialSum,
    0
  );

  const tax = Math.round(totalPrice * 0.22);
  const t = useTranslations("Cart");
  const shipping = 15;

  return (
    <div className="p-10 flex flex-col gap-8 w-[600px]">
      {products.map((product) => (
        <div key={product.id} className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="relative p-1 border border-black w-fit bg-gray-300 rounded-md">
              <Image
                src="/images/product-placeholder.png"
                alt="product placeholder"
                width={75}
                height={75}
              />
              <div className="absolute -top-2 -right-4 bg-black text-white px-3 py-1 rounded-full">
                {product.quantity}
              </div>
            </div>
            <div>
              <p>{product.name}</p>
              <p className="text-gray-600 text-xs">{product.description}</p>
            </div>
          </div>
          <p>€{product.price * product.quantity}.00</p>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p>{t("subtotal")}</p>
          <p>€{totalPrice}.00</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{t("tax")}</p>
          <p>€{tax}.00</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{t("shipping")}</p>
          <p>€{shipping}.00</p>
        </div>
      </div>
      <div className="flex justify-between items-center font-bold text-xl">
        <p>{t("total")}</p>
        <p>€{totalPrice + tax + shipping}.00</p>
      </div>
    </div>
  );
};

export default CheckoutProductsDisplay;
