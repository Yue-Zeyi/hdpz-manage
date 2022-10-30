import { createRouter, createWebHashHistory } from 'vue-router'; //1.按需导入需要的方法
import Main from '../views/Main.vue';
const router = createRouter({
  //3.创建路由对象
  history: createWebHashHistory(), //3.1指定通过hash管理路由的切换
  routes: [
    //3.2创建路由规则
    {
      path: '/',
      component: Main,
      name: 'Home',
      redirect: '/home',
      // children: [
      //   { path: '/home', name: 'home', component: Home },
      //   {
      //     path: '/user',
      //     name: 'user',
      //     component: User,
      //   },
      //   {
      //     path: '/sort',
      //     name: 'sort',
      //     component: Sort,
      //   },
      //   {
      //     path: '/goods',
      //     name: 'goods',
      //     component: Goods,
      //   },
      //   {
      //     path: '/order',
      //     name: 'order',
      //     component: Order,
      //   },
      //   {
      //     path: '/article',
      //     name: 'article',
      //     component: Article,
      //   },
      //   {
      //     path: '/system/base',
      //     name: 'base',
      //     component: Base,
      //   },
      //   {
      //     path: '/system/pay',
      //     name: 'pay',
      //     component: Pay,
      //   },
      // ],

      children: [],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
  ],
});

export default router; //4.向外共享路由对象
