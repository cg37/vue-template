import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "#",
    redirect: "Home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../pages/HomePage.vue")
  },
  {
    path: "/about",
    component: () => import("../pages/AboutPage.vue")
  }
];

export default routes;
