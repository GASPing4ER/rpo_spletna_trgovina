"use server";

import {
  NewUserDataProps,
  LoginUserProps,
  UserDataWithoutPassword,
  TUser,
} from "@/types";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { getLocale } from "next-intl/server";
import { supabase } from "@/lib/supabase";
// import { headers } from "next/headers";

export const signup = async (formData: NewUserDataProps) => {
  const supabaseAuth = await createClient();
  const locale: string = await getLocale();

  const { data, error } = await supabaseAuth.auth.signUp({
    email: formData.email,
    password: formData.password!,
    options: {
      data: {
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
      },
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...rest } = formData;

  if (data.user) {
    const { data: userData } = await getUserByEmail(data.user.email!);
    if (userData) {
      await updateUserAuthId(userData.id, data.user.id);
    }

    await addUser({ ...rest, user_auth_id: data.user.id });
  }

  if (error) {
    switch (error.code) {
      case "user_already_exists":
        if (locale === "sl") {
          return { error: "Uporabnik že obstaja." };
        } else {
          return { error: error.message };
        }
      case "validation_failed":
        if (locale === "sl") {
          return { error: "Geslo ne sme biti daljše od 72 znakov." };
        } else {
          return { error: error.message };
        }
      case "over_request_rate_limit":
        if (locale === "sl") {
          return { error: "Presegli ste omejitev zahtev." };
        } else {
          return { error: error.message };
        }
      case "invalid_email":
        if (locale === "sl") {
          return { error: "Napačen e-naslov." };
        } else {
          return { error: error.message };
        }
      default:
        return { error: error.code };
    }
  }

  revalidatePath("/", "layout");
  redirect("/login");
};

export const login = async (formData: LoginUserProps) => {
  const supabaseAuth = await createClient();
  const locale: string = await getLocale();

  const { error } = await supabaseAuth.auth.signInWithPassword(formData);

  if (error) {
    switch (error.code) {
      case "invalid_credentials":
        if (locale === "sl") {
          return { error: "E-naslov ali geslo je napačno." };
        } else {
          return { error: error.message };
        }
      case "over_request_rate_limit":
        if (locale === "sl") {
          return { error: "Presegli ste omejitev zahtev." };
        } else {
          return { error: error.message };
        }
      default:
        return { error: error.code };
    }
  }

  revalidatePath("/", "layout");
  redirect("/");
};

export const logout = async () => {
  const supabaseAuth = await createClient();
  await supabaseAuth.auth.signOut();
  redirect("/login");
};

export const getUser = async (): Promise<User> => {
  const supabaseAuth = await createClient();
  const { data, error } = await supabaseAuth.auth.getUser();

  if (!data.user || error) {
    redirect("/login");
  }

  return data.user;
};

export const getUserNoRedirect = async (): Promise<User | null> => {
  const supabaseAuth = await createClient();
  const { data, error } = await supabaseAuth.auth.getUser();

  if (!data.user || error) {
    return null;
  }

  return data.user;
};

export const forgotPassword = async (email: string) => {
  const supabaseAuth = await createClient();
  const locale: string = await getLocale();
  // const origin = (await headers()).get("origin");

  const { error } = await supabaseAuth.auth.resetPasswordForEmail(email, {
    redirectTo: `https://rpo-spletna-trgovina.vercel.app/reset-password`,
  });

  if (error) {
    if (error.code === "over_email_send_rate_limit" && locale === "sl") {
      return {
        error: "Za spremembo gesla lahko ponovno zaprosite čez 1 minuto.",
      };
    }
    if (locale === "sl") {
      return { error: "Napaka pri pošiljanju povezave za spremembo gesla." };
    } else {
      return { error: error.message };
    }
  }

  if (locale === "sl") {
    return {
      data: "Na vaš E-naslov smo vam poslali povezavo za spremembo gesla.",
    };
  } else {
    return { data: "We sent a password change request to your E-mail." };
  }
};

export const updatePassword = async (code: string, new_password: string) => {
  const supabaseAuth = await createClient();

  const { error: codeError } = await supabaseAuth.auth.exchangeCodeForSession(
    code
  );

  if (codeError) {
    console.log(codeError);
    return { error: codeError.message };
  }

  const { error } = await supabaseAuth.auth.updateUser({
    password: new_password,
  });

  if (error) {
    return { error: "Error occurred" };
  }

  return { data: "Password updated successfully." };
};

export const addUser = async (
  userData: UserDataWithoutPassword & {
    user_auth_id: string;
  }
) => {
  const supabaseAuth = await createClient();
  const { data, error } = await supabaseAuth.from("users").insert([
    {
      email: userData.email,
      user_auth_id: userData.user_auth_id,
      first_name: userData.first_name,
      last_name: userData.last_name,
      bank_details: {},
      delivery_details: {},
    },
  ]);

  if (error) {
    return { error: error.message };
  }

  return data;
};

export const addUserData = async (
  userData: Omit<TUser, "created_at" | "id">
) => {
  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        ...userData,
        user_auth_id: null,
      },
    ])
    .select()
    .single();

  if (error) {
    return { error: error.message, data: null };
  }

  return { data, error: null };
};

export const updateUserData = async (
  userId: string,
  userData: Omit<TUser, "created_at" | "id">
) => {
  const { data, error } = await supabase
    .from("users")
    .update([
      {
        ...userData,
      },
    ])
    .eq("id", userId)
    .select();

  if (error) {
    return { error: error.message, data: null };
  }

  return { data, error: null };
};

export const updateUserAuthId = async (userId: string, userAuthId: string) => {
  const { data, error } = await supabase
    .from("users")
    .update([
      {
        user_auth_id: userAuthId,
      },
    ])
    .eq("id", userId)
    .select();

  if (error) {
    return { error: error.message, data: null };
  }

  return { data, error: null };
};

export const getUserByEmail = async (email: string) => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("email", email)
    .single();

  if (error) {
    return { error: error.message, data: null };
  }

  return { data, error: null };
};
