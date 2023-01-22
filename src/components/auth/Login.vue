<template>
  <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Login</h1>

      <p class="mt-4 text-gray-500">Login to your account</p>
    </div>

    <form @submit.prevent="onSubmit" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
      <div>
        <label for="email">Email</label>
        <input v-model="form.email" type="email" placeholder="Email" class="input input-bordered w-full" />
      </div>
      <div class="relative mt-1">
        <label for="password">Password</label>
        <input v-model="form.password" :type="isShow ? 'text' : 'password'" placeholder="Password" class="input input-bordered w-full" />
        <span @click="handleShow" class="absolute bottom-4 right-4"><eye-icon class="w-5 h-5 text-gray-400" /></span>
      </div>
      <button type="submit" class="btn btn-primary w-full">Login</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import { EyeIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";
export default {
  components: { EyeIcon },
  setup() {
    const router = useRouter();
    const form = ref({
      email: "",
      password: "",
    });

    const isShow = ref(false);

    const handleShow = () => {
      isShow.value = !isShow.value;
    };

    const onSubmit = () => {
      console.log(form.value);
      //const post = await fetch(`/api/post/1`).then((r) => r.json())
      router.push("/my");
    };

    return { form, onSubmit, isShow, handleShow };
  },
};
</script>
