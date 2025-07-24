// 封装banner轮播图代码
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'
export  function useBanner() {
  const bannerList = ref([])
  const getBanner = async () => {
    try {
      const res = await getBannerAPI({
        distributionSite: '2'
      })
      bannerList.value = res.result
    } catch (error) {
      console.error('获取轮播图数据失败:', error)
    }
  }

  // 合并 onMounted 调用
  onMounted(() => {
    getBanner()
  })
  return {
    bannerList
  }
}
