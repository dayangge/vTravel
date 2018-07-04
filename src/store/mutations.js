import * as type from './type.js'
import { MessageBox } from 'mint-ui'

const matutaions = {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  [type.SET_PAGEINDEX] (state, index) {
    state.currentPageIndex = index
  },
  //  购物车
  [type.ADD_CARTS] (state, data) {
    state.carts.push(data)
    console.log('vuex' + state.carts[0].goodsNum)
  },
  //  购物车删除state
  [type.DEL_CARTS] (state, index) {
    state.carts[index].splice(index, 1)
  },
  [type.ADD_CARTS_NUM] (state, payload) {
    state.carts[payload.index].goodsNum += payload.num
    console.log('vuex' + state.carts[payload.index].goodsNum)
  },
  [type.REDUCE_CARTS_NUM] (state, payload) {
    state.carts[payload.index].goodsNum -= payload.num
  },
  // 文章
  [type.SET_ARTICLE] (state, data) {
    state.article.push(data)
  },
  // 商品
  [type.SET_GOODS] (state, data) {
    state.collections.push(data)
  },
  // 订单
  [type.SET_ORDERS] (state, data) {
    state.orders.push(data)
  },
  // 地址
  [type.SET_ADDRESS] (state, data) {
    state.address.push(data)
    localStorage.setItem('address', JSON.stringify(state.address))
  },
  // 文章删除
  del: (state, index) => {
    MessageBox.confirm('确定取消收藏该文章么？').then(action => {
      state.article.splice(index, 1)
      localStorage.setItem('article', JSON.stringify(state.article))
    })
  },
  // 商品删除
  cancel: (state, index) => {
    MessageBox.confirm('确定取消收藏该商品么？').then(action => {
      state.collections.splice(index, 1)
      localStorage.setItem('collections', JSON.stringify(state.collections))
    })
  },
  laji: (state, index) => {
    MessageBox.confirm('确定删除收货地址么？').then(action => {
      state.address.splice(index, 1)
      localStorage.setItem('address', JSON.stringify(state.address))
    })
  },
  // 购物车删除
  shanchu: (state, index) => {
    MessageBox.confirm('确定删除该商品么？').then(action => {
      state.carts.splice(index, 1)
      localStorage.setItem('carts', JSON.stringify(state.carts))
    })
  },
  // 订单删除
  odefault: (state, index) => {
    MessageBox.confirm('确定删除该订单么？').then(action => {
      state.orders.splice(index, 1)
      localStorage.setItem('orders', JSON.stringify(state.orders))
    })
  },

  // 数量加
  add (state, index) {
    state.carts[index].value++
  },
  // 数量减
  reduce (state, index) {
    state.carts[index].value === 1 ? state.carts[index].value = 1 : state.carts[index].value--
  },

  settlement: (state, data) => {
    state.carts = []
    localStorage.setItem('carts', JSON.stringify(state.carts))
  }
}

export default matutaions
