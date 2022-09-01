<template>
  <div>
    <my-pannel></my-pannel>
    <my-pannel title="静夜思">
      <p>床前明月光,</p>
      <p>疑是地上霜</p>
      <p>举头望明月，</p>
      <p>低头思故乡。</p>
      <!-- <template #comment="scope"> -->
      <!-- scope可以解构 -->

      <template #comment="{tip1,tip2}">
        <i>{{ tip1 }}</i>
        <i>{{ tip2 }}</i>
        <br />
        <span>
          天不生我李太白，剑道万古长如夜
        </span>
      </template>
    </my-pannel>
  </div>
</template>

<script>
//作用域插槽
// 插槽-子组件不想写死，让父组件传值

//作用域插槽
// 插槽-子组件不想写死，让父组件传值，给父组件一点提示

//1 给slot传递属性
//2 v-slot:comment(插槽名)='变量'

//v-slot可以简写为 #
import MyPannel from 'cpns/MyPannel.vue'

export default {
  components: {
    MyPannel,
  },
}
</script>

<style></style>
