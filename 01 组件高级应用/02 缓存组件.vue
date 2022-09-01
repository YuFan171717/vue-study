<template>
  <div>
    <button @click="componentName = 'MyAccount'">显示我的账户</button>
    <button @click="componentName = 'MyInfo'">显示我的信息</button>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
//  1.引入 
import MyAccount from 'cpns/MyAccount.vue'
import MyInfo from 'cpns/MyInfo.vue'

//内置组件<keep-alive>需要缓存不销毁的组件</keep-alive>
//-一般包裹可开关的组件
//比如component、v-if、v-else、路由组件(router-view)等
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
