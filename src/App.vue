<template>
  <AppLoader v-if="loading" />
  <main class="motion-preset-fade motion-delay-500" v-else>
    <router-view />
  </main>
  <NotificationVue />
</template>
<script setup>
import NotificationVue from "@/components/notification/Notification.vue";
import AppLoader from "@/components/loader/AppLoader.vue";
import { ref } from "vue";
import { onMounted } from "vue";

const loading = ref(true);

onMounted(() => {
  document.title = "Instarly";
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>
<style></style>
