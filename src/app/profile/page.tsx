import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/auth";
import {
  updateBankDetails,
  updateDeliveryDetails,
  getUserData,
} from "@/actions/profile";
import { Text } from "@/components/ui/text";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import { DeliveryForm, BankForm } from "@/components";
import Link from "next/link";

export default async function Profile() {
  const { data: user } = await getUserData();

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[70%] max-w-[1200px] flex flex-col">
        <Text size="large" className="mb-10 text-left">
          Pozdravljen/a, {user.first_name}!
        </Text>
        <div className="flex flex-col lg:flex-row gap-4">
          <Card className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-10 self-start">
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
                className="w-full flex flex-wrap justify-between"
              >
                Bančni podatki
                <ChevronRight />
              </Button>
            </Link>
            <Separator className="my-3" />
            <Button
              variant="ghost"
              className="w-full flex flex-wrap justify-between"
            >
              Zgodovina nakupov
              <ChevronRight />
            </Button>
            <Separator className="mt-3 mb-6" />
            <Button
              variant="outline"
              type="submit"
              className="w-full border-[#4156D8] text-[#4156D8] hover:bg-[#4156D8] hover:text-white"
              onClick={await logout}
            >
              Izpiši se
            </Button>
          </Card>
          <div className="w-full lg:w-2/3"></div>
        </div>
      </div>
    </div>
  );
}
