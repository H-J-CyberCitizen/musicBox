<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-grid :border="false" :column-num="3" :gutter="0">
      <van-grid-item v-for="item in resMusic" :key="item.id">
        <van-image width="100%" height="3rem" fit="cover" :src="item.picUrl" />
        <p class="song_name">{{ item.name }}</p>
      </van-grid-item>
    </van-grid>

    <p class="title w1">最新歌曲</p>
    <van-cell-group>
      <van-cell center :title="item.name" :label="item.song.artists[0].name + ' - ' +item.name" v-for="item in resSong" :key="item.id" @click="play(item.id)">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="play" class="play-circle-o" size="0.6rem" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { recommendMusicAPI, recommendSongAPI } from "@/api";
export default {
  async created() {
    const res1 = await recommendMusicAPI({ limit: 6 });
    this.resMusic = res1.data.result;

    const res2 = await recommendSongAPI({ limit: 20 });
    console.log(res2);
    this.resSong = res2.data.result;
  },
  data() {
    return {
      resMusic: [],
      resSong: [],
    };
  },
  methods:{
    play(id){
      this.$router.push({
        path:'/play',
        query:{
          id:id
        }
      })
    }
  }
};
</script>

<style>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-top: 0.16rem;
  margin-bottom: 0.1rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
.van-image__img {
  border-radius: 10px !important;
}

.van-grid {
  margin-top: -10px;
}
.play-circle-o{
  font-size: 16px;
  line-height: 50px;
}
.w1{
  margin-bottom: 0px;
}

</style>