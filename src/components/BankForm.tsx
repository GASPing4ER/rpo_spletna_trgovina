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
import { BankDetailsProps, TUser } from "@/types";
import { updateBankDetails } from "@/actions/profile";
import { useTranslations } from "next-intl";

type BankFormProps = {
  bank_details: TUser["bank_details"];
};

const BankForm = ({ bank_details }: BankFormProps) => {
  const t = useTranslations("Profile");
  const [formData, setFormData] = useState<BankDetailsProps>({
    full_name: bank_details.full_name || "",
    account_number: bank_details.account_number || "",
    expiration_date: bank_details.expiration_date || "",
    ccv: bank_details.ccv || "",
  });
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error, message } = await updateBankDetails(formData);
    if (error) setError(message);
    setMessage(message);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg shadow-sm bg-surface border border-border p-10"
    >
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
          <Button
            type="submit"
            className="py-7 bg-primary text-textOnPrimary hover:text-textPrimary"
          >
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

export default BankForm;
