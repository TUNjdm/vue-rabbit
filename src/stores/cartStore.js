// src/stores/cartStore.js
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'
export const useCartStore = defineStore('cart', () => {
  // 定义state - cartList
  const cartList = ref([])
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  // 定义action - addCart
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      // 登录之后购物车逻辑
      await insertCartAPI({ skuId, count })
      updateNewList()
    } else {
      const item = cartList.value.find(item => item.skuId === goods.skuId)
      if (item) {
        // 已添加过
        item.count += goods.count
      } else {
        // 没添加过
        cartList.value.push(goods)
      }
    }
  }
  // 添加购物车操作
  // 已添加过的商品count+1
  // 没添加过push
  // 通过匹配传递过来的商品对象中的skuId能不能在cartList中找到

  // 修改后的删除函数
  const delCart = async (skuId) => {
    // 删除购物车操作

    if (isLogin.value) {
      // 登录之后购物车逻辑
      await delCartAPI([skuId])
      updateNewList()
    } else {
      // 未登录购物车逻辑
      // 通过匹配传递过来的商品对象中的skuId能不能在cartList中找到
      const itemIndex = cartList.value.findIndex(item => item.skuId === skuId)
      // findIndex 返回 -1 表示没找到，返回 >=0 表示找到了对应元素的索引
      if (itemIndex !== -1) {
        // 找到了才执行删除操作
        cartList.value.splice(itemIndex, 1)
      }
    }
  }
  // 清除购物车
  const clearCart = () => {
    cartList.value = []
  }
  // 获取最新购物车列表action
  const updateNewList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }
  // 单选功能
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find(item => item.skuId === skuId)
    item.selected = selected
  }
  // 全选功能
  const checkAll = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }
  // 计算属性
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
  // 计算选中的商品数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  // 计算选中的商品总价
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
  // 是否全选
  const isAll = computed(() => cartList.value.every(item => item.selected))
  return {
    isAll,
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    checkAll,
    selectedCount,
    selectedPrice,
    clearCart,
    updateNewList
  }
}, {
  persist: true
})
