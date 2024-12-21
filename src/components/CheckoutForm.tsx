"use client";

import { useState } from "react";
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
import { TUser } from "@/types";

const CheckoutForm = ({ user }: { user: TUser | null }) => {
  const t = useTranslations("Profile");
  const [formData, setFormData] = useState({
    first_name: user?.delivery_details?.first_name || "",
    last_name: user?.delivery_details?.last_name || "",
    address: user?.delivery_details?.address || "",
    city: user?.delivery_details?.city || "",
    postal: user?.delivery_details?.postal || "",
    full_name: user?.bank_details.full_name || "",
    account_number: user?.bank_details.account_number || "",
    expiration_date: user?.bank_details.expiration_date || "",
    ccv: user?.bank_details.ccv || "",
  });
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const { message } = await updateDeliveryDetails(formData);
    if (error) setError(message);
    setMessage(message);
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg shadow-sm p-10"
    >
      <FormHeader className="font-bold text-xl">
        <FormTitle>{t("delivery_form_title")}</FormTitle>
      </FormHeader>
      <FormContent>
        <label
          htmlFor="firstLastName"
          className="text-sm font-medium text-[#545454]"
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
            className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
          />
          <Input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder={t("delivery_placeholder_last_name")}
            required
            className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
          />
        </div>
        <label htmlFor="email" className="text-sm font-medium text-[#545454]">
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
          className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
        />
        <Input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder={t("delivery_placeholder_city")}
          required
          className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
        />
        <Input
          type="text"
          id="postal"
          name="postal"
          value={formData.postal}
          onChange={handleChange}
          placeholder={t("delivery_placeholder_postal")}
          required
          className="mt-1.5 mb-4 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
        />
      </FormContent>
      <FormHeader className="font-bold text-xl">
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
          className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
        />
        <Input
          type="text"
          id="account_number"
          name="account_number"
          value={formData.account_number}
          onChange={handleChange}
          placeholder={t("bank_placeholder_account_number")}
          required
          className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
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
            className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
          />
          <Input
            type="text"
            id="ccv"
            name="ccv"
            value={formData.ccv}
            onChange={handleChange}
            placeholder={t("bank_placeholder_ccv")}
            required
            className="mt-1.5 py-7 border-gray-300 focus:ring-[#4156D8] focus:border-[#4156D8] sm:text-sm"
          />
        </div>
      </FormContent>
      <FormFooter>
        <div className="w-full flex flex-col gap-y-3">
          <Button type="submit" className="py-7 bg-[#4156D8]">
            {t("pay_cta")}
          </Button>
          <div className="flex justify-center gap-y-3">
            {error ? (
              <p className="text-red-600 text-sm">{message}</p>
            ) : (
              <p className="text-green-600 text-sm">{message}</p>
            )}
          </div>
        </div>
      </FormFooter>
    </Form>
  );
};

export default CheckoutForm;
