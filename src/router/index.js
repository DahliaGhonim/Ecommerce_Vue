import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/views/HomePage/HomePage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      name: "home",
      path: "/",
      component: HomePage,
      meta: {
        title: "Home | Exclusive",
      },
    },
    {
      name: "about",
      path: "/about",
      component: () => import("@/views/AboutUs.vue"),
      meta: {
        title: "About | Exclusive",
      },
    },
    {
      name: "contact",
      path: "/contact",
      component: () => import("@/views/ContactUs.vue"),
      meta: {
        title: "Contact | Exclusive",
      },
    },
    {
      name: "products",
      path: "/products",
      component: () => import("@/views/ProductsPage.vue"),
      meta: {
        title: "Products | Exclusive",
      },
    },
    {
      name: "product_details",
      path: "/product/:id",
      component: () => import("@/views/ProductDetails/ProductDetails.vue"),
      meta: {
        title: "Product Details | Exclusive",
      },
    },
    {
      name: "not_found",
      path: "*",
      component: () => import("@/views/NotFound.vue"),
      meta: {
        title: "Not Found | Exclusive",
      },
    },
  ],
});

router.afterEach((to) => {
  document.title = to.meta.title || "Exclusive";
});

export default router;
