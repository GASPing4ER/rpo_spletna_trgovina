import { supabase } from "@/lib/supabase";
import {
  TOrder,
  TOrderData,
  TOrderItem,
  TOrderItemData,
  TOrderWithItems,
} from "@/types";
import { PostgrestError } from "@supabase/supabase-js";

export const addOrder = async (
  order: TOrderData
): Promise<{
  data: TOrder | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .insert(order)
      .select()
      .maybeSingle();

    return {
      data,
      error,
      message: "Successful Added a new Order",
    };
  } catch (error) {
    return {
      data: null,
      error,
      message: "Database Error: Failed to Add a new Order",
    };
  }
};

export const addOrderItems = async (
  orderItems: TOrderItemData[]
): Promise<{
  data: TOrderItem[] | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const { data, error } = await supabase
      .from("order_items")
      .insert(orderItems);
    return {
      data: data,
      error,
      message: "Successful Add of an Order Item",
    };
  } catch (error) {
    return {
      data: null,
      error,
      message: "Database Error: Failed to Add an Order Item",
    };
  }
};

export const getOrders = async (
  userId?: string
): Promise<{
  data: TOrder[] | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select()
      .eq("user_id", userId);

    return {
      data: data,
      error,
      message: "Successful Fetch of Orders Data",
    };
  } catch (error) {
    return {
      data: null,
      error,
      message: "Database Error: Failed to Fetch Orders Data",
    };
  }
};

export const getOrdersWithItems = async (
  userId: string
): Promise<{
  data: TOrderWithItems[] | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    // Fetch orders along with their related order items and product data
    const { data, error } = await supabase
      .from("orders")
      .select(
        `
        *,
        order_items(*, products(*))
      `
      )
      .eq("user_id", userId);

    if (error) {
      return {
        data: null,
        error,
        message: "Database Error: Failed to Fetch Orders with Items",
      };
    }

    return {
      data: data as TOrderWithItems[],
      error: null,
      message: "Successfully Fetched Orders with Items",
    };
  } catch (error) {
    return {
      data: null,
      error,
      message: "Unexpected Error: Failed to Fetch Orders with Items",
    };
  }
};
