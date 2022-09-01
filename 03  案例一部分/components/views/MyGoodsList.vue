<template>
  <div>
    <my-table :list="goodList">
      <template #th>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>

      <template #tb="{good}">
        <td>{{ good.id }}</td>
        <td>{{ good.goods_name }}</td>
        <td>{{ good.goods_price }}</td>
        <!-- <td>{{ good.tags }}</td> -->
        <td>
          <add-tag @add-info="good.tags.push($event)"></add-tag>
          <span
            class="badge bg-warning text-dark"
            v-for="(item, index) in good.tags"
            :key="index"
          >
            {{ item }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delGood(good.id)">
            删除
          </button>
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from './MyTable.vue'
import addTag from './addTag.vue'

import axios from '@/utills/requires.js'
export default {
  components: {
    MyTable,
    addTag,
  },
  data() {
    return {
      goodList: [],
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
    async getGoods() {
      try {
        const { data } = await axios({
          url: '/api/goods',
        })
        this.goodList = data.data
      } catch (error) {
        alert('请求商品列表失败，请刷新')
      }
    },

    delGood(id) {
      // console.log(id)
      this.goodList = this.goodList.filter((item) => item.id != id)
    },
  },
}
</script>

<style scoped lang="less"></style>
