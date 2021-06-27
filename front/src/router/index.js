import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// コンポーネントをインポート
import TaskIndex from "../views/example/index";
import TaskShow from "../views/example/show";
import TaskCreate from "../views/example/create";
import TaskEdit from "../views/example/edit";
// 加筆箇所
import Login from "../views/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tasks',
    name: 'taskIndex',
    component: TaskIndex
  },
  {
    path: '/tasks/create',
    name: 'taskCreate',
    component: TaskCreate
  },
  {
    path: '/tasks/:taskId',
    name: 'task.show',
    component: TaskShow,
    props: true
  },
  {
    path: '/tasks/:taskId/edit',
    name: 'task.edit',
    component: TaskEdit,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
