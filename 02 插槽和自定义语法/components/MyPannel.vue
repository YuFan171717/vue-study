<template>
  <div id="app">
    <div class="title">
      <h4>{{ title }}</h4>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? '收起' : '展开' }}
      </span>
    </div>
    <div class="container" v-show="isShow">
      <!-- <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p> -->

      <slot>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </slot>
      <div class="comment">
        <slot name="comment" tip1='fuck you'  tip2='some plepeo'></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPannel',
  props: {
    title: {
      type: String,
      // require: true,
      default: '芙蓉送辛渐',
    },
  },
  name: 'MyPannel',
  data() {
    return {
      isShow: false,
    }
  },
}
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .title h4 {
      line-height: 2;
      margin: 0;
    }
    .container {
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .btn {
      /* 鼠标改成手的形状 */
      cursor: pointer;
    }
    .comment {
      background-color: yellow;
    }
  }
}
</style>
