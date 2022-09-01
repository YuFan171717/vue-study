<template>
  <div>
    <input type="text" v-focus:color.red="msg" />
  </div>
</template>

<script>
//完整的指令

//v-model.trim

//v-slot:插槽的名字

//v-指令名 ：指令参数=“绑定的值 ”

//指令的配置对象
//el 绑定的对象
//- binding  指令绑定的信息
//update(){}  当指令绑定的值发生变化的时候被调用
//update(){}和inserted( ){ }中都可以使用自己定义的参数ele 和binding
export default {
  data() {
    return {
      msg: '你好',
    }
  },
  directives: {
    focus: {
      inserted(el, binding) {
        //el是绑定v-focus的元素

        //modifiers  是修饰符
        if (binding.modifiers.red) {
          el.style.color = 'red'
        }
        el.focus()
        el.value = binding.value
      },
      update(el, binding) {
        el.value = binding.value
      },
    },
  },
}
</script>

<style></style>
