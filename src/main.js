import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'
import vueTap from 'v-tap'
import fastclick from 'fastclick'
import Vuex from 'vuex'

Vue.use(vueTap)
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  // 添加的商品元素
  addCartEl: {},
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
const router = new VueRouter({
  routes: [{
    path: '/goods/:openId/:shopId',
    component: goods
  }, {
    path: '/ratings/:openId/:shopId',
    component: ratings
  }, {
    path: '/seller/:openId/:shopId',
    component: seller
  }],
  linkActiveClass: 'active'
})

new Vue({
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')
