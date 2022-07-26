<template>
  <div>
    <navbar class="n"></navbar>
    <router-view class="w"></router-view>
    <tabbar class="t"></tabbar>
  </div>
</template>

<script>
import "@/init/reset.css"
import "@/init/flexible"
import tabbar from "./components/tabbar.vue";
import navbar from "./components/navbar.vue";
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    tabbar,
    navbar,
  },
};
</script>

<style scoped>
.n{
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
}
.w{
  margin-top: 50px;
}
.t{
  margin-top: 40px;
}
</style>