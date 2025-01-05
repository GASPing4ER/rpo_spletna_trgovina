import React from "react";
import { getUserData } from "@/actions/profile";
import { BankForm } from "@/components";
import { Text } from "@/components/ui/text";
import { ProfileUserData } from "@/components";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export default async function Bank() {
  const t = await getTranslations("Profile");
  const { data: user } = await getUserData();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex justify-center bg-background mt-20 py-20 px-24">
      <div className="w-[70%] max-w-[1200px] flex flex-col">
        <Text size="large" className="mb-10 text-left text-textPrimary">
          {t("profile_title")}, {user.first_name}!
        </Text>
        <div className="flex flex-col lg:flex-row gap-4">
          <ProfileUserData currentTab="bank" />
          <div className="w-full lg:w-2/3">
            <BankForm bank_details={user.bank_details} />
          </div>
        </div>
      </div>
    </div>
  );
}
