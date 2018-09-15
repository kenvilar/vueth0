import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Secret from './views/Secret'
import NotAuthorized from './views/NotAuthorized'
import Callback from './views/Callback'

Vue.use(Router)

// noinspection JSAnnotator
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
