import { useClient } from "./useClient";

const supabase = useClient();

async function getPosts() {
  const { data, error } = await supabase.from("posts").select(`
  *,
  profile(*),
  comments(*),
  reactions(*)
  `);

  return { data, error };
}

async function getMedia() {}

export { getPosts, getMedia };
