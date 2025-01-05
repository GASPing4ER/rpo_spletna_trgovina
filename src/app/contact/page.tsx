import React from "react";
import { getBranches, getNotifications } from "@/actions/contact";
import { BranchCard } from "@/components";
import { getTranslations } from "next-intl/server";

export default async function Contact() {
  const t = await getTranslations("Contact");
  const { data: branches } = await getBranches();

  if (!branches)
    return (
      <main className="min-h-screen w-full flex flex-col items-center py-28 px-20 mt-20">
        <div className="w-full max-w-[1120px]">
          <h1 className="font-semibold text-2xl mb-10">{t("title")}</h1>
          <div className="bg-white rounded-lg shadow-sm py-12 px-16 mt-4">
            <h2 className="font-bold text-xl mb-8">{t("call_center_title")}</h2>
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-base">
                {t("working_hours_title")}
              </h3>
              <p className="text-base">{t("working_days")}</p>
              <p className="text-base">{t("weekend")}</p>
            </div>
            <div className="flex gap-4 mt-5">
              <h3 className="font-bold text-base">{t("phone_number_title")}</h3>
              <p className="text-base underline">+386 59 100 9000</p>
            </div>
            <div className="flex gap-4 mt-5">
              <h3 className="font-bold text-base">
                {t("email_address_title")}
              </h3>
              <p className="text-base underline">info-slo@shoppster.com</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1120px] bg-white rounded-lg shadow-sm py-12 px-16 mt-4">
          <h1 className="font-semibold text-2xl mb-10">
            {t("branches_title")}
          </h1>
        </div>
      </main>
    );

  const branchIds = branches.map((branch) => branch.id);
  const { data: notifications } = await getNotifications(branchIds);

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-background py-28 px-20 mt-20 text-textPrimary">
      <div className="w-full max-w-[1120px]">
        <h1 className="font-semibold text-2xl mb-10">{t("title")}</h1>
        <div className="bg-onBackground rounded-lg shadow-sm py-12 px-16 mt-4">
          <h2 className="font-bold text-xl mb-8">{t("call_center_title")}</h2>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-base">{t("working_hours_title")}</h3>
            <p className="text-base">{t("working_days")}</p>
            <p className="text-base">{t("weekend")}</p>
          </div>
          <div className="flex gap-4 mt-5">
            <h3 className="font-bold text-base">{t("phone_number_title")}</h3>
            <p className="text-base underline">+386 59 100 900</p>
          </div>
          <div className="flex gap-4 mt-5">
            <h3 className="font-bold text-base">{t("email_address_title")}</h3>
            <p className="text-base underline">info-slo@shoppster.com</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1120px] bg-onBackground rounded-lg shadow-sm py-12 px-16 mt-4 text-textPrimary">
        <h1 className="font-semibold text-2xl mb-10">{t("branches_title")}</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {branches &&
            branches.map((branch) => {
              const branchNotifications = notifications
                ? notifications[branch.id]
                : [];
              return (
                <BranchCard
                  key={branch.id}
                  branch={branch}
                  notifications={branchNotifications}
                />
              );
            })}
        </div>
      </div>
    </main>
  );
}
