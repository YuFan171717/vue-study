<template>
  <div>
    <div class="footer_wrap">
      <a href="#/find">发现音乐</a>
      <a a href="#/music">我的音乐</a>
      <a a href="#/friends">朋友</a>
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
export default {}
</script>

<style scoped>
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
