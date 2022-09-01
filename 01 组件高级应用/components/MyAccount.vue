<template>
  <div>
    <label>
      <span>用户名:</span>
      <input type="text" placeholder="请输入账号" />
    </label>

    <br />

    <label>
      <span>密码:</span>
      <input type="text" placeholder="请输入密码" />
    </label>
  </div>
</template>

<script>
export default {
  created() {
    console.log('a组件创建了')
  },
  destroyed() {
    console.log('a组件销毁了')
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
