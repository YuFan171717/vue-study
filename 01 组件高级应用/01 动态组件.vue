<template>
  <div>
    <button @click="componentName = 'MyAccount'">显示我的账户</button>
    <button @click="componentName = 'MyInfo'">显示我的信息</button>
    <component :is="componentName"></component>
  </div>
</template>

<script>
//  1.引入
import MyAccount from 'cpns/MyAccount.vue'
import MyInfo from 'cpns/MyInfo.vue'
export default {
  data() {
    return {
      componentName: 'MyInfo',
    }
  },
  //  2.注册
  components: {
    MyAccount,
    MyInfo,
  },
}
</script>

<style></style>
