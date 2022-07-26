<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item  replace to="/layout/home"  icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item  replace to="/layout/search"  icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },watch: {
    $route: {
      handler() {
        this.active=this.$route.meta.index
      },
    },
  },

};
</script>

<style>
</style>