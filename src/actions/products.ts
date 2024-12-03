import { supabase } from "@/lib/supabase";
import { TProduct } from "@/types";
import { PostgrestError } from "@supabase/supabase-js";

export const getProducts = async (): Promise<{
  data: TProduct[] | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const { data, error } = await supabase.from("products").select();

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
