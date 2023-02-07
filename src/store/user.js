import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const profile = ref(null);

  const setUser = (userData) => {
    user.value = userData;
  };

  const setProfile = (profileData) => {
    profile.value = profileData;
  };

  return {
    user,
    profile,
    setUser,
    setProfile,
  };
});
