import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/',
      name: '',
      component: () => import('@/pages/home/home'),
      children: [
        {
          path: '/recommend',
          name: 'Recommend',
          component: () => import('@/pages/recommend/recommend')
        },
        {
          path: '/phone',
          name: 'Phone',
          component: () => import('@/pages/phone/phone')
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/pages/cart/cart')
    },
    {
      path: '/classify',
      name: 'Classify',
      component: () => import('@/pages/classify/classify')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/city')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
