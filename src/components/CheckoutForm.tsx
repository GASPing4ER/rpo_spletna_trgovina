"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import {
  Form,
  FormContent,
  FormFooter,
  FormHeader,
  FormTitle,
} from "./ui/form";
import { Input } from "./ui/input";
import { useTranslations } from "next-intl";
import { TOrderItemData, TUser } from "@/types";
import { addOrder, addOrderItems } from "@/actions/orders";
import { useCartContext } from "@/hooks";
import { redirect } from "next/navigation";
import { addUserData, getUserByEmail, updateUserData } from "@/actions/auth";

const CheckoutForm = ({ user }: { user: TUser | null }) => {
  const t = useTranslations("Profile");
  const { products, setProducts } = useCartContext();
  const [formData, setFormData] = useState({
    first_name: user?.delivery_details?.first_name || "",
    last_name: user?.delivery_details?.last_name || "",
    email: user?.email || "",
    address: user?.delivery_details?.address || "",
    city: user?.delivery_details?.city || "",
    postal: user?.delivery_details?.postal || "",
    full_name: user?.bank_details.full_name || "",
    account_number: user?.bank_details.account_number || "",
    expiration_date: user?.bank_details.expiration_date || "",
    ccv: user?.bank_details.ccv || "",
  });

  const totalPrice = products.reduce(
    (partialSum, product) => product.price * product.quantity + partialSum,
    0
  );

  const tax = Math.round(totalPrice * 0.22);
  const shipping = 15;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      const { data } = await addOrder({
        total_price: totalPrice + tax + shipping,
        user_id: user.id,
        status: "pending",
      });
      if (data) {
        const modifiedProducts: TOrderItemData[] = products.map((product) => ({
          order_id: data.id,
          product_id: product.id,
          quantity: product.quantity,
        }));
        await addOrderItems(modifiedProducts);
      }
    } else {
      const newUser: Omit<TUser, "id" | "created_at"> = {
        is_guest: true,
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
        bank_details: {
          full_name: formData.full_name,
          account_number: formData.account_number,
          expiration_date: formData.expiration_date,
          ccv: formData.ccv,
        },
        delivery_details: {
          first_name: formData.first_name,
          last_name: formData.last_name,
          address: formData.address,
          city: formData.city,
          postal: formData.postal,
        },
      };
      const { data } = await getUserByEmail(formData.email);
      if (data) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [userResponse, orderResponse] = await Promise.all([
          updateUserData(data.id, newUser),
          addOrder({
            total_price: totalPrice + tax + shipping,
            user_id: data.id,
            status: "pending",
          }),
        ]);
        const { data: orderData } = orderResponse;
        if (orderData) {
          const modifiedProducts: TOrderItemData[] = products.map(
            (product) => ({
              order_id: orderData.id,
              product_id: product.id,
              quantity: product.quantity,
            })
          );
          await addOrderItems(modifiedProducts);
        }
      } else {
        const { data: userData } = await addUserData(newUser);
        if (userData) {
          const { data } = await addOrder({
            total_price: totalPrice + tax + shipping,
            user_id: userData.id,
            status: "pending",
          });
          if (data) {
            const modifiedProducts: TOrderItemData[] = products.map(
              (product) => ({
                order_id: data.id,
                product_id: product.id,
                quantity: product.quantity,
              })
            );
            await addOrderItems(modifiedProducts);
          }
        }
      }
    }
    setProducts([]);
    redirect("/");
  };
  return (
    <Form
      onSubmit={onHandleSubmit}
      className="flex flex-col rounded-lg shadow-sm p-10 bg-surface"
    >
      <FormHeader className="font-bold text-xl text-textPrimary">
        <FormTitle>{t("delivery_form_title")}</FormTitle>
      </FormHeader>
      <FormContent>
        <label
          htmlFor="firstLastName"
          className="text-sm font-medium text-textSecondary"
        >
          {t("delivery_label_full_name")}
        </label>
        <div className="flex mb-4 gap-x-4">
          <Input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder={t("delivery_placeholder_first_name")}
            required
            className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
          />
          <Input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder={t("delivery_placeholder_last_name")}
            required
            className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
          />
        </div>
        <label
          htmlFor="email"
          className="text-sm font-medium text-textSecondary"
        >
          {t("delivery_label_email")}
        </label>
        <div className="flex mb-4 gap-x-4">
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("delivery_placeholder_email")}
            required
            className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
          />
        </div>
        <label
          htmlFor="address"
          className="text-sm font-medium text-textSecondary"
        >
          {t("delivery_label_address")}
        </label>
        <Input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder={t("delivery_placeholder_address")}
          required
          className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
        />
        <Input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder={t("delivery_placeholder_city")}
          required
          className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
        />
        <Input
          type="text"
          id="postal"
          name="postal"
          value={formData.postal}
          onChange={handleChange}
          placeholder={t("delivery_placeholder_postal")}
          required
          className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
        />
      </FormContent>
      <FormHeader className="font-bold text-xl text-textPrimary">
        <FormTitle>{t("bank_form_title")}</FormTitle>
      </FormHeader>
      <FormContent className="flex flex-col gap-y-3">
        <Input
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder={t("bank_placeholder_full_name")}
          required
          className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
        />
        <Input
          type="text"
          id="account_number"
          name="account_number"
          value={formData.account_number}
          onChange={handleChange}
          placeholder={t("bank_placeholder_account_number")}
          required
          className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
        />
        <div className="flex mb-4 gap-x-4">
          <Input
            type="text"
            id="expiration_date"
            name="expiration_date"
            value={formData.expiration_date}
            onChange={handleChange}
            placeholder={t("bank_placeholder_expiration_date")}
            required
            className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
          />
          <Input
            type="text"
            id="ccv"
            name="ccv"
            value={formData.ccv}
            onChange={handleChange}
            placeholder={t("bank_placeholder_ccv")}
            required
            className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
          />
        </div>
      </FormContent>
      <FormFooter>
        <div className="w-full flex flex-col gap-y-3">
          <Button type="submit" className="py-7">
            {t("pay_cta")}
          </Button>
        </div>
      </FormFooter>
    </Form>
  );
};

export default CheckoutForm;
