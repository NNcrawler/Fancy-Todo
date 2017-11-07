import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login';
import home from '../components/home';
import todo from '../components/todo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        { name: 'todo',
          path: '/',
          component: todo,
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
