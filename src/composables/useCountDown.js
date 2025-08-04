import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'
// 封装倒计时逻辑函数
export const useCountDown = () => {
  // 响应式数据
  const time = ref(0)
  let timer = null
  // 格式化时间
  const formatTime = computed(() =>
    dayjs.unix(time.value).format('mm分ss秒')
  )
  // 开启倒计时函数
  const start = (currentTime) => {
    // 开始倒计时的逻辑
    time.value = currentTime
    timer = setInterval(() => {
      if (time.value > 0) {
        time.value--
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }
  // 组件销毁清除定时器
  onUnmounted(() => {
    timer.value && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}
