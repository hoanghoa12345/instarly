<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-full max-w-md">
      <div class="text-center">
        <h1 class="text-3xl font-bold">Reset Password</h1>
        <p class="text-gray-500">Enter your email address and we'll send you a link to reset your password</p>
      </div>
      <form class="mt-8 space-y-5" @submit.prevent="onSubmit">
        <div>
          <label for="email" class="text-sm font-medium text-gray-900">Email address</label>
          <div class="mt-2">
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="Email address"
              class="block w-full p-2 text-sm text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-sm bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="inline-flex items-center justify-center w-full p-2 text-sm font-bold text-white transition-all duration-200 bg-blue-500 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
          >
            Send reset link
          </button>
        </div>
        <div>
          <router-link
            to="/login"
            title="Login"
            class="w-full text-sm font-medium text-center text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
          >
            Back to login
          </router-link>
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
  email: "",
});

const onSubmit = async () => {
  console.log(form.email);
  if (!form.email) {
    notify({ title: "Email is required", icon: "error" });
    return;
  }

  try {
    await supabase.auth.resetPasswordForEmail(form.email, {
      redirectTo: import.meta.env.VITE_APP_URL + "/account/update-password",
    });
    notify({ title: "Success", text: "Reset link sent", group: "top" }, 4000);
  } catch (error) {
    notify({ title: "Error", text: error.message, group: "bottom" }, 4000);
  }
};
</script>
