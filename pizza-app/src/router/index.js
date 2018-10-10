import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/about/About'
import Menu from '../components/Menu.vue'
import Admin from '../components/Admin.vue'
import LogIn from '../components/Login.vue'
import Register from '../components/Register.vue'


// 二级路由
import Contect from '../components/about/Contect'
import Delivery from '../components/about/Delivery'
import OrderingGuide from '../components/about/OrderingGuide'
import History from '../components/about/History'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Home',component: Home},
    {path: '/About',name: 'About',component: About,redirect:"/about/contect",
      children:[
        {path: '/about/contect',name: 'contectLink',component: Contect},
        {path: '/about/delivery',name: 'deliveryLink',component: Delivery},
        {path: '/about/orderingGuide',name: 'orderingGuideLink',component: OrderingGuide},
        {path: '/about/history',name: 'historyLink',component: History},
        {path:"*",name:"redirect",redirect:"/about/contect"}
      ]
    },
    {path: '/menu',name: 'menu',component: Menu},
    {path: '/admin',name: 'admin',component: Admin,
      beforeEnter: (to, from, next) => {
        alert("独享守卫");
      }
    },
    {path: '/logIn',name: 'logInLink',component: LogIn},
    {path: '/register',name: 'register',component: Register},
    {path:"*",name:"redirect",redirect:"/"}
  ],
  mode:"history"
})
