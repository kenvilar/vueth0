import Vue from 'vue'
import Router from 'vue-router'

import MY_AUTH from './utils/auth';

Vue.use(Router)

function requireAuth(to, from, next) {
  if (!MY_AUTH.isLoggedIn()) {
    next({
      path: '/not-authorized'
    });
  } else {
    next();
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About')
    },
    {
      path: '/secret',
      name: 'secret',
      beforeEnter: requireAuth,
      component: () => import('./views/Secret')
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('./views/Callback')
    },
    {
      path: '/not-authorized',
      name: 'not-authorized',
      component: () => import('./views/NotAuthorized')
    }
  ]
})
