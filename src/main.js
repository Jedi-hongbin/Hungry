import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {Search,Cell,Picker,Popup} from 'mint-ui';
import 'mint-ui/lib/style.css'
import animate from 'animate.css'
import '../src/lib/MUI/css/mui.min.css'
import 'font-awesome/css/font-awesome.css'
import {WOW} from 'wowjs'
import moment from 'moment'
Vue.prototype.moment = moment

new WOW({
	live:false
}).init()

Vue.use(animate)
Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
Vue.use(ElementUI)

Vue.prototype.axios = axios
Vue.config.productionTip = false;

router.beforeEach((to, from,next) => {
	if(to.path == '/hongbao' || to.name == 'goodsinfo'){
		store.commit('ShowTabbber',false)
		//获取点击进入店铺，店铺的id放到vuex中
		if(to.name == 'goodsinfo'){
			store.commit('getRouterId',to.params.id.split('id=').join(''))
		}
	}else{
		store.commit('ShowTabbber',true)
	}
	
	next()
})

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app');
