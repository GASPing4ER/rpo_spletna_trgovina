"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TOrderWithItems } from "@/types";
import { formatDate } from "@/lib/utils";
import { useTranslations } from "next-intl";

type OrdersTableProps = {
  orders: TOrderWithItems[] | null;
};

const OrdersTable = ({ orders }: OrdersTableProps) => {
  const t = useTranslations("Profile");
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  return (
    <Table className="bg-white rounded-lg">
      <TableCaption>{t("order_caption")}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>{t("order")}</TableHead>
          <TableHead>{t("status")}</TableHead>
          <TableHead>{t("amount")}</TableHead>
          <TableHead>{t("date")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders &&
          orders.length > 0 &&
          orders.map((order, index) => (
            <React.Fragment key={order.id}>
              {/* Main Order Row */}
              <TableRow
                onClick={() => toggleOrderDetails(order.id)}
                className="cursor-pointer"
              >
                <TableCell>#{index + 1}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.total_price} €</TableCell>
                <TableCell>{`${formatDate(order.created_at)}`}</TableCell>
              </TableRow>

              {/* Order Details Row */}
              {expandedOrderId === order.id && (
                <TableRow className="bg-gray-100">
                  <TableCell colSpan={4}>
                    <div className="p-4">
                      <p className="font-bold mb-2">{t("products_label")}</p>
                      {order.order_items.length > 0 ? (
                        <ul className="list-disc list-inside">
                          {order.order_items.map((item) => (
                            <li key={item.id}>
                              {item.products.name} - {item.products.price} €
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{t("no_products")}</p>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
