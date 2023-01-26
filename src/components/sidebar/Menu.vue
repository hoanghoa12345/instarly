<template>
  <li class="py-4 px-4 flex items-center space-x-6">
    <slot />
    <span class="hidden lg:block text-md" :class="{ 'font-bold': active }">{{ title }}</span>
  </li>
</template>
<script setup>
const { title } = defineProps({
  title: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
