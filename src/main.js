import Vue from 'vue'
import App from './App.vue'
import "@/init/flexible"
import "@/init/reset.css"
import 'bootstrap/dist/css/bootstrap.css'
import router from "@/router"
import { Tabbar, TabbarItem, NavBar,Grid, GridItem,Image as VanImage,Cell,CellGroup,Icon,Search,List} from 'vant';
Vue.use(List);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
