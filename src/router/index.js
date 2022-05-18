import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/writes",
    name: "Writes",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
