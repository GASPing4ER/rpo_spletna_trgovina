import React from "react";
import { LoginForm } from "@/components";
import { getTranslations } from "next-intl/server";

export default async function Login() {
  const t = await getTranslations("Login");
  //TODO: ERRORS TRANSLATE
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#F6F6F6] mt-20  py-20 px-24">
      <div className="w-full max-w-[1120px] flex justify-start mb-10">
        <p className="text-2xl font-semibold">{t("login_title")}</p>
      </div>
      <LoginForm />
    </main>
  );
}
