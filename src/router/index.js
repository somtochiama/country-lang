import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Email from '../views/Email.vue'
import Intro from '../views/Intro.vue'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '', name: 'home', component: Intro },
      { path: 'email', name: 'email', abstract: true, component: Email },
      {
        path: 'select',
        abstract: true,
        component: () => import(/* webpackChunkName: "home" */ '../views/Select.vue'),
        beforeEnter: (to, from, next) => {
          if (store.state.email) {
            next()
          } else {
            next({
              name: 'email'
            })
          }
        }
      },
      { path: 'bye', abstract: true, component: () => import('../views/Goodbye.vue') }
    ]
  },
  {
    path: '/List',
    name: 'list',
    component: List
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
