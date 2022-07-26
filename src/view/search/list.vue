<template>
  <div>
    <p class="title w1">搜索结果</p>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        :title="item.name"
        :label="item.ar[0].name + ' - ' + item.name"
        :id="item.id"
        v-for="(item,index) in list"
        :key="index"
        @click="play(item.id)"
      >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="play" class="play-circle-o" size="0.6rem" />
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  props:['list','page'],
  data() {
    return {
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      this.$emit('getPage')
      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.list.length >= 40) {
        this.finished = true;
      }
    },play(id){
      this.$router.push({
        path:'/play',
        query:{
          id:id
        }
      })
    }
  },
};
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
.w1 {
  margin-bottom: 0px;
}
</style>