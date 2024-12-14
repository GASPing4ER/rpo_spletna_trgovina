import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OrdersTable } from "@/components";
import { LogoutButton } from "@/components";
import { getUser } from "@/actions/auth";
import { getOrders } from "@/actions/orders";

export default async function Profile() {
  const user = await getUser();
  const { data: orders } = await getOrders(user.id);

  return (
    <main className="w-full h-screen flex flex-col gap-10 items-center justify-center bg-gray-100">
      <Card className="max-w-lg p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <Image
            src="/images/profile_img.png"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">
            {user?.user_metadata.first_name} {user?.user_metadata.last_name}
          </h1>
          <p className="text-gray-600 mb-4">{user?.email}</p>
          <p className="text-center text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
          <Button variant="default" className="w-full mb-4">
            Edit Profile
          </Button>
          <LogoutButton />
        </div>
      </Card>
      <OrdersTable orders={orders} />
    </main>
  );
}
