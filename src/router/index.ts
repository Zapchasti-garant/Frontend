// Composables

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/AboutView.vue"),
    meta: {
      title: "Главная",
    },
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/views/ContactsView.vue"),
    meta: {
      title: "Контакты",
    },
  },
  {
    path: "/dillers",
    name: "dillers",
    component: () => import("@/views/DillerView.vue"),
    meta: {
      title: "Дилерская продукция",
    },
  },
  {
    path: "/parts",
    name: "parts",
    component: () => import("@/views/PartsView.vue"),
    meta: {
      title: "Запчасти",
    },
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("@/views/ProductView.vue"),
    meta: {
      title: "",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
