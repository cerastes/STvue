// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 全局守卫
// router.beforeEach((to, from, next) => {
//   if(to.path=="/logIn" || to.path=="/Register"){
//     next();
//   }
//   else{
//   alert("还没有登录请先登录");
//   next("/logIn");
//   }
//   console.log(to );
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
