"use server";

import { supabase } from "@/lib/supabase";
import { PostgrestError } from "@supabase/supabase-js";
import { getUser } from "@/actions/auth";

interface FormBankData {
  full_name: string;
  account_number: string;
  expiration_date: string;
  ccv: string;
}

interface FormDeliveryData {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  postal: string;
}

const setBankDetails = async (
  formData: FormBankData
): Promise<{
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const user = await getUser();

    await supabase
      .from("users")
      .update({
        bank_details: {
          full_name: formData.full_name,
          account_number: formData.account_number,
          expiration_date: formData.expiration_date,
          ccv: formData.ccv,
        },
      })
      .eq("id", user.id);

    return {
      error: null,
      message: "Successful updated bank details",
    };
  } catch (error) {
    return {
      error,
      message: "Database Error: Failed to update bank details",
    };
  }
};

const setDeliveryDetails = async (
  formData: FormDeliveryData
): Promise<{
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const user = await getUser();

    await supabase
      .from("users")
      .update({
        delivery_details: {
          first_name: formData.first_name,
          last_name: formData.last_name,
          address: formData.address,
          city: formData.city,
          postal: formData.postal,
        },
      })
      .eq("id", user.id);

    return {
      error: null,
      message: "Successful updated bank delivery details",
    };
  } catch (error) {
    return {
      error,
      message: "Database Error: Failed to update delivery details",
    };
  }
};

export const getUserData = async (): Promise<{
  data: TUser[] | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const user = await getUser();

    if (!user) return { message: "User does not exist!" };

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .single();

    return {
      data: data,
      error,
      message: "Successful Fetch of User Data",
    };
  } catch (error) {
    return {
      data: null,
      error,
      message: "Database Error: Failed to Fetch User Data",
    };
  }
};

export async function updateBankDetails(formData) {
  "use server";
  const { error, message } = await setBankDetails(formData);
  if (error) {
    return { error, message: error.message };
  } else {
    return { message };
  }
}

export async function updateDeliveryDetails(formData) {
  "use server";
  const { error, message } = await setDeliveryDetails(formData);
  if (error) {
    return { error, message: error.message };
  } else {
    return { message };
  }
}
