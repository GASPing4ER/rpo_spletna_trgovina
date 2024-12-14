import { supabase } from "@/lib/supabase";
import { TOrder, TOrderData, TOrderItem, TOrderItemData } from "@/types";
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
