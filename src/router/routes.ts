import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../pages/HomePage.vue")
  },
  {
    path: "/about",
    component: () => import("../pages/AboutPage.vue")
  }
];

export default routes;
