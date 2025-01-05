<template>
  <div class="relative inline-block">
    <div v-show="open"
      class="absolute left-0 z-10 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
    >
      <div class="py-4 px-4 cursor-pointer" role="menuitem">Log out</div>
    </div>
    <div>
      <!--slot /-->
    </div>
  </div>
</template>
<script setup>
// const props = defineProps({
//   open: Boolean,
// });

// const emits = defineEmits(['onClose'])
</script>
