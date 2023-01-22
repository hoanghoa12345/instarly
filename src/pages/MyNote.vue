<template>
  <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="navbar bg-base-100">
        <div class="flex-none">
          <label for="my-drawer-2" class="btn btn-square btn-ghost drawer-button lg:hidden">
            <Bars3Icon class="inline-block w-5 h-5 stroke-current" />
          </label>
        </div>
        <div class="flex-1">
          <router-link to="my" class="btn btn-ghost normal-case text-xl">{{ appName }}</router-link>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <EllipsisHorizontalIcon class="inline-block w-5 h-5 stroke-current" />
          </button>
        </div>
      </div>
      <div class="w-full h-full bg-gray-200 p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
          <div v-for="item in lists" :key="item" class="card w-full md:w-96 lg:w-72 bg-primary text-primary-content">
            <div class="card-body">
              <h2 class="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <div class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <div>
          <router-link to="/my" class="font-bold text-xl">{{ appName }}</router-link>
        </div>
        <ul>
          <li>
            <router-link to="/accounts"><UserCircleIcon class="w-5 h-5 inline-block stroke-current" /> Account</router-link>
          </li>
          <li>
            <router-link to="/logout"><ArrowLeftOnRectangleIcon class="w-5 h-5 inline-block stroke-current" /> Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Bars3Icon, EllipsisHorizontalIcon, UserCircleIcon, ArrowLeftOnRectangleIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
export default {
  components: { Bars3Icon, EllipsisHorizontalIcon, UserCircleIcon, ArrowLeftOnRectangleIcon },
  setup() {
    const appName = ref("My Note");
    const lists = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    return { appName, lists };
  },
};
</script>
