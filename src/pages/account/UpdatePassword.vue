<template>
    <div class="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
      <h1>Update new password</h1>
      <form onSubmit="onSubmit">
        <div>
          <label for="password">New password</label>
          <input type="password" id="password" v-model="form.password" />
        </div>
        <div>
          <label for="password">Confirm new password</label>
          <input type="password" id="password" v-model="form.confirmPassword" />
        </div>
        <div>
          <button type="submit">Update password</button>
        </div>
        </form>
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
  try {
    await supabase.auth.updateUser({ password: new_password })
    notify({ text: "Password updated", title: "success", group: 'top' }, 4000);
  } catch (error) {
    notify({ text: error.message, title: "error", group: 'bottom' }, 4000);
  }
};

</script>