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
        },
        {
          path: '/smart',
          name: 'Smart',
          component: () => import('@/pages/smart/smart')
        },
        {
          path: '/tv',
          name: 'tv',
          component: () => import('@/pages/tv/tv')
        },
        {
          path: '/pc',
          name: 'pc',
          component: () => import('@/pages/pc/pc')
        },
        {
          path: '/full',
          name: 'full',
          component: () => import('@/pages/full/full')
        },
        {
          path: '/life',
          name: 'life',
          component: () => import('@/pages/life/life')
        },
        {
          path: '/box',
          name: 'box',
          component: () => import('@/pages/box/box')
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
