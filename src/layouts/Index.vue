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
import MoreMenu from "@/components/menu/MoreMenu.vue";
import CreatePost from "@/components/post/CreatePost.vue";
import AppLogo from "@/assets/logo.svg";
import AppIcon from "@/components/icons/AppIcon.vue";
import { useUserStore } from "@/store/user";
import { watchEffect } from "vue";
import { getCurrentUser } from "@/composables/useAuth";
import { getProfileByUser } from "@/composables/useAuth";

const modalNewPost = ref(false);
const openMoreMenu = ref(false);
const profile = ref({
  fullname: "",
  profile_pic: "",
  username: "",
});

const userStore = useUserStore();
// const { user } = useAuth();

const getUserProfile = async () => {
  const { user } = await getCurrentUser();

  // console.log("[info] user", user);

  userStore.setUser(user);

  const { data, error } = await getProfileByUser(user.id);
  // console.log("[info] profile", data, error);

  if (data) {
    userStore.setProfile(data);

    profile.value = data;
  }
};

watchEffect(() => {
  getUserProfile();
});
</script>
<template>
  <!-- Top bar on mobile -->
  <div class="md:hidden absolute left-0 top-0 w-full bg-white border-b border-gray-300 flex justify-between items-center py-2">
    <div class="overflow-hidden px-2">
      <AppIcon class="w-7 h-7" />
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
    <div class="overflow-hidden px-2">
      <HeartIcon class="w-8 h-8" />
    </div>
  </div>

  <!-- Sidebar -->
  <!-- icon multilevel expand mini mobile -->
  <div class="flex w-full h-screen">
    <div class="overflow-hidden border-r border-gray-300 flex flex-row justify-between">
      <div class="hidden lg:w-64 md:w-16 md:flex flex-col">
        <!-- Logo -->
        <div class="py-8 px-4">
          <img class="hidden lg:block h-10" :src="AppLogo" alt="logo" />
          <AppIcon class="block lg:hidden w-8 h-8" />
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
          <!--MoreMenu :open="openMoreMenu">
              <Menu title="More" @click="openMoreMenu = !openMoreMenu">
                <Bars3Icon class="w-8 h-8" />
              </Menu>
            </MoreMenu -->
          <tippy trigger="click" :arrow="false" :interactive="true">
            <Menu title="More">
              <Bars3Icon class="w-8 h-8" />
            </Menu>
            <template #content>
              <div class="w-56 origin-top-left rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu">
                <div class="py-4 px-4 cursor-pointer" role="menuitem" @click="userStore.signOut()">Log out</div>
              </div>
            </template>
          </tippy>
        </div>
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
          <img class="w-8 h-8 border border-gray-300 rounded-full object-cover" :src="profile.profile_pic" :alt="profile.username" />
        </div>
      </ul>
    </div>
    <!-- Modal Create Post -->
    <Teleport to="body">
      <CreatePost :open="modalNewPost" @close="modalNewPost = false" />
    </Teleport>
  </div>
</template>
