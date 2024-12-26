"use server";

import { getProducts } from "@/actions/products";
import { TProduct } from "@/types";
import { PostgrestError } from "@supabase/supabase-js";

export const fetchProducts = async (
  category: string | null
): Promise<{
  data: TProduct[] | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const { data, error, message } = await getProducts(category as string);

    if (data) {
      return { data, error, message };
    }

    return { data: null, error, message };
  } catch (error) {
    return { data: null, error, message: "Failed" };
  }
};
