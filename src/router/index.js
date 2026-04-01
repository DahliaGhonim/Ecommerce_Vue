import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/views/HomePage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      name: "home",
      path: "/",
      component: HomePage,
    },
    {
      name: "about",
      path: "/about",
      component: () => import("@/views/AboutUs.vue"),
    },
    {
      name: "contact",
      path: "/contact",
      component: () => import("@/views/ContactUs.vue"),
    },
    {
      name: "products",
      path: "/products",
      component: () => import("@/views/ProductsPage.vue"),
    },
    {
      name: "product_details",
      path: "/product/:id",
      component: () => import("@/views/ProductDetails.vue"),
    },
    {
      name: "not_found",
      path: "*",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

export default router;
