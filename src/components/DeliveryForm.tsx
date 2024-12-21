"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormHeader,
  FormTitle,
  FormContent,
  FormFooter,
} from "@/components/ui/form";
import { DeliveryDetailsProps, TUser } from "@/types";
import { updateDeliveryDetails } from "@/actions/profile";
import { useTranslations } from "next-intl";

type DeliveryFormProps = {
  delivery_details: TUser["delivery_details"];
};

const DeliveryForm = ({ delivery_details }: DeliveryFormProps) => {
  const t = useTranslations("Profile");
  const [formData, setFormData] = useState<DeliveryDetailsProps>({
    first_name: delivery_details.first_name || "",
    last_name: delivery_details.last_name || "",
    address: delivery_details.address || "",
    city: delivery_details.city || "",
    postal: delivery_details.postal || "",
  });
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { message } = await updateDeliveryDetails(formData);
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
      <FormFooter>
        <div className="w-full flex flex-col gap-y-3">
          <Button type="submit" className="py-7 bg-[#4156D8]">
            {t("save_button")}
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

export default DeliveryForm;
