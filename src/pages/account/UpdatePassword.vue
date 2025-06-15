<template>
  <div class="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
    <div class="mx-auto max-w-xl space-y-2">
      <h1 class="font-bold text-2xl">Update new password</h1>
      <form @submit.prevent="onSubmit" class="space-y-5">
        <div>
          <label for="password" class="mb-1 block text-sm font-medium text-gray-700">New password</label>
          <input
            type="password"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            v-model="form.password"
            placeholder="New password"
          />
        </div>
        <div>
          <label for="password" class="mb-1 block text-sm font-medium text-gray-700">Confirm new password</label>
          <input
            type="password"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            v-model="form.confirmPassword"
            placeholder="Confirm new password"
          />
        </div>
        <div>
          <button
            type="submit"
            class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
          >
            Update password
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { supabase } from "@/lib/supabaseClient";
import { notify } from "notiwind";
import { reactive } from "vue";

const form = reactive({
  password: "",
  confirmPassword: "",
});

const onSubmit = async () => {
  if (!form.password || !form.confirmPassword) {
    notify({ title: "Password is required", icon: "error" });
    return;
  }
  if (form.password !== form.confirmPassword) {
    notify({ text: "Passwords do not match", title: "error", group: "bottom" });
    return;
  }
  const new_password = form.password;
  try {
    await supabase.auth.updateUser({ password: new_password });
    notify({ text: "Password updated", title: "success", group: "top" }, 4000);
  } catch (error) {
    notify({ text: error.message, title: "error", group: "bottom" }, 4000);
  }
};
</script>
