<template>
  <div class="max-w-4xl mx-auto flex gap-12">
    <div>
      <!-- Stories navbar -->
      <Stories :user="profile" :items="stories" />
      <!-- Feed -->
      <div class="max-w-md w-[36rem] mt-6">
        <Card v-for="item in feed" :key="item.id" :post="item" @detail="viewDetail">
          <p v-if="item.caption">{{ item.caption }}</p>
          <img class="rounded-sm" v-if="item.photos" :src="item.photos" alt="photos" />
          <img
            class="rounded-sm"
            v-if="item.posts_media"
            v-for="media in item.posts_media"
            :src="getMedia(media.media_file)"
            alt="photos"
          />
        </Card>
      </div>
    </div>

    <div class="hidden lg:block w-64 mt-4">
      <!-- User profile -->
      <div class="my-4 flex gap-4">
        <img :src="profile.profile_pic" class="w-14 h-14 rounded-full object-cover" />
        <div>
          <h2 class="font-bold text-md">{{ profile.username }}</h2>
          <span class="text-gray-400 text-sm">{{ profile.fullname }}</span>
        </div>
      </div>

      <!-- suggestions for you -->
    </div>
  </div>
  <Teleport to="body">
    <!-- Post modal -->
    <PostModal v-if="detailPost" :open="isOpen" @close="isOpen = false" :post="detailPost" />
  </Teleport>
</template>
<script setup>
import { onMounted, ref } from "vue";
// import { useClient } from "@/composables/useClient";
import Card from "@/components/feed/Card.vue";
import PostModal from "@/components/modal/PostModal.vue";
import { getPosts, getMedia } from "@/composables/usePost";
import { useUserStore } from "@/store/user";
import Stories from "@/components/story/Stories.vue";
import { supabase } from "@/lib/supabaseClient";
import { watchEffect } from "vue";

const store = useUserStore();

const profile = ref({
  fullname: "",
  profile_pic: "",
  username: "",
});

const feed = ref([]);
const isOpen = ref(false);
const detailPost = ref(null);
const stories = ref([]);

onMounted(async () => {
  await getNewFeed();

  await getStories();
});

watchEffect(() => {
  if (store.profile) profile.value = store.profile;
});

const getNewFeed = async () => {
  const { data, error } = await getPosts();

  feed.value = data;
};

const getStories = async () => {
  stories.value = [
    {
      id: 1,
      username: "demouser",
      profile_pic: "https://api.multiavatar.com/demouser.svg",
    },
  ];
};

const viewDetail = (post) => {
  console.log("[info] open view detail", post.id);
  isOpen.value = true;
  detailPost.value = post;
};
</script>
