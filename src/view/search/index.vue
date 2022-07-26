<template>
  <div>
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        shape="round"
        v-model="search"
        :show-action="show"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @focus="change"
        @blur="changeBlur"
        @input="onInput"
        @cancel="onCancel"
      >
      </van-search>
    </form>

    <searchlist
      :list="searchList"
      :page="this.page"
      v-if="listShow"
      @getPage="getPage"
    ></searchlist>

    <!-- 搜索建议 -->
    <van-cell-group
      v-if="isShow"
      style="position: absolute; width: 100%; top: 100px; height: 100%"
    >
      <van-cell
        :title="item.name"
        v-for="item in searchSuggestList"
        :key="item.id"
        style="font-size: 14px"
        @click="searchItemClick(item.id)"
      />
    </van-cell-group>

    <keep-alive>
      <div class="search_wrap" v-if="!isShow && !listShow">
        <p class="hot_title">热门搜索</p>
        <div class="hot_name_wrap">
          <span
            class="hot_item"
            v-for="(item, index) in defaultKeywordList"
            :key="index"
            @click="hotSearch(item.first)"
            >{{ item.first }}</span
          >
        </div>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import { Toast } from "vant";
import { searchSuggestAPI, defaultKeywordsAPI } from "@/api";
import searchlist from "./list.vue";
export default {
  data() {
    return {
      searchSuggestList: [],
      defaultKeywordList: [],
      searchList: [],
      search: "",
      // 这是取消按钮
      show: false,
      // 这是搜索建议结果
      isShow: false,
      // 结果列表
      listShow: false,
      page: 0,
      time1: null,
    };
  },
  components: {
    searchlist,
  },
  async created() {
    var res1 = await defaultKeywordsAPI;
    0;
    this.defaultKeywordList = res1.data.result.hots;
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      this.search = "";
      this.show = false;
      this.isShow = false;
      this.listShow = false;
    },
    change() {
      this.isShow = true;
      this.show = true;
    },
    changeBlur() {
      this.isShow = true;
      this.listShow = true;
    },
    onInput() {
      this.isShow = true;
      if (this.time1) {
        clearTimeout(this.time1);
      }
      this.time1 = setTimeout(() => {
        searchSuggestAPI({ keywords: this.search, limit: 9 }).then((res) => {
          if (this.search !== "") {
            this.searchSuggestList = res.data.result.songs;
          } else {
            this.searchSuggestList = [];
            return;
          }
        });
      }, 300);

      this.page=0
    },
    getPage() {
      this.page = this.page + 1;
      searchSuggestAPI({
        keywords: this.search,
        limit: 20,
        offset: (this.page - 1) * 20,
      }).then((res) => {
        console.log(res);
        for (var i = 0; i < res.data.result.songs.length; i++) {
          this.searchList.push(res.data.result.songs[i]);
        }
        console.log(this.searchList);
      });
    },
    hotSearch(name) {
      this.search = name;
      searchSuggestAPI({
        keywords: this.search,
        limit: 20,
        offset: this.page,
      }).then((res) => {
        console.log(res);
        this.searchList = res.data.result.songs;
      });
      this.page=0
      this.listShow = true;
    },
    searchItemClick(id) {
      this.searchSuggestList.forEach((item) => {
        if (item.id === id) {
          this.search = item.name;
          searchSuggestAPI({
            keywords: this.search,
            limit: 20,
            offset: this.page,
          }).then((res) => {
            console.log(res);
            this.searchList = res.data.result.songs;
          });
        }
      });
      this.isShow = false;
      this.listShow = true;
    },
  },
  watch: {
    search: {
      handler() {
        console.log(this.search);
        if (this.search === "") {
          this.isShow = false;
          this.listShow = false;
          this.show = false;
          this.searchSuggestList = [];
        }
      },
    },
  },
};
</script>

<style>
/* 搜索容器的样式 */
.search_wrap {
  margin: 0.5rem;
  margin-top: 0rem;
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>