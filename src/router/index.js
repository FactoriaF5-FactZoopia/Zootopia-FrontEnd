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
      path: "/felids",
      name: "felids",
      component: () => import("../views/FelidosView.vue"),
    },
    {
      path: "/canids",
      name: "canids",
      component: () => import("../views/CanidosView.vue"),
    },
    {
      path: "/reptils",
      name: "reptils",
      component: () => import("../views/ReptilesView.vue"),
    },
    {
      path: "/mustelids",
      name: "mustelids",
      component: () => import("../views/MustelidosView.vue"),
    },
    {
      path: "/leporidae",
      name: "leporidae",
      component: () => import("../views/LeporidaeView.vue"),
    },
    {
      path: "/animalsFilter",
      name: "animalsFilter",
      component: () => import("../views/AnimalsFilter.vue"),
    },
  ],
});

export default router;
