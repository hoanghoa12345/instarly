<template>
  <Auth title="" @google-auth="signInWithGoogle" @facebook-auth="signInWithFacebook">
    <template #subTitle>
      <p class="mt-2 text-sm text-center text-gray-600">
        Don't have an account?
        <router-link
          to="register"
          title="Register"
          class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
        >
          Sign Up</router-link
        >
      </p>
    </template>

    <template #form>
      <form @submit.prevent="onSubmit" method="POST" class="mt-8">
        <div class="space-y-5">
          <div>
            <div class="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                v-model="form.email"
                placeholder="Email"
                class="block w-full p-2 text-sm text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-sm bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
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
                class="block w-full p-2 text-sm text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-sm bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="isSigningIn"
              class="inline-flex items-center justify-center w-full p-2 text-sm font-bold text-white transition-all duration-200 bg-blue-500 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSigningIn ? "Loading..." : "Log in" }}
            </button>
          </div>

          <div>
            <router-link
              to="/request-password-reset"
              title="Forgot password"
              class="w-full text-sm font-medium text-center text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
            >
              Forgot password?
            </router-link>
          </div>
        </div>
      </form>
    </template>
  </Auth>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { notify } from "notiwind";
import { supabase } from "@/lib/supabaseClient";
import Auth from "@/layouts/Auth.vue";

const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});

const isSigningIn = ref(false);

async function onSubmit(e) {
  await signInWithEmail(form);
}

async function signInWithEmail(form) {
  try {
    isSigningIn.value = true;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    router.replace("/");
    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    notify(
      {
        group: "bottom",
        title: error.message,
        text: error.message,
      },
      4000
    );
  } finally {
    isSigningIn.value = false;
  }
}

async function signInWithGoogle() {
}

async function signInWithFacebook() {}
</script>
