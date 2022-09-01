<template>
  <div>
    <button
      type="button"
      class="btn btn-primary btn-sm"
      v-if="isShowBtn"
      @click="isShowBtn = false"
    >
      +Tag
    </button>
    <input
      type="text"
      style="width: 70px;"
      v-else
      @blur="addTag"
      @keydown.enter="addTag"
      v-focus
      v-model.trim="iptVal"
    />
  </div>
</template>

<script>
export default {
  //创建自定义指令v-focus
  directives: {
    focus: {
      inserted(ele, binding) {
        ele.focus()
      },
    },
  },
  data() {
    return {
      isShowBtn: true,
      iptVal: '',
    }
  },
  methods: {
    addTag() {
      this.isShowBtn = true

      //合法性校验
      if (this.iptVal !== '') this.$emit('add-info', this.iptVal)
      this.iptVal = ''
    },
  },
}
</script>

<style></style>
