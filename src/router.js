import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Secret from './views/Secret'
import NotAuthorized from './views/NotAuthorized'
import Callback from './views/Callback'

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
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/secret',
      name: 'secret',
      beforeEnter: requireAuth,
      component: Secret
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/not-authorized',
      name: 'not-authorized',
      component: NotAuthorized
    }
  ]
})
