// import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import '../src/style/reset.css'
import api from './api/install'

import './plugins/element.js'

Vue.use(api)

Vue.config.productionTip = false

// 全局路由守卫
// router.beforeEach((to, from, next) => {
  // console.log('to',to.name)
  // console.log('from',from.name)
  // store.commit('FUN',{code:"3"})  
  // next()
//   const nextRoute = ['User', 'Cart', 'GoodsDetail'] // 需要登录的页面
//   let isLogin = localTake('userMsg')  // 判断是否登录，本地存储有用户数据则视为已经登录
//   // 未登录状态；当路由到 nextRoute 指定页时，跳转至 UserLogIn
//   if (nextRoute.indexOf(to.name) >= 0) { // 检测是否登录的页面
//     if (!isLogin) { // 如果未登录（本地存储无用户数据），并且要跳到登录页面
//       if (from.name === 'UserLogIn') {
//         next('/')
//         return
//       }
// 　　　　// 登录后，跳到到当前页面
//       router.push({
//         name: 'UserLogIn',
//         params: {redirect: to.fullPath}  
//       })
//     }
//   }
//   // 已登录状态；当路由到 UserLogIn 时，跳转至 Home
//   if (to.name === 'UserLogIn') {
//     if (isLogin) {
//       next('/')
//       return
//     }
//   }
//   next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
// })



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
