import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { registerMicroApps } from "qiankun";

const microApps = [
  {
    name: "order",
    path: "/order:afterUser(.*)",
    component: () => import("@/pages/mini/index.vue"),
    app: {
      name: "order",
      entry: "//localhost:9001/",
      container: "#miniContainer",
      activeRule: (e: { hash: string }) => {
        return e.hash.startsWith("#/order");
      },
    },
  },
];

registerMicroApps(
  microApps.map((val) => {
    if (process.env.NODE_ENV !== "development") {
      val.app.entry = `${window.location.origin}/${val.app.name}/#/${val.app.name}`;
    }
    return val.app;
  })
);

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
  },
  ...microApps,
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
