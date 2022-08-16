import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const APP_NAME = require("../../package.json").name;

const routes: Array<RouteRecordRaw> = [
  {
    path: `/${APP_NAME}`,
    name: "home",
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/pages/home/index.vue"),
      },
      {
        path: "list",
        name: "list",
        component: () => import("@/pages/list/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
