import Vue from 'vue'
import layout from "@/view/Layout"
import search from "@/view/search"
import searchList from "@/view/search/list.vue"
import home from "@/view/Home"
import play from "@/view/palyMusic"

import VueRouter from "vue-router"
Vue.use(VueRouter)
const routes = [{
  path: "/",
  redirect: '/layout'
},
{
  path: '/layout',
  component: layout,
  redirect: '/layout/home',
  children: [
    {
      path: 'home',
      component: home,
      meta: {
        // meta: 保存路由对象的额外信息
        title: '主页'
        , index: 0,
        arrow: false
      }
    }, {
      path: 'search',
      component: search,
      meta: {
        title: '搜索',
        index: 1,
        arrow: true
      }
    }, {
      path: 'searchList',
      component: searchList
    }
  ]
}, 
{
  path:'/play',
  component:play
}
]
const router = new VueRouter({ routes: routes })

export default router