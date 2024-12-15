import React from "react";
import { getUserData } from "@/actions/profile";
import { BankForm } from "@/components";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { logout } from "@/actions/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Bank() {
  const { data: user } = await getUserData();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="h-screen flex justify-center bg-gray-100 mt-20 py-20 px-24">
      <div className="w-[70%] max-w-[1200px] flex flex-col">
        <Text size="large" className="mb-10 text-left">
          Pozdravljen/a, {user.first_name}!
        </Text>
        <div className="flex flex-col lg:flex-row gap-4">
          <Card className="w-full lg:w-1/3 bg-white shadow-sm rounded-lg p-10 self-start">
            <Text size="custom" className="mb-5">
              Osebni podatki
            </Text>
            <Link href="/profile/delivery">
              <Button
                variant="ghost"
                className="w-full flex flex-wrap justify-between"
              >
                Podatki za dostavo
                <ChevronRight />
              </Button>
            </Link>
            <Separator className="my-3" />
            <Link href="/profile/bank">
              <Button
                variant="ghost"
                className="w-full flex flex-wrap justify-between bg-[#F6F6F6]"
              >
                Bančni podatki
                <ChevronRight />
              </Button>
            </Link>
            <Separator className="my-3" />
            <Link href="/profile/order-history">
              <Button
                variant="ghost"
                className="w-full flex flex-wrap justify-between"
              >
                Zgodovina nakupov
                <ChevronRight />
              </Button>
            </Link>
            <Separator className="mt-3 mb-6" />
            <Button
              variant="outline"
              type="submit"
              className="w-full border-[#4156D8] text-[#4156D8] hover:bg-[#4156D8] hover:text-white"
              onClick={logout}
            >
              Izpiši se
            </Button>
          </Card>
          <div className="w-full lg:w-2/3">
            <BankForm bank_details={user.bank_details} />
          </div>
        </div>
      </div>
    </div>
  );
}
