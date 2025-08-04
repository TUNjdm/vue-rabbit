import { createRouter, createWebHistory } from 'vue-router'
import LoginIndex from '@/views/Login/Login-index.vue'
import LayoutIndex from '@/views/Layout/Layout-index.vue'
import HomeIndex from '@/views/Home/Home-index.vue'
import CategoryIndex from '@/views/Category/Category-index.vue'
import SubCategory from '@/views/SubCategory/SubCategory-index.vue'
import Detail from '@/views/Detail/Detail-index.vue'
import CartList from '@/views/CartList/CartList-index.vue'
import Checkout from '@/views/CheckOut/CheckOut-index.vue'
import PayIndex from '@/views/pay/Pay-index.vue'
import PayBack from '@/views/pay/PayBack.vue'
import MenberIndex from '@/views/Member/Menber-index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutIndex,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeIndex
        },
        {
          path: 'category/:id',
          name: 'category',
          component: CategoryIndex
        }
        ,
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: 'CartList',
          name: 'CartList',
          component: CartList
        }
        ,
        {
          path: 'checkout',
          name: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          name: 'pay',
          component: PayIndex,
        },
        {
          path: 'payBack',
          name: 'payBack',
          component: PayBack,
        },
        {
          path: 'member',
          name: 'member',
          component: MenberIndex,
          children: [
            {
              path: 'user',
              name: 'user',
              component: UserInfo
            },
            {
              path: 'order',
              name: 'order',
              component: UserOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginIndex,
    },
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0,
    }
  }
})

export default router
