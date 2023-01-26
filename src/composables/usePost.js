import { useClient } from "./useClient";

const supabase = useClient();

async function getPosts() {
  const { data, error } = await supabase.from("posts").select(`
  *,
  posts_media(*),
  profile(*),
  comments(*),
  reactions(*)
  `);

  return { data, error };
}

async function reactPost(postId, profileId) {
  //Check post has like
  return new Promise((resolve, reject) => {
    supabase
      .from("reactions")
      .select("id, post")
      .eq("post", postId)
      .then(({ error, data }) => {
        if (data.length > 0) {
          //If data -> delete row with id
          data.forEach((item) => {
            supabase
              .from("reactions")
              .delete()
              .eq("id", item.id)
              .then(() => {
                resolve(item);
              })
              .catch((error) => reject(error));
          });
        } else {
          //Else insert new row
          supabase
            .from("reactions")
            .upsert({ post: postId, profile: profileId })
            .select()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => reject(error));
        }
      })
      .catch((error) => reject(error));
  });

  // const { data, error } = await supabase.from("reactions").upsert({ post: postId, profile: profileId }).select();

  // console.log("[usePost] reactPost", data, error);

  // return { data, error };
}

async function getMedia() {}

export { getPosts, reactPost, getMedia };
