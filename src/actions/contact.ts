"use server";

import { supabase } from "@/lib/supabase";
import { TBranch, TBranchNotification } from "@/types";
import { PostgrestError } from "@supabase/supabase-js";

export const getBranches = async (): Promise<{
  data: TBranch[] | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const { data, error } = await supabase.from("branches").select();

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

export const getNotifications = async (
  branchIds: string[]
): Promise<{
  data: Record<string, TBranchNotification[]> | null;
  error: PostgrestError | null | unknown;
  message: string;
}> => {
  try {
    const { data, error } = await supabase
      .from("branch_notifications")
      .select("*")
      .in("branch_id", branchIds);

    if (error) {
      return {
        data: null,
        error,
        message: "Database Error: Failed to Fetch Branches Data",
      };
    }

    const notificationsByBranch: { [key: string]: TBranchNotification[] } = {};
    data.forEach((notification) => {
      const { branch_id } = notification;
      if (!notificationsByBranch[branch_id]) {
        notificationsByBranch[branch_id] = [];
      }
      notificationsByBranch[branch_id].push(notification);
    });

    return {
      data: notificationsByBranch,
      error: null,
      message: "Notifications fetched successfully",
    };
  } catch (error) {
    return {
      data: null,
      error,
      message: "Error fetching notifications",
    };
  }
};
