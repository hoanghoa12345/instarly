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
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-md bg-white shadow-xl transition-all sm:w-full sm:max-w-md md:max-w-lg">
            <div class="w-full">
              <div class="grid p-4 border-b border-gray-300">
                <span class="font-semibold text-center">Create new post</span>
              </div>
              <div
                @dragenter.prevent="toggle_active()"
                @dragleave.prevent="toggle_active()"
                @dragover.prevent
                @drop.prevent="drop"
                class="grid h-96 md:h-[32rem] place-content-center"
              >
                <div class="flex flex-col items-center gap-4">
                  <div class="flex justify-center">
                    <PhotoIcon class="w-14 h-14 rotate-12" />
                    <FilmIcon class="w-14 h-14 -rotate-12" />
                  </div>
                  <p class="text-2xl font-thin">Drag photo and videos here</p>
                  <label for="file" class="px-4 py-2 rounded-md bg-blue-400 hover:bg-blue-500">
                    <span class="text-center text-white font-semibold text-sm">Select from computer</span>
                    <input type="file" @change="selectedFile" name="file" id="file" class="hidden" multiple />
                  </label>
                  <div
                    v-if="droppedFile !== null"
                    class="p-4 rounded-md w-full"
                    :class="{ 'border-2 border-dashed border-gray-300': dragActive }"
                  >
                    <img class="w-10 h-10 rounded-md" :src="preview" alt="" />
                    <span>{{ droppedFile.name }}</span>
                    <button type="button" @click="clearDropped()">
                      <XCircleIcon class="w-4 h-4" />
                    </button>
                  </div>

                  <!-- Upload multiphoto -->
                  <div v-if="false" v-for="item in droppedFiles">
                    <div>
                      <span>{{ item.name }}</span>
                    </div>
                  </div>

                  <!-- Create Post Button -->
                  <div v-if="droppedFile">
                    <div class="w-64 py-2">
                      <label for="caption" class="text-base font-medium text-gray-900"> Caption </label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="caption"
                          id="caption"
                          v-model="caption"
                          placeholder="Caption"
                          class="block w-full px-4 py-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      @click="createPost"
                      class="bg-blue-400 text-white font-semibold hover:bg-blue-500 rounded-md py-2 px-4"
                    >
                      Create Post
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
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { PhotoIcon, FilmIcon, XCircleIcon } from "@heroicons/vue/24/outline";
import Button from "@/components/feed/Button.vue";
import { format } from "timeago.js";
import useDropZone from "@/composables/useDropZone";
import { watch, ref } from "vue";
import { createNew } from "@/composables/usePost";
import { useUserStore } from "@/store/user";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

// Pinia user store user data and profile
const store = useUserStore();
const caption = ref("");
const preview = ref(null);

const emit = defineEmits(["close"]);
const { dragActive, droppedFile, droppedFiles, toggle_active, drop, clearDropped, selectedFile } = useDropZone();

watch(droppedFile, (current, prev) => {
  if (current) preview.value = URL.createObjectURL(current);
});

const createPost = async () => {
  console.log(droppedFile, caption);
  // Get user id from store
  const userId = store.user.id;
  const result = await createNew(caption.value, droppedFile.value, userId);
  console.log("[info] Get result from create post: ", result);
};
</script>
