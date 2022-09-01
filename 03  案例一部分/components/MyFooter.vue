<template>
  <div class="my-tab-bar">
    <div
      :class="['tab-item', { current: index == active }]"
      v-for="(item, index) in list"
      :key="index"
      @click="
        ;[(active = index), $emit('change-component', item.componentName)]
      "
    >
      <!-- 图标 -->
      <span :class="`iconfont ${item.iconText}`"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
// validator:自定义校验器
// validator(){} 需要返回布尔值,true代表校验成功
export default {
  props: {
    list: {
      type: Array,
      require: true,
      validator(val) {
        const len = val.length
        if (len >= 0 && len <= 4) {
          return true
        }
        //失败的时候自己创造一个失败
        throw new Error('您传的list长度需要在0到4之间')
      },
    },
  },
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
  .iconfont {
    color: #1d7bff;
  }
}
</style>
