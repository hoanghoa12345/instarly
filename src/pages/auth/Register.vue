<template>
  <Auth title="Sign up to see photos and videos from your friends." @google-auth="signInWithGoogle" @facebook-auth="signInWithFacebook">
    <template #subTitle>
      <p class="mt-2 text-sm text-center text-gray-600">
        Have an account?
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
            <div class="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                v-model="form.name"
                placeholder="Full Name"
                class="block w-full text-sm p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-sm bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
              />
            </div>
          </div>

          <div>
            <div class="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                v-model="form.email"
                placeholder="Email"
                class="block w-full text-sm p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-sm bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
              />
            </div>
          </div>

          <div>
            <div class="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                v-model="form.password"
                placeholder="Password"
                class="block w-full text-sm p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
              />
            </div>
          </div>

          <div>
            <span class="ml-3 text-sm font-medium text-gray-500">
              By signing up, you agree to our
              <a href="#" title="" class="text-blue-900 hover:text-blue-700 hover:underline">Terms</a>,
              <a href="#" title="" class="text-blue-900 hover:text-blue-700 hover:underline">Privacy</a>

              and
              <a href="#" title="" class="text-blue-900 hover:text-blue-700 hover:underline">Cookies Policy</a>
            </span>
          </div>

          <div>
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full p-2 text-sm font-bold text-white transition-all duration-200 bg-blue-500 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign up
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
import { supabase } from "@/lib/supabaseClient";

// const supabase = useClient();

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
