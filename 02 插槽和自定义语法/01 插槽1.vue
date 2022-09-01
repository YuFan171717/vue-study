<template>
  <div>
    <my-pannel></my-pannel>
    <my-pannel title="静夜思">
      <p>床前明月光,</p>
      <p>疑是地上霜</p>
      <p>举头望明月，</p>
      <p>低头思故乡。</p>
    </my-pannel>
  </div>
</template>

<script>
import MyPannel from 'cpns/MyPannel.vue'
//插槽

//props： 子组件属性不想写死，让父组件传值
//插槽:子组件结构不想写死，让父组件传过来

//语法
//  子组件不想写死的结构用<slot></slot>

//插槽的默认内容
//<slot>默认结构</slot>
export default {
  components: {
    MyPannel,
  },
}
</script>

<style></style>
