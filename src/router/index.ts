/*
 * @Date: 2023-06-17 16:56:28
 * @Author: liufan
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home"),
    },
  ],
});

export default router;
