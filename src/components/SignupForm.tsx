"use client";

import React, { useState } from "react";
import { signup } from "@/actions/auth";
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
import Link from "next/link";

const RegisterForm = () => {
  const t = useTranslations("SignUp");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError(t("error_password"));
      return;
    }
    const { error } = await signup({
      email: formData.email,
      password: formData.password,
      first_name: formData.first_name,
      last_name: formData.last_name,
    });

    if (error) {
      setError(error);
    }
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
        <label
          htmlFor="firstLastName"
          className="text-sm font-medium text-textSecondary"
        >
          {t("full_name_label")}
        </label>
        <div className="flex flex-row mb-4 gap-x-2">
          <Input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder={t("name_placeholder")}
            required
            className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
          />
          <Input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder={t("last_name_placeholder")}
            required
            className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-sm font-medium text-textSecondary"
          >
            {t("email_label")}
          </label>
          <Input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("email_placeholder")}
            required
            className="mt-1.5 py-7 border-border focus:ring-primary] focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
          />
        </div>
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
          <p className="text-right text-sm text-textPrimary mt-6">
            {t("have_account_question")}{" "}
            <Link href="/login" className="font-semibold">
              {t("login_link")}
            </Link>
          </p>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </FormContent>
      <FormFooter>
        <Button type="submit" className="w-full py-7 mt-2">
          {t("signup_button")}
        </Button>
      </FormFooter>
    </Form>
  );
};

export default RegisterForm;
