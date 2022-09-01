import Vue from 'vue'
import App from './App.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//引入组件

import DiscoveryMusic from './views/DiscoveryMusic.vue'
import MyMusic from './views/MyMusic.vue'
import MyFriends from './views/MyFriends.vue'

//对于webpack,没有ESModule,所有的模块化都会转换成Commonjs
// -ESModule可以引入Commonjs,Commonjs可以引入ESModule
//ESModule里的默认引入,可以引入Commonjs的module.exports
//3.配置VueRouter
// 1-引入(vue-router包暴露的是一个构造函数)
// 2-Vue.use(VueRouter) 开启Vue-router的功能,往vue身上挂载两个属性,一个$route(代表的当前路由)$router(路由管理器)
// 3-配置路由 const router = new VueRouter(配置对象)
// 4-把router放到vue实列上
//引入v-router
import VueRouter from 'vue-router'
//在Vue上挂载2个属性，一个$route(当前路由)  $router（路由管理器）
Vue.use(VueRouter)
//配置路由
const router = new VueRouter({
  //配置映射关系
  //-path:路径 component：组件
  routes: [
    {
      path: '/find',
      component: DiscoveryMusic,
    },
    {
      path: '/music',
      component: MyMusic,
    },
    {
      path: '/friends',
      component: MyFriends,
    },
  ],
})

Vue.config.productionTip = false

new Vue({
  //把配置好的router放到vue中
  router,
  render: (h) => h(App),
}).$mount('#app')
