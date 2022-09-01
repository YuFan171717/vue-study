<template>
  <div>
    <my-pannel></my-pannel>
    <my-pannel title="静夜思">
      <p>床前明月光,</p>
      <p>疑是地上霜</p>
      <p>举头望明月，</p>
      <p>低头思故乡。</p>
      <template v-slot:comment>
        <span>
          天不生我李太白，剑道万古长如夜
        </span>
      </template>
    </my-pannel>
  </div>
</template>

<script>
//具名插槽
//  给slot起个名字

//1.<slot name='名字'></slot>
//2.在父组件传递
//<template  v-slot='插槽的名字'>传递结构</template>
import MyPannel from 'cpns/MyPannel.vue'

export default {
  components: {
    MyPannel,
  },
}
</script>

<style></style>
