"use client";

import { useCartContext } from "@/hooks";
import { useTranslations } from "next-intl";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Cart = () => {
  const { products } = useCartContext();
  const t = useTranslations("Cart");
  return (
    <Link href="/cart" className="relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <ShoppingBag className="h-6 w-6 text-iconColor" />
          </TooltipTrigger>
          <TooltipContent>
            <p> {t("cart")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {products.length !== 0 && (
        <p className="absolute -bottom-2 left-3 border border-border text-textOnPrimary text-xs bg-primary px-1 rounded-sm">
          {products.length}
        </p>
      )}
    </Link>
  );
};

export default Cart;
