import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// コンポーネントをインポート
import TaskIndex from "../pages/example/index";
import TaskShow from "../pages/example/show";
import TaskCreate from "../pages/example/create";
import TaskEdit from "../pages/example/edit";


export default new VueRouter({
  // モードの設定
  mode: 'history',
  routes: [
    {
      path: '/tasks',
      name: 'task.list',
      component: TaskIndex
    },
    {
      path: '/tasks/create',
      name: 'task.create',
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
});
