import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import About from './views/About/About.vue'
import Product from './views/Product/Product.vue'

import ShoppingCart from './views/ShoppingCart/ShoppingCart.vue'
import Success from './views/Success/Success.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    }
  ]
})