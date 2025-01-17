import React from "react";
import { LoginForm } from "@/components";
import { getTranslations } from "next-intl/server";

export default async function Login() {
  const t = await getTranslations("Login");

  return (
    <main className="min-h-screen flex flex-col items-center bg-background mt-20  py-20 px-4 sm:px-12 lg:px-24">
      <div className="w-full max-w-[1120px] flex justify-start mb-10">
        <p className="text-2xl font-semibold text-textPrimary">
          {t("login_title")}
        </p>
      </div>
      <LoginForm />
    </main>
  );
}
