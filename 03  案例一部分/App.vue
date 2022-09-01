<template>
  <div class="app">
    <my-header color="yellow" title="tab案例"></my-header>
    <component :is="componentName"></component>
    <my-footer
      :list="tabList"
      @change-component="componentName = $event"
    ></my-footer>
  </div>
</template>

<script>
import MyHeader from 'cpns/MyHeader.vue'
import MyFooter from 'cpns/MyFooter.vue'
import MyGoodsList from 'cpns/views/MyGoodsList.vue'
import MyGoodsSearch from 'cpns/views/MyGoodsSearch.vue'
import MyUserInfo from 'cpns/views/MyUserInfo.vue'


export default {
  components: {
    MyHeader,
    MyFooter,
    MyUserInfo,
    MyGoodsList,
    MyGoodsSearch,
  },
  data() {
    return {
      componentName: 'MyGoodsList',
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    }
  },
}
</script>

<style scoped>
.app {
  padding: 45px 0 50px;
}
</style>
