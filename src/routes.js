import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/Index.vue"),
      children: [
        {
          path: "",
          component: () => import("@/pages/Home.vue"),
        },
      ],
    },
    {
      path: "/hello",
      name: "Hello",
      component: () => import("@/components/HelloWorld.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/Login.vue"),
    },
    {
      path: "/my",
      name: "myNote",
      component: () => import("@/pages/MyNote.vue"),
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("@/pages/NotFound.vue") },
  ],
});

export default router;
