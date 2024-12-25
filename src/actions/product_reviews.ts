import { supabase } from "@/lib/supabase";
import { TProductReview } from "@/types";
import { PostgrestError } from "@supabase/supabase-js";

export const getProductReviews = async (
  productId: string
): Promise<{
  data: TProductReview[] | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const { data, error } = await supabase
      .from("product_reviews")
      .select()
      .eq("product_id", productId);

    return {
      data: data,
      error,
      message: "Successful Fetch of Product Reviews Data",
    };
  } catch (error) {
    return {
      data: null,
      error,
      message: "Database Error: Failed to Fetch Product Reviews Data",
    };
  }
};

export const addProductReviews = async (
  newProductReview: Omit<TProductReview, "id" | "created_at">
): Promise<{
  data: TProductReview | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const { data, error } = await supabase
      .from("product_reviews")
      .insert(newProductReview)
      .select()
      .single();

    return {
      data: data,
      error,
      message: "Successfully Added Product Review",
    };
  } catch (error) {
    return {
      data: null,
      error,
      message: "Database Error: Failed to Add Product Reviews Data",
    };
  }
};
