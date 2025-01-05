// import { useClient } from "./useClient";

import { supabase } from "@/lib/supabaseClient";

// const supabase = useClient();

export async function useAuth() {
  // const supabase = useClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return {
    user,
  };
}
/**
 *
 * @param {string} userId User ID
 * @returns User profile data
 */
export async function getProfileByUser(userId) {
  try {
    const { data, error } = await supabase.from("profiles").select().eq("user_id", userId).single();
    return { data, error };
  } catch (error) {
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return { user };
  } catch (error) {
    console.error("[error] ", error);
  }
}
