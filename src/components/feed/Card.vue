<template>
  <div class="py-4 border-b border-r-gray-400">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <img class="w-12 h-12 rounded-full object-cover p-[2px] border-2 border-red-500" :src="post.profile.profile_pic" alt="user" />
        <span class="text-sm font-semibold">{{ post.profile.username }}</span>
        <span class="text-sm text-gray-400">•</span>
        <span class="text-sm text-gray-400">{{ format(post.created_at) }}</span>
      </div>

      <EllipsisHorizontalIcon class="w-8 h-8" />
    </div>
    <div class="py-4">
      <slot />
    </div>
    <div class="flex justify-between">
      <div class="flex gap-4">
        <Button @click="likePost">
          <HeartSolidIcon v-if="active" class="w-8 h-8 text-red-500" />
          <HeartIcon v-else class="w-8 h-8" />
        </Button>
        <Button @click="emit('detail', post)">
          <ChatBubbleOvalLeftIcon class="w-8 h-8" />
        </Button>
        <Button>
          <PaperAirplaneIcon class="w-8 h-8 -rotate-45" />
        </Button>
      </div>
      <div>
        <button type="button">
          <BookmarkIcon class="w-8 h-8" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { EllipsisHorizontalIcon } from "@heroicons/vue/24/solid";
import { HeartIcon as HeartSolidIcon } from "@heroicons/vue/24/solid";
import { HeartIcon, ChatBubbleOvalLeftIcon, PaperAirplaneIcon, BookmarkIcon } from "@heroicons/vue/24/outline";
import { format } from "timeago.js";
import Button from "./Button.vue";
import { onMounted, ref } from "vue";
import { reactPost } from "@/composables/usePost";
import { useUserStore } from "@/store/user";

//Pinia user store user data and profile
const store = useUserStore();

const { post } = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["detail"]);

const active = ref(false);

const likePost = async () => {
  active.value = !active.value;

  await reactPost(post.id, post.profile.id);
};

onMounted(async () => {
  const profileId = store.profile?.id;
  // get current user profile

  //check and turn on heart icon
  const isLike = post.reactions.find((reaction) => reaction.profile === profileId);
  // const isLike = true;

  // console.log("[card]", isLike);

  if (isLike) {
    active.value = true;
  }
});
</script>
