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
            class="relative transform overflow-hidden rounded-md bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md md:max-w-lg"
          >
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
                    <input type="file" @change="selectedFile" name="file" id="file" class="hidden" />
                  </label>
                  <div
                    v-if="droppedFile !== null"
                    class="p-4 rounded-md w-full"
                    :class="{ 'border-2 border-dashed border-gray-300': dragActive }"
                  >
                    <span>{{ droppedFile.name }}</span>
                    <button type="button" @click="clearDropped()">
                      <XCircleIcon class="w-4 h-4" />
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
import { PhotoIcon, FilmIcon, XCircleIcon } from "@heroicons/vue/24/outline";
import Button from "@/components/feed/Button.vue";
import { format } from "timeago.js";
import useDropZone from "@/composables/useDropZone";
import { watch, ref } from "vue";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);
const { dragActive, droppedFile, toggle_active, drop, clearDropped, selectedFile } = useDropZone();
</script>
