import Vue from 'vue'
import App from './App.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@/assets/fonts/iconfont.css'
Vue.config.productionTip = false

import axios from './utills/requires.js'
new Vue({
  render: (h) => h(App),
}).$mount('#app')
