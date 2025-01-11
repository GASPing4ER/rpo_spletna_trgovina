import React from "react";
import { getUserData } from "@/actions/profile";
import { DeliveryForm } from "@/components";
import { Text } from "@/components/ui/text";
import { ProfileUserData } from "@/components";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

export default async function Delivery() {
  const t = await getTranslations("Profile");
  const { data: user } = await getUserData();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex justify-center bg-background mt-20 py-20 px-8 sm:px-24">
      <div className="w-full xl:w-[70%] xl:max-w-[1200px] flex flex-col">
        <Text size="large" className="mb-10 text-left text-textPrimary">
          {t("profile_title")}, {user.first_name}!
        </Text>
        <div className="flex flex-col lg:flex-row gap-4">
          <ProfileUserData currentTab="delivery" />
          <div className="w-full lg:w-2/3">
            <DeliveryForm delivery_details={user.delivery_details} />
          </div>
        </div>
      </div>
    </div>
  );
}
