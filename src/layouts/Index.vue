<script setup>
import { ref } from "vue";
import { HomeIcon } from "@heroicons/vue/24/solid";
import {
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
  PlayIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  PlusCircleIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";
import Menu from "@/components/sidebar/Menu.vue";
import CreatePost from "@/components/post/CreatePost.vue";

const modalNewPost = ref(false);
</script>
<template>
  <!-- Topbar on mobile -->
  <div class="md:hidden absolute left-0 top-0 w-full bg-white border-b border-gray-300 flex justify-between py-2">
    <div class="overflow-hidden">
      <img
        class="h-10"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png"
        alt="instagram"
      />
    </div>

    <div class="relative block">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <MagnifyingGlassIcon class="w-4 h-4 text-slate-500" />
      </span>
      <input
        class="px-2 py-2 w-72 placeholder:font-thin placeholder:text-slate-400 indent-6 bg-gray-200 border-none rounded-md"
        type="search"
        name="search"
        placeholder="Search"
      />
    </div>
    <div class="overflow-hidden">
      <HeartIcon class="w-8 h-8" />
    </div>
  </div>

  <!-- Sidebar -->
  <!-- icon multilevel expand mini mobile -->
  <div class="flex w-full h-screen">
    <div class="hidden lg:w-64 md:w-16 md:flex flex-col border-r border-gray-300">
      <!-- Logo Instagram -->
      <div class="py-8 px-4">
        <img
          class="hidden lg:block h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png"
          alt="instagram"
        />
        <svg class="lg:hidden w-8 h-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Instagram</title>
          <path
            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
          />
        </svg>
      </div>
      <!-- Menu items -->
      <div class="flex-grow">
        <ul>
          <Menu title="Home" active>
            <HomeIcon class="w-8 h-8" />
          </Menu>
          <Menu title="Search">
            <MagnifyingGlassIcon class="w-8 h-8" />
          </Menu>
          <Menu title="Explore">
            <GlobeAmericasIcon class="w-8 h-8" />
          </Menu>
          <Menu title="Reels">
            <PlayIcon class="w-8 h-8" />
          </Menu>
          <Menu title="Messages">
            <ChatBubbleOvalLeftIcon class="w-8 h-8" />
          </Menu>
          <Menu title="Notification">
            <HeartIcon class="w-8 h-8" />
          </Menu>
          <Menu title="Create" @click="modalNewPost = true">
            <PlusCircleIcon class="w-8 h-8" />
          </Menu>
        </ul>
      </div>

      <!-- Menu more -->
      <div>
        <Menu title="More">
          <Bars3Icon class="w-8 h-8" />
        </Menu>
      </div>
    </div>

    <div class="w-full flex justify-center overflow-y-auto">
      <router-view></router-view>
    </div>
    <!-- Menu bottom navigation -->
    <div class="md:hidden w-full left-0 bottom-0 absolute h-14 bg-white border-t border-gray-300">
      <ul class="flex justify-evenly">
        <div class="px-2 py-2">
          <HomeIcon class="w-8 h-8" />
        </div>
        <div class="px-2 py-2">
          <GlobeAmericasIcon class="w-8 h-8" />
        </div>
        <div class="px-2 py-2">
          <PlayIcon class="w-8 h-8" />
        </div>
        <div class="px-2 py-2">
          <ChatBubbleOvalLeftIcon class="w-8 h-8" />
        </div>
        <div class="px-2 py-2">
          <PlusCircleIcon class="w-8 h-8" />
        </div>
        <div class="px-2 py-2">
          <img class="w-8 h-8 border border-gray-300 rounded-full object-cover" src="https://picsum.photos/200/200" alt="" />
        </div>
      </ul>
    </div>
    <!-- Modal Create Post -->
    <Teleport to="body">
      <CreatePost :open="modalNewPost" @close="modalNewPost = false" />
    </Teleport>
  </div>
</template>
