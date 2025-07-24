import { createRouter, createWebHistory } from 'vue-router'
import LoginIndex from '@/views/Login/Login-index.vue'
import LayoutIndex from '@/views/Layout/Layout-index.vue'
import HomeIndex from '@/views/Home/Home-index.vue'
import CategoryIndex from '@/views/Category/Category-index.vue'
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
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginIndex,
    },
  ],
})

export default router
