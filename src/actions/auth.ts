"use server";

import {
  NewUserDataProps,
  LoginUserProps,
  UserDataWithoutPassword,
} from "@/types";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User } from "@supabase/supabase-js";

export const signup = async (formData: NewUserDataProps) => {
  const supabaseAuth = await createClient();

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
    await addUser({ ...rest, id: data.user.id });
  }

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/login");
};

export const login = async (formData: LoginUserProps) => {
  const supabaseAuth = await createClient();

  const { error } = await supabaseAuth.auth.signInWithPassword(formData);

  if (error) {
    return { error: error.message };
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

export const addUser = async (
  userData: UserDataWithoutPassword & { id: string }
) => {
  const supabaseAuth = await createClient();
  const { data, error } = await supabaseAuth.from("users").insert([
    {
      id: userData.id,
      email: userData.email,
      first_name: userData.first_name,
      last_name: userData.last_name,
      //Other user fields
    },
  ]);

  if (error) {
    return { error: error.message };
  }

  return data;
};
