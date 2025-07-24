// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
  install(app) {
    // 懒加载指令
    app.directive('img-lazy', {
      // el:指令绑定的元素，binding:绑定的信息
      mounted(el, binding) {
        el.src = binding.value
        console.log(el, binding.value);
        // 监听元素是否进入视口，进入则停止监听
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting)
            if (isIntersecting) {
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}
