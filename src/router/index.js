import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/counter",
      name: "counter",
      component: () => import("../views/CounterView.vue"),
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/FormView.vue"),
    },
    {
      path: "/animals",
      name: "animals",
      component: () => import("../views/AnimalsView.vue"),
    },
    {
      path: "/animals2",
      name: "animals2",
      component: () => import("../views/Animals2.vue"),
    },
  ],
});

export default router;
