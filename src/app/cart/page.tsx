import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { HeartIcon, RefreshCwIcon, TrashIcon } from "lucide-react";
import { productsDummyData } from "@/constants";

const CartPage = () => {
  const productData = productsDummyData[0];
  return (
    <div className="grid max-w-3xl gap-4 px-4 mx-auto mt-28">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
        <Button size="icon" variant="outline" className="rounded-full">
          <RefreshCwIcon className="w-4 h-4" />
          <span className="sr-only">Refresh</span>
        </Button>
      </div>
      <div className="grid gap-4">
        <Card className="grid gap-4 p-4 md:grid-cols-2 md:gap-4">
          <div className="flex items-center gap-4 md:col-span-1">
            <Image
              src={productData.imgUrl}
              alt="Product image"
              width={200}
              height={200}
              className="aspect-square object-contain border border-gray-200 rounded-lg w-full md:max-h-[200px] overflow-hidden dark:border-gray-800"
            />
          </div>
          <div className="flex flex-col items-start md:col-span-1 gap-1.5">
            <div className="grid gap-1.5">
              <Link
                href="#"
                className="line-clamp-2 font-medium hover:underline"
                prefetch={false}
              >
                {productData.name}
              </Link>
              <p>{productData.category}</p>
              <div className="text-sm font-medium">SKU: 938-28743-1</div>
              <Button size="icon" variant="outline">
                <HeartIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-2xl font-semibold">{productData.price} €</div>
            <div className="flex items-center gap-1">
              <Button size="sm">Update</Button>
              <Button variant="ghost" size="icon">
                <TrashIcon className="w-4 h-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="grid gap-2 md:grid-cols-1">
            <div className="flex items-center justify-between">
              <div>Subtotal</div>
              <div>{productData.price} €</div>
            </div>
            <div className="flex items-center justify-between">
              <div>Shipping</div>
              <div>5.00€</div>
            </div>
            <div className="flex items-center justify-between">
              <div>Tax</div>
              <div>{Math.round(productData.price * 0.22)}€</div>
            </div>
            <Separator className="w-full" />
            <div className="flex items-center justify-between font-medium">
              <div>Total</div>
              <div>
                {Math.round(productData.price * 0.22) + productData.price + 5} €
              </div>
            </div>
          </div>
        </Card>
        <div className="flex flex-col gap-2">
          <div />
          <Button>Apply coupon</Button>
        </div>
        <Button size="lg" className="w-full">
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
