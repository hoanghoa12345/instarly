<template>
  <button type="button" @click="emit('click')" class="hover:opacity-40">
    <slot />
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);
</script>
