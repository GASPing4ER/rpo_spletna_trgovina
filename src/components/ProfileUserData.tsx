import React from "react";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import { logout } from "@/actions/auth";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const ProfileUserData = async ({ currentTab }: { currentTab: string }) => {
  const t = await getTranslations("Profile");

  return (
    <Card className="w-full lg:w-1/3 bg-surface shadow-sm rounded-lg p-10 self-start text-textPrimary">
      <Text size="custom" className="mb-5 text-textPrimary">
        {t("personal_data")}
      </Text>
      <Link href="/profile/delivery">
        <Button
          variant="ghost"
          className={`w-full flex flex-wrap justify-between ${
            currentTab === "delivery" ? "bg-onSurface" : ""
          }`}
        >
          {t("delivery_info")}
          <ChevronRight />
        </Button>
      </Link>
      <Separator className="my-3" />
      <Link href="/profile/bank">
        <Button
          variant="ghost"
          className={`w-full flex flex-wrap justify-between ${
            currentTab === "bank" ? "bg-onSurface" : ""
          }`}
        >
          {t("bank_info")}
          <ChevronRight />
        </Button>
      </Link>
      <Separator className="my-3" />
      <Link href="/profile/order-history">
        <Button
          variant="ghost"
          className={`w-full flex flex-wrap justify-between ${
            currentTab === "order-history" ? "bg-onSurface" : ""
          }`}
        >
          {t("order_history")}
          <ChevronRight />
        </Button>
      </Link>
      <Separator className="mt-3 mb-6" />
      <Button
        variant="outline"
        type="submit"
        className="w-full border border-primary text-primary bg-surface hover:bg-onSurface"
        onClick={logout}
      >
        {t("logout")}
      </Button>
    </Card>
  );
};

export default ProfileUserData;
