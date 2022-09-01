<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/music">我的音乐</router-link>
      <router-link to="/friends">朋友</router-link>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//配置vue-router  在mian.js
//告诉vue-router 渲染在哪里\\
// -<router-view></router-view>

// 内置组件
//  - component，keep-alive，slot,router-view

// 内置组件
// <router-link></router-link>  在a标签的基础上添加了很多功能的a标签

// 跟a标签的不同之处
//  - a标签是通过href属性跳转的
//  - <router-link></router-link> 是通过to属性进行跳转的 不需要加#
//    点击routerlink时候添加了两个类名，router-link-exact-active   router-link-active
export default {}
</script>

<style scoped>
.router-link-exact-active {
  background-color: yellow !important;
}
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
</style>
