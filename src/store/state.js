let defaultcity = '北京'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultcity,
  currentPageIndex: 1,
  article: localStorage['article'] ? JSON.parse(localStorage['article']) : [],
  collections: localStorage['collections'] ? JSON.parse(localStorage['collections']) : [],
  carts: localStorage['carts'] ? JSON.parse(localStorage['carts']) : [],
  orders: localStorage['orders'] ? JSON.parse(localStorage['orders']) : [],
  todos: localStorage['todos'] ? JSON.parse(localStorage['todos']) : [],
  address: localStorage['address'] ? JSON.parse(localStorage['address']) : []
}
