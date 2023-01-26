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
