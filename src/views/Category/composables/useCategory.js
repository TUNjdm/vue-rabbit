// 封装业务相关代码
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getTopCategoryAPI } from '@/apis/category'

export const useCategory = () => {
  const categoryData = ref({})
  const route = useRoute()

  const getCategory = async () => {
    try {
      const res = await getTopCategoryAPI(route.params.id)
      categoryData.value = res.result
    } catch (error) {
      console.error('获取分类数据失败:', error)
    }
  }

  // 监听路由参数 id 的变化
  watch(
    () => route.params.id,
    () => {
      getCategory()  // 当 id 变化时重新获取数据
    }
  )

  // 合并 onMounted 调用
  onMounted(() => {
    getCategory()
  })

  return {
    categoryData
  }
}
