import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Project from '../views/Project.vue'
import About from '../views/About.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  { path: '/project/:id', component: Project }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
