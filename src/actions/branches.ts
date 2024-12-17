import { supabase } from "@/lib/supabase";
import { TBranch } from "@/types";
import { PostgrestError } from "@supabase/supabase-js";

export const getBranches = async (): Promise<{
  data: TBranch[] | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const query = supabase.from("branches").select();

    const { data, error } = await query;

    return {
      data: data,
      error,
      message: "Successful Fetch of Branches Data",
    };
  } catch (error) {
    return {
      data: null,
      error,
      message: "Database Error: Failed to Fetch Branches Data",
    };
  }
};
