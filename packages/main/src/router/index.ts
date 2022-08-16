import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { registerMicroApps, addGlobalUncaughtErrorHandler } from "qiankun";

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
  }),
  {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    beforeLoad: (app) => {
      console.log(app.name, "加载前");
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    beforeMount: (app) => {
      console.log(app.name, "安装前");
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    afterMount: (app) => {
      console.log(app.name, "安装了");
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    beforeUnmount: (app) => {
      console.log(app.name, "卸载前");
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    afterUnmount: (app) => {
      console.log(app.name, "卸载了");
    },
  }
);

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: Event | string) => {
  console.error(event);
});

export const layoutList: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
  },
  ...microApps,
];

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: [...layoutList],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
