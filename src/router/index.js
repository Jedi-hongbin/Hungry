import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
		component: () => import('../views/About.vue')
	},
	{
		path: '/hongbao',
		name: 'hongbao',
		component: () => import('../views/hongbao.vue')
	},
	{
		path: '/goodsinfo/:id',
		name: 'goodsinfo',
		component: () => import('../views/goodsinfo.vue')
	},
	{
		path: '/car',
		name: 'car',
		component: () => import('../views/car.vue')
	}
]

const router = new VueRouter({
	routes,
	linkActiveClass: 'is-active',
	mode: 'history',
})

export default router
