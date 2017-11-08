import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login';
import home from '../components/home';
import todo from '../components/todo';
import setting from '../components/setting';
import register from '../components/signup';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        { name: 'todo',
          path: '/task/todo',
          component: todo,
        },
        { name: 'done',
          path: '/task/done',
          component: todo,
        },
        {
          name: 'setting',
          path: '/setting',
          component: setting,
        },
      ],
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: home,
    //   children: [
    //     { name: 'todo',
    //       path: '/',
    //       component: { default: todo, all: todo },
    //       props: { default: true, all: true },
    //     },
    //   ],
    // },
  ],
});
