import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

/* let defaultcity = '北京'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {} */
export default new Vuex.Store({
  state,
  mutations
  /* state: {
    city: defaultcity || '北京'
  },
   actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
   mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  } */
})
