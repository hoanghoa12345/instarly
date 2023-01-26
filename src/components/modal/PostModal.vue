<template>
  <div class="relative z-10">
    <Transition
      enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="0"
    >
      <div v-if="props.open" class="fixed inset-0 bg-black bg-opacity-40 transition-opacity"></div>
    </Transition>

    <Transition
      enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div v-if="props.open" class="fixed inset-0 z-10 overflow-y-auto">
        <!-- Close modal button -->
        <button @click="emit('close')" class="absolute right-4 top-4" type="button">
          <XMarkIcon class="w-8 h-8 text-white" />
        </button>
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-md bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl"
          >
            <div class="md:flex">
              <div class="flex-1 bg-black"><img class="rounded-sm" :src="post.photos" alt="photos" /></div>
              <div class="flex-1 flex flex-col justify-between">
                <div class="px-4 py-4 flex justify-between items-center border-b border-gray-300">
                  <div class="flex items-center gap-2">
                    <img
                      class="w-8 h-8 rounded-full object-cover p-[2px] border-2 border-red-500"
                      :src="post.profile.profile_pic"
                      alt="user"
                    />
                    <span class="text-sm font-semibold">{{ post.profile.username }}</span>
                  </div>

                  <EllipsisHorizontalIcon class="w-6 h-6" />
                </div>

                <div class="flex-1">
                  <div class="flex gap-2 px-4 py-4">
                    <img
                      class="w-8 h-8 rounded-full object-cover p-[2px] border-2 border-red-500"
                      :src="post.profile.profile_pic"
                      alt="user"
                    />
                    <div>
                      <span class="block text-sm font-semibold">{{ post.profile.username }}</span>
                      <span class="block text-xs text-gray-400">{{ format(post.created_at) }}</span>
                    </div>
                  </div>
                </div>

                <div class="p-4 flex justify-between border-t border-gray-300 items-center">
                  <div class="flex gap-4">
                    <Button>
                      <HeartIcon class="w-8 h-8" />
                    </Button>
                    <Button>
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
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { XMarkIcon, EllipsisHorizontalIcon } from "@heroicons/vue/24/solid";
import { HeartIcon, ChatBubbleOvalLeftIcon, PaperAirplaneIcon, BookmarkIcon } from "@heroicons/vue/24/outline";
import Button from "@/components/feed/Button.vue";
import { format } from "timeago.js";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);
</script>
