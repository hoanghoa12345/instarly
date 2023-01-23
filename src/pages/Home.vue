<template>
  <div class="max-w-4xl mx-auto flex gap-12">
    <!-- Feed -->
    <div class="w-[30rem] mt-8">
      <Card v-for="item in feed" :key="item.id" :post="item">
        <img class="rounded-sm" :src="item.photos" alt="photos" />
      </Card>
    </div>

    <div class="hidden lg:block w-64 mt-8">
      <!-- User profile -->
      <div class="my-4 flex gap-4">
        <img :src="profile.profile_pic" class="w-14 h-14 rounded-full object-cover" />
        <div>
          <h2 class="font-bold text-md">{{ profile.username }}</h2>
          <span class="text-gray-400 text-sm">{{ profile.fullname }}</span>
        </div>
      </div>

      <!-- suggetions for you -->
    </div>
  </div>
  <div class="hidden">
    <button class="bg-green-500 border border-green-400 rounded-md text-white p-2" type="button" @click="signUp">Sign Up</button>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { useClient } from "@/composables/useClient";
import Card from "@/components/feed/Card.vue";

const profile = ref({
  fullname: "",
  profile_pic: "",
  username: "",
});

const feed = ref([]);

const supabase = useClient();

onMounted(async () => {
  await getUserProfile();

  await getNewFeed();
});

const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("[info] ", user);

  return { user };
};

const getUserProfile = async () => {
  const { user } = await getCurrentUser();

  const { data, error } = await supabase.from("profiles").select().eq("user_id", user.id).single();

  console.log("[info] ", data, error);

  if (data) {
    profile.value = {
      username: data.username,
      fullname: data.fullname,
      profile_pic: data.profile_pic,
    };
  }
};

const getNewFeed = async () => {
  const { data, error } = await supabase.from("posts").select(`
  created_at, caption, photos, profile(profile_pic, username)
  `);
  console.log("[info] feed", data, error);

  feed.value = data;
};
</script>
