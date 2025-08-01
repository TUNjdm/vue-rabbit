import axios from 'axios'
// 显示服务器返回消息
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // pinia中获取token数据
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  // 按照后端要求拼接token数据
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  // 统一处理错误
  ElMessage({
    type: 'error',
    message: e.response.data.message,
  })
  // 401token失效处理
  // 清除本地数据
  // 跳转到登录页面
  if (e.response.status === 401) {
    userStore.clearUserInfo()
    router.replace('/login')
  }
  return Promise.reject(e)
})
export default httpInstance
