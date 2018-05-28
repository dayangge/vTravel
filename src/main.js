// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'babel-polyfill'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(Mint)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
