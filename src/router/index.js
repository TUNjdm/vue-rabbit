import { createRouter, createWebHistory } from 'vue-router'
import LoginIndex from '@/views/Login/Login-index.vue'
import LayoutIndex from '@/views/Layout/Layout-index.vue'
import HomeIndex from '@/views/Home/Home-index.vue'
import CategoryIndex from '@/views/Category/Category-index.vue'
import SubCategory from '@/views/SubCategory/SubCategory-index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
      path: '/',
      name: 'layout',
      component: LayoutIndex,
      children:[
        {
          path:'',
          name:'home',
          component:HomeIndex
        },
        {
          path:'category/:id',
          name:'category',
          component:CategoryIndex
        }
        ,
        {
          path:'category/sub/:id',
          name:'subCategory',
          component:SubCategory
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
  scrollBehavior(){
    return {
      top:0,
    }
  }
})

export default router
