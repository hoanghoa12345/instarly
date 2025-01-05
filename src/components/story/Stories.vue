<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  items: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-4 my-6 mx-auto">
    <div class="w-16" v-for="item in items" :key="item.id">
      <div>
        <img class="w-16 h-16 rounded-full p-[2px] border-2 border-red-500" :src="item.profile_pic" :alt="item.username" />
      </div>
      <div>
        <p class="text-xs text-center truncate">{{ item.username }}</p>
      </div>
    </div>
  </div>
</template>
