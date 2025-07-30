// src/stores/cartStore.js
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // 定义state - cartList
  const cartList = ref([])

  // 定义action - addCart
  const addCart = (goods) => {
    // 添加购物车操作
    // 已添加过的商品count+1
    // 没添加过push
    // 通过匹配传递过来的商品对象中的skuId能不能在cartList中找到
    const item = cartList.value.find(item => item.skuId === goods.skuId)
    if (item) {
      // 已添加过
      item.count += goods.count
    } else {
      // 没添加过
      cartList.value.push(goods)
    }
  }

  // 修改后的删除函数
  const delCart = (skuId) => {
    // 删除购物车操作
    // 通过匹配传递过来的商品对象中的skuId能不能在cartList中找到
    const itemIndex = cartList.value.findIndex(item => item.skuId === skuId)
    // findIndex 返回 -1 表示没找到，返回 >=0 表示找到了对应元素的索引
    if (itemIndex !== -1) {
      // 找到了才执行删除操作
      cartList.value.splice(itemIndex, 1)
    }
  }
// 单选功能
const singleCheck = (skuId,selected)=>{
  const item = cartList.value.find(item => item.skuId === skuId)
  item.selected = selected
}
  // 计算属性
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck
  }
}, {
  persist: true
})
