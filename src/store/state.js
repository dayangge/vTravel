let defaultcity = '北京'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultcity,
  currentPageIndex: 1,
  carts: localStorage['carts'] ? JSON.parse(localStorage['carts']) : [],
  address: localStorage['address'] ? JSON.parse(localStorage['address']) : []
}
