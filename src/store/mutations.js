import * as type from './type.js'

const matutaions = {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
    }
  },
  [type.SET_PAGEINDEX] (state, index) {
    state.currentPageIndex = index
  },
  //  购物车
  [type.ADD_CARTS] (state, data) {
    state.carts.push(data)
    localStorage.setItem('carts', JSON.stringify(state.carts))
  },
  //  购物车删除state
  [type.DEL_CARTS] (state, index) {
    state.carts.splice(index, 1)
    localStorage.setItem('carts', JSON.stringify(state.carts))
  },
  [type.ADD_CARTS_NUM] (state, payload) {
    state.carts[payload.index].goodsNum += payload.num
    localStorage.setItem('carts', JSON.stringify(state.carts))
  },
  [type.REDUCE_CARTS_NUM] (state, payload) {
    state.carts[payload.index].goodsNum -= payload.num
    localStorage.setItem('carts', JSON.stringify(state.carts))
  },
  [type.MODIFY_CHECKED] (state, payload) {
    state.carts[payload.index].checked = payload.num
    localStorage.setItem('carts', JSON.stringify(state.carts))
  },
  [type.SETTLEMENT] (state) {
    state.carts = []
    localStorage.setItem('carts', [])
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
  }
}
export default matutaions
