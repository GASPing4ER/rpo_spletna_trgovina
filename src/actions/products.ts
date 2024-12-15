import { supabase } from "@/lib/supabase";
import { TProduct } from "@/types";
import { PostgrestError } from "@supabase/supabase-js";

export const getProducts = async (
  category?: string
): Promise<{
  data: TProduct[] | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    let query = supabase.from("products").select();

    if (category) {
      query = query.eq("category", category);
    }

    const { data, error } = await query;

    return {
      data: data,
      error,
      message: "Successful Fetch of Products Data",
    };
  } catch (error) {
    return {
      data: null,
      error,
      message: "Database Error: Failed to Fetch Products Data",
    };
  }
};

export const getProduct = async (
  productId: string
): Promise<{
  data: TProduct | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select()
      .eq("id", productId)
      .single();

    return {
      data,
      error,
      message: "Successful Fetch of Product Data",
    };
  } catch (error) {
    return {
      data: null,
      error,
      message: "Database Error: Failed to Fetch Product Data",
    };
  }
};
