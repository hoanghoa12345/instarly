<template>
  <Auth title="Sign in to Celebration" @google-auth="signInWithGoogle" @facebook-auth="signInWithFacebook">
    <template #subTitle>
      <p class="mt-2 text-base text-gray-600">
        Don't have an account?
        <router-link
          to="register"
          title="Register"
          class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
        >
          Create a free account</router-link
        >
      </p>
    </template>

    <template #form>
      <form @submit.prevent="onSubmit" method="POST" class="mt-8">
        <div class="space-y-5">
          <div>
            <label for="email" class="text-base font-medium text-gray-900"> Email address </label>
            <div class="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                v-model="form.email"
                placeholder="Enter email to get started"
                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="text-base font-medium text-gray-900"> Password </label>

              <a
                href="#"
                title="Forgot password"
                class="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
              >
                Forgot password?
              </a>
            </div>
            <div class="mt-2.5">
              <input
                type="password"
                name="password"
                id="password"
                v-model="form.password"
                placeholder="Enter your password"
                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
            >
              Log in
            </button>
          </div>
        </div>
      </form>
    </template>
  </Auth>
</template>
<script setup>
import { ref, reactive } from "vue";
import { EyeIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";
import { useClient } from "@/composables/useClient";
import { notify } from "notiwind";
import Auth from "@/layouts/Auth.vue";

const router = useRouter();
const supabase = useClient();

const form = reactive({
  email: "",
  password: "",
});

async function onSubmit(e) {
  console.log("[info]:event", e);
  console.log("[info]:form data", form);

  await signInWithEmail(form);
}

async function signInWithEmail(form) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: form.email,
    password: form.password,
  });
  console.log("[info]:data", data);
  console.log("[info]:error", error);
  if (error) {
    notify(
      {
        group: "bottom",
        title: error.name,
        text: error.message,
      },
      4000
    ); // 4s
  } else {
    router.replace("/");
  }
}

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
}

async function signInWithFacebook() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
  });
}
</script>
