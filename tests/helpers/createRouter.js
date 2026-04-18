import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export function createRouter() {
  return new VueRouter({
    routes: [
      { path: "/", component: { template: "<div />" } },
      { path: "/products", component: { template: "<div />" } },
    ],
  });
}
