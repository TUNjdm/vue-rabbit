import  httpInstance from '@/utils/http'
// 获取banner
// 定义一个名为 getBannerAPI 的函数，并将其导出，以便其他文件可以引入使用
export function getBannerAPI() {
    // 调用 httpInstance 函数，传入一个配置对象
  return httpInstance({
    // 配置请求的 URL，表明请求的是首页轮播图数据的接口
    url: '/home/banner'
  })
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return  httpInstance({
    url: '/home/hot'
  })
}
