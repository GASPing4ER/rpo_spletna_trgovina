"use client";

import Image from "next/image";
import { TrashIcon } from "lucide-react";
import { useCartContext } from "@/hooks";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const CartPage = () => {
  const { products, handleDeleteProduct } = useCartContext();

  // derived states
  const totalPrice = products.reduce(
    (partialSum, product) => product.price + partialSum,
    0
  );

  const tax = Math.round(totalPrice * 0.22);
  const shipping = 15;

  return (
    <div className="mx-auto py-28 px-24 bg-gray-100">
      <h1 className="text-xl pb-4">Košarica</h1>
      {products.length > 0 ? (
        <div className="flex h-[450px]">
          <div className="flex-1 flex flex-col gap-4 overflow-y-scroll pr-10">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex gap-10 py-4 items-center border-b border-gray-500"
                >
                  <Image
                    src="/images/product-placeholder.png"
                    width={150}
                    height={150}
                    alt="product placeholder"
                  />
                  <div className="flex flex-1 flex-col justify-center">
                    <h2 className="font-bold">{product.name}</h2>
                    <p>{product.description}</p>
                  </div>
                  <p>{product.price} €</p>
                  <TrashIcon
                    onClick={() => handleDeleteProduct(product.id)}
                    className="cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
          <div className="bg-white w-[600px] flex flex-col justify-center gap-4 p-8">
            <h2 className="text-xl font-bold">Pregled naročila</h2>
            <div className="flex flex-col gap-4">
              <Label>Promo koda</Label>
              <input
                placeholder="Vpiši kodo"
                className="border border-gray p-2"
              />
            </div>
            <p className="text-gray-500 text-sm">
              Predvidena dostava 13.12.2024
            </p>
            <div className="flex items-center justify-between">
              <p className="font-semibold">Cena brez DDV in dostave</p>
              <p className="font-semibold">{totalPrice} €</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Davek</p>
              <p>{tax} €</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Poštnina</p>
              <p>{shipping} €</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold">Skupno</p>
              <p className="font-semibold">{totalPrice + tax + shipping} €</p>
            </div>
            <button className="text-white font-semibold bg-blue-600 py-3 rounded-sm">
              Naroči
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p>Dodajte produkte v košarico!</p>
          <Link href="/shop" className="px-8 py-2 text-white bg-blue-600 w-fit">
            Nadaljuj z nakupom
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
