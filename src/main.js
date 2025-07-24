import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式
import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
// 定义全局指令
app.directive('img-lazy', {
  // el:指令绑定的元素
  // binding:绑定的信息
  mounted(el, binding) {
    el.src = binding.value
    console.log(el, binding.value);
    useIntersectionObserver(
      el,
    ([{isIntersecting}]) => {
        console.log(isIntersecting);
      },
    )
  }
})
