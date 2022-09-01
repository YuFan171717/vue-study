<template>
  <div>
    <label>
      <span>人生格言:</span>
      <input type="text" placeholder="请输入账号" />
    </label>

    <br />

    <label>
      <span>自我介绍:</span>
      <textarea cols="20" rows="5"></textarea>
    </label>
  </div>
</template>

<script>
export default {
  created() {
    console.log('b组件创建了')
  },
  destroyed() {
    console.log('b组件销毁了')
  },

  activated() {
    console.log('a组件激活')
  },
  deactivated() {
    console.log('a组件失活')
  },
}
</script>

<style></style>
