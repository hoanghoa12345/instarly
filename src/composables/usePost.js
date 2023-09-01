import { useClient } from "./useClient";
import { uuid, ext } from "@/helpers";
import { getProfileByUser } from "./useAuth";

import { useUserStore } from "@/store/user";

const store = useUserStore();

const supabase = useClient();

/**
 * Get list post
 * @returns Arrays post
 */
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

/**
 * Reaction post
 * @param {string} postId Post ID
 * @param {string} profileId Profile ID
 * @returns Object
 */
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

function getMedia(mediaPath) {
  return import.meta.env.VITE_APP_SUPABASE_URL + "/storage/v1/object/public/posts-media/" + mediaPath;
}

/**
 * Handle to create new posts
 * @param {string} caption Caption string
 * @param {File} mediaFile Media file to upload
 * @param {string} userId User profile uuid string
 * @returns
 */

async function createNew(caption, mediaFile, userId) {
  return new Promise(async (resolve, reject) => {
    /**
     * Create new post with caption, profile, type
     * Upload photos to bucket and create new posts media record
     */
    let userProfile = store.profile;

    const { data: postTypes, errorPt } = await supabase.from("posts_type").select("id, type_name");
    const { data: mediaTypes, errorMt } = await supabase.from("media_type").select("id, type_name");

    if (!store.profile) {
      const { data, error } = await getProfileByUser(userId);
      userProfile = data;
    }
    console.log(userProfile);

    if (Array.isArray(postTypes)) {
      const { data: post, errorP } = await supabase
        .from("posts")
        .insert([
          {
            caption: caption,
            profile: userProfile.id,
            type: postTypes[0].id,
          },
        ])
        .select();
      console.log("[post]: ", post, errorP);

      const { data: mediaPath, errorM } = await supabase.storage
        .from("posts-media")
        .upload(userId + "/" + uuid() + "." + ext(mediaFile.name), mediaFile, {
          cacheControl: "3600",
          upsert: false,
        });

      console.log("[media upload]: ", mediaPath, errorM);

      if (mediaPath && Array.isArray(mediaTypes)) {
        const { data: postMedia, errorMd } = await supabase
          .from("posts_media")
          .insert([
            {
              post: post ? post.id : "",
              type: mediaTypes[0].id, // photos
              position: 0,
              media_file: mediaPath.path,
            },
          ])
          .select();
        console.log(postMedia, errorMd);
        if (postMedia) resolve(postMedia);
      } else {
        reject(errorM);
      }
    } else {
      reject(errorPt);
    }

    // const { data: postMedia, errorMd } = await supabase
    //   .from("posts_media")
    //   .insert([
    //     {
    //       post: "ac7cf4d8-48c8-42b7-92f2-7d3163c3fb32",
    //       type: "fc83e8d9-5392-4cb7-9158-540c71fe0a48", // photos
    //       position: 0,
    //       media_file: "e7bd7651-109f-4d79-abc8-c913bfe11d6f/1a1580ea-881d-47a1-a011-1f4322fb8ab4.jpg",
    //     },
    //   ])
    //   .select();
    // console.log(postMedia, errorMd);

    // const { data, error } = await supabase.storage.getBucket("posts-media");
    // const { data, error } = await supabase.storage.listBuckets();

    // console.log(data, error);
  });
}

export { getPosts, reactPost, getMedia, createNew };
