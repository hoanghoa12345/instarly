import { ref } from "vue";
import { defineStore } from "pinia";
import { notify } from "notiwind";
import { supabase } from '@/lib/supabaseClient'
import router from "@/routes";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const profile = ref(null);

  const setUser = (userData) => {
    user.value = userData;
  };

  const setProfile = (profileData) => {
    profile.value = profileData;
  };

  const signOut = async () => {
    user.value = null;
    const { error } = await supabase.auth.signOut();
    if(error) {
      notify({ title: "Error", message: error.message, type: "error" });
    }else {
      notify({ title: "Success", message: "Sign out successfully!", type: "success" });
    }
    router.replace("/login");
  }

  return {
    user,
    profile,
    setUser,
    setProfile,
    signOut
  };
});
