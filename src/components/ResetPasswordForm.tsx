"use client";

import React, { useState } from "react";
import { updatePassword } from "@/actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormHeader,
  FormTitle,
  FormContent,
  FormFooter,
} from "@/components/ui/form";
import { useTranslations } from "next-intl";
import { redirect, useSearchParams } from "next/navigation";

const ResetPasswordForm = () => {
  const t = useTranslations("ResetPassword");
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const resetToken = searchParams.get("code") as string;

  if (!resetToken) redirect("/");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError(t("error_password"));
      return;
    }

    const { error } = await updatePassword(resetToken, formData.password);

    if (error) {
      setError(t("error"));
      return;
    }

    redirect("/");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-full max-w-[1120px] max-h-[624] p-10 bg-surface"
    >
      <FormHeader className="font-bold text-xl text-textPrimary">
        <FormTitle>{t("page_title")}</FormTitle>
      </FormHeader>
      <FormContent>
        <div className="mb-4">
          <label
            htmlFor="geslo"
            className="text-sm font-medium text-textSecondary"
          >
            {t("password_label")}
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={t("password_placeholder")}
            required
            className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
          />
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder={t("confirm_password_placeholder")}
            required
            className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </FormContent>
      <FormFooter>
        <Button type="submit" className="w-full py-7 mt-2">
          {t("reset_password_button")}
        </Button>
      </FormFooter>
    </Form>
  );
};

export default ResetPasswordForm;
