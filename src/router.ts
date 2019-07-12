import Vue from 'vue'
import Router from 'vue-router'
import { Dashboard, StatCenter, Trade, Goods, OrderList, Customer, Setting, NotFound } from '@/views/homepages'
import { Login, Home } from '@/views'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/login',
      name: 'login',
      component: Login,
      props: (route) => ({ to: route.query.to })
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          redirect: 'dashboard'
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'statcenter',
          name: 'statcenter',
          component: StatCenter
        },
        {
          path: 'trade',
          name: 'trade',
          component: Trade
        },
        {
          path: 'goods',
          name: 'goods',
          component: Goods
        },
        {
          path: 'orderlist',
          name: 'orderlist',
          component: OrderList
        },
        {
          path: 'customer',
          name: 'customer',
          component: Customer
        },
        {
          path: 'setting',
          name: 'setting',
          component: Setting
        },
        {
          path: '*',
          name: 'notfound',
          component: NotFound
        }
      ]
    }
  ]
})
