<template>
  <van-nav-bar :title="title" :left-arrow="arrow" @click-left="onClickLeft" />
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.meta.title,
      arrow: this.$route.meta.arrow,
    };
  },
  watch: {
    $route: {
      handler() {
        this.title = this.$route.meta.title;
        this.arrow = this.$route.meta.arrow;
      },
    },
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/layout",
      });
    },
  },
};
</script>

<style>
</style>