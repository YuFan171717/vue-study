<template>
  <div>
    发现音乐
    <h1>歌名：{{ $route.query.musicname }}</h1>
    <h3>歌手:{{ $route.query.singer }}</h3>
  </div>
</template>

<script>
//$route 代表当前的路由
// query:{} 保存通过query传参的参数
// path  当前路由的路径
export default {
  created() {
    console.log(this.$route.query.musicname)
  },
}
</script>

<style></style>
