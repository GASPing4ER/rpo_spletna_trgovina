"use server";

import { supabase } from "@/lib/supabase";
import { PostgrestError } from "@supabase/supabase-js";
import { getUser } from "@/actions/auth";
import { BankDetailsProps, DeliveryDetailsProps, TUser } from "@/types";
import { getLocale } from "next-intl/server";

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
  const locale: string = await getLocale();

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
      .eq("user_auth_id", user.id);

    return {
      error: null,
      message:
        locale === "sl"
          ? "Bančni podatki so bili uspešno posodobljeni."
          : "Successfully updated bank details.",
    };
  } catch (error) {
    return {
      error,
      message:
        locale === "sl"
          ? "Bančni podatki niso bili uspešno posodobljeni."
          : "Failed to update bank details.",
    };
  }
};

const setDeliveryDetails = async (
  formData: FormDeliveryData
): Promise<{
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  const locale: string = await getLocale();

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
      .eq("user_auth_id", user.id);

    return {
      error: null,
      message:
        locale === "sl"
          ? "Dostavni podatki so bili uspešno posodobljeni."
          : "Successfully updated bank delivery details.",
    };
  } catch (error) {
    return {
      error,
      message:
        locale === "sl"
          ? "Dostavni podatki niso bili uspešno posodobljeni."
          : "Failed to update delivery details.",
    };
  }
};

export const getUserData = async (): Promise<{
  data: TUser | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const user = await getUser();

    if (!user)
      return {
        data: null,
        error: "User does not exist",
        message: "User does not exist!",
      };

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_auth_id", user.id)
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

export async function updateBankDetails(formData: BankDetailsProps) {
  const { error, message } = await setBankDetails(formData);

  if (error) {
    return { error, message: "Bank Details Update Failed" };
  } else {
    return { message };
  }
}

export async function updateDeliveryDetails(formData: DeliveryDetailsProps) {
  const { error, message } = await setDeliveryDetails(formData);
  if (error) {
    return { error, message: "Delivery Details Update Failed" };
  } else {
    return { message };
  }
}
