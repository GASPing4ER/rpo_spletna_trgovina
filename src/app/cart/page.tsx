"use client";

import Image from "next/image";
import { TrashIcon } from "lucide-react";
import { useCartContext } from "@/hooks";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CartPage = () => {
  const t = useTranslations("Cart");
  const { products, handleDeleteProduct, handleEditProduct } = useCartContext();

  // derived states
  const totalPrice = products.reduce(
    (partialSum, product) => product.price * product.quantity + partialSum,
    0
  );

  const tax = Math.round(totalPrice * 0.22);
  const shipping = 15;

  // const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const user = await getUser();
  //   const { data } = await addOrder({
  //     total_price: totalPrice + tax + shipping,
  //     user_id: user.id,
  //     status: "pending",
  //   });
  //   console.log(data);
  //   if (data) {
  //     const modifiedProducts: TOrderItemData[] = products.map((product) => ({
  //       order_id: data.id,
  //       product_id: product.id,
  //       quantity: 1,
  //     }));
  //     const { error } = await addOrderItems(modifiedProducts);
  //     console.log("error:", error);
  //   }
  //   setProducts([]);
  //   redirect("/");
  // };

  return (
    <div className="min-h-screen mx-auto py-28 px-24 bg-gray-100">
      <h1 className="text-xl pb-4">{t("cart")}</h1>
      {products.length > 0 ? (
        <div className="flex h-[450px]">
          <div className="flex-1 flex flex-col gap-4 overflow-y-scroll pr-10">
            {products.map((product, index) => {
              return (
                <div
                  key={product.id + index}
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
                  <div className="flex gap-4">
                    <button
                      onClick={() =>
                        handleEditProduct(product.id, {
                          ...product,
                          quantity: product.quantity - 1,
                        })
                      }
                    >
                      -
                    </button>
                    <p className="bg-white px-1 border">{product.quantity}</p>
                    <button
                      onClick={() =>
                        handleEditProduct(product.id, {
                          ...product,
                          quantity: product.quantity + 1,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                  <p>{product.price * product.quantity} €</p>
                  <TrashIcon
                    onClick={() => handleDeleteProduct(product.id)}
                    className="cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
          <section
            // onSubmit={onHandleSubmit}
            className="bg-white w-[500px] flex flex-col justify-center gap-4 p-8"
          >
            <h2 className="text-xl font-bold">{t("order_summary")}</h2>
            <div className="flex flex-col gap-4">
              <Label>{t("promo_code")}</Label>
              <input
                placeholder={t("enter_code")}
                className="border border-gray p-2"
              />
            </div>
            <p className="text-gray-500 text-sm">{t("estimated_delivery")}</p>
            <div className="flex items-center justify-between">
              <p className="font-semibold">{t("price_without_vat_shipping")}</p>
              <p className="font-semibold">{totalPrice} €</p>
            </div>
            <div className="flex items-center justify-between">
              <p>{t("tax")}</p>
              <p>{tax} €</p>
            </div>
            <div className="flex items-center justify-between">
              <p>{t("shipping")}</p>
              <p>{shipping} €</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold">{t("total")}</p>
              <p className="font-semibold">{totalPrice + tax + shipping} €</p>
            </div>
            <Link
              href="/checkout"
              className="text-white font-semibold bg-blue-600 py-3 rounded-sm text-center"
            >
              {t("order")}
            </Link>
          </section>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p>{t("add_products_to_cart")}</p>
          <Link href="/shop" className="px-8 py-2 text-white bg-blue-600 w-fit">
            {t("continue_shopping")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
