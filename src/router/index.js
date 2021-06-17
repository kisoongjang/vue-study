import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Assignment from "../views/Assignment.vue";
import ActionsTest from "@/views/ActionsTest";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/assignment",
    name: "Assignment",
    component: Assignment,
  },
  {
    path: "/actions",
    name: "Actions",
    component: ActionsTest,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
