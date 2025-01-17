"use client";

import React, { useState } from "react";
import { login, forgotPassword } from "@/actions/auth";
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

const LoginForm = () => {
  const t = useTranslations("Login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await login({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      setError(error);
    }
  };

  const handlePasswordReset = async (email: string) => {
    if (!email) {
      setError(t("error_email_required"));
      return;
    }

    const { error } = await forgotPassword(email);

    if (error) {
      setMessage(null);
      setError(error);
    }

    if (!error) {
      setError(null);
      setMessage(t("password_reset_success"));
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-full max-w-[1120px] max-h-[508] p-10 bg-surface border-border"
    >
      <FormHeader className="font-bold text-xl text-textPrimary">
        <FormTitle>{t("page_title")}</FormTitle>
      </FormHeader>
      <FormContent>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-sm font-medium text-textSecondary"
          >
            {t("email_label")}
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("email_placeholder")}
            required
            className="mt-1.5 py-7 border-border focus:ring-primary focus:border-primary sm:text-sm text-textPrimary placeholder:text-textTertiary"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
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
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {message && <p className="text-green-500 text-sm">{message}</p>}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-6">
          <button
            type="button"
            onClick={() => handlePasswordReset(formData.email)}
          >
            <p className="text-center text-sm text-textPrimary">
              {t("forgot_password")}
            </p>
          </button>
          <p className="text-center text-sm text-textPrimary">
            {t("no_account_question")}{" "}
            <Link href="/signup" className="font-semibold">
              {t("register_link")}
            </Link>
          </p>
        </div>
      </FormContent>
      <FormFooter>
        <Button
          type="submit"
          className="w-full py-7 bg-primary mt-5 hover:bg-onHover"
        >
          {t("login_button")}
        </Button>
      </FormFooter>
    </Form>
  );
};

export default LoginForm;
