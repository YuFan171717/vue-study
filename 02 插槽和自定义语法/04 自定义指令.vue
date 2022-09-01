<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
//自定义指令

//v-bind  ,v-model

//自己的指令
//v-指令名
//v-focus

//自定义指令的定义
// derectives:{指令的名字 ：{配置项。。。}}

//配置项
//inserted函数，当我们使用指令的dom插入文档会被调用
export default {
  directives: {
    focus: {
      inserted(el) {
        //el是绑定v-focus的元素 
        el.focus()
      },
    },
  },
}
</script>

<style></style>
