// Composables

import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/views/ContactsView.vue"),
  },
  {
    path: "/dillers",
    name: "dillers",
    component: () => import("@/views/DillerView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/PartsView.vue"),
  },
  {
    path: "/offers",
    name: "offers",
    component: () => import("@/views/StockView.vue"),
  },
  {
    path: '/product/:id',
    name: 'oneProduct',
    component: () => import('@/views/ProductView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
