import { useClient } from "./useClient";

const supabase = useClient();

export async function useAuth() {
  const supabase = useClient();

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

async function currentUser() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return { user };
  } catch (error) {
    console.error("[error] ", error);
  }
}

export { currentUser };
