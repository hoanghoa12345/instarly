<template>
  <Auth title="Sign up to Celebration" @google-auth="signInWithGoogle" @facebook-auth="signInWithFacebook">
    <template #subTitle>
      <p class="mt-2 text-base text-gray-600">
        Already have an account?
        <router-link
          to="/login"
          title="Login"
          class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
          >Login</router-link
        >
      </p>
    </template>

    <template #form>
      <form @submit.prevent="onSubmit" method="POST" class="mt-8">
        <div class="space-y-5">
          <div>
            <label for="name" class="text-base font-medium text-gray-900"> Full Name </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                v-model="form.name"
                placeholder="Enter your full name"
                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
              />
            </div>
          </div>

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
            <label for="password" class="text-base font-medium text-gray-900"> Password </label>
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

          <div class="flex items-center">
            <input
              v-model="form.agree"
              type="checkbox"
              name="agree"
              id="agree"
              class="w-5 h-5 text-blue-600 bg-white border-gray-200 rounded"
            />

            <label for="agree" class="ml-3 text-sm font-medium text-gray-500">
              I agree to Postcraft's
              <a href="#" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</a> and
              <a href="#" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
            >
              Create free account
            </button>
          </div>
        </div>
      </form>
    </template>
  </Auth>
</template>

<script setup>
import Auth from "@/layouts/Auth.vue";
import { useClient } from "@/composables/useClient";
import { reactive } from "vue";
import { notify } from "notiwind";
import { useRouter } from "vue-router";

const supabase = useClient();

const form = reactive({
  name: "",
  email: "",
  password: "",
  agree: false,
});

async function onSubmit(e) {
  console.log("[info] form", form);
  if (form.agree) {
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });
    console.log("[info] sign up: ", data, error);
    if (error) {
      notify(
        {
          group: "bottom",
          title: error.name,
          text: error.message,
        },
        4000
      );
    } else {
      //TODO: Handle user data
    }
  } else {
    notify(
      {
        group: "bottom",
        title: "Error",
        text: "Please check agree policy",
      },
      4000
    );
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
