import Vue from 'vue'
import VueRouter from 'vue-router'
import Entry from '../views/Entry.vue'
import Attributions from '../views/Attributions.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Entry',
    component: Entry
  },
  {
    path: '/weather-journal',
    name: 'WeatherJournal',
    // route level code-splitting
    // this generates a separate chunk (attributions.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "attributions" */ '../views/WeatherJournal.vue')
  },
  {
    path: '/attributions',
    name: 'Attributions',
    component: Attributions
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
