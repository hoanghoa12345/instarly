import { createClient } from "@supabase/supabase-js";

export function useClient() {
  const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, import.meta.env.VITE_APP_SUPABASE_KEY);

  return supabase;
}
