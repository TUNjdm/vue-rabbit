import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';
export const useCategoryStore = defineStore('category', () => {
  // 导航列表逻辑
  // state获取导航列表数据
  // 使用 ref 创建一个响应式的变量 categoryList，初始值为一个空数组
  const categoryList = ref([])
  // action获取导航列表数据的方法
  const getCategory = async () => {
    // 调用 getCategoryAPI 函数获取导航列表数据
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }
  return {
    categoryList,
    getCategory
  }
})
