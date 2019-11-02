// import Vue from 'vue'
// import Router from 'vue-router'
import Personal from './personal'


Vue.use(VueRouter)





export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve=>require(['@/views/home/home'],resolve),
    },
    ...Personal
  ],
})




