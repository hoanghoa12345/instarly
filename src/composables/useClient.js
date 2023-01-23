import { createClient } from "@supabase/supabase-js";

export function useClient() {
  const supabase = createClient(
    "https://rntawyatilvxiobrvuwg.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJudGF3eWF0aWx2eGlvYnJ2dXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUzMzE5MzAsImV4cCI6MTk2MDkwNzkzMH0._TCg_0lCOOHaBvyhU-o1c7ekNBh0n7sDJxqgDQ1MptQ"
  );

  return supabase;
}
