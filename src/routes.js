import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/composables/useAuth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/Index.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "",
          component: () => import("@/pages/Home.vue"),
        },
        {
          path: "/account/update-password",
          component: () => import("@/pages/account/UpdatePassword.vue"),
        },
      ],
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/pages/auth/Register.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/auth/Login.vue"),
    },
    {
      path: "/p/:postId",
      name: "Post Detail",
      component: () => import("@/pages/PostDetail.vue"),
    },
    {
      path: "/request-password-reset",
      name: "Request Password Reset",
      component: () => import("@/pages/auth/RequestPasswordReset.vue"),
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("@/pages/NotFound.vue") },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const { user } = await useAuth();
    if (user) {
      next();
    } else {
      // alert("You are not login!");
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
