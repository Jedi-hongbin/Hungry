import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isShowTabbar: true,
		deIndex: 1,
		from: ["北京", '辽宁', '吉林', '岛市', '天津', '山西'],
		addres: [
			["北京"],
			["丹东", "沈阳", "本溪", "大连", "鞍山", "丹东凤城蓝旗互助刘家沟"],
			["长春", "小吉林"],
			["老八家", "老八家茅厕"],
			["石家庄", "小天津"],
			["太原", "合肥"]
		],
		dingwei: "",
		isChangeDV: false,
		routerId: -1,
		getH: 86,
		headBackH: 0,
		isFixed: false,
		goodslist: [],
		clickMsg: {},
		haveCar: false,
		allBuy:[],
		currBuy:[],
		clickTime:[],
		insterIndex:[],
		storeEnter:['老八美食城','叫了个老八','抖音美食家','还是老八','就老八','发发发'],
		style:'v'
	},
	mutations: {
		changePageStyle(state,v){
			state.style = v
		},
		setCurrBuy(state,msg){
			state.currBuy = []
			state.currBuy.push(...msg.list)
			state.insterIndex.push(msg.insteIndex)
		},
		buy(state, boolAndTime) {
			state.haveCar = !!boolAndTime.boolean;
			state.clickTime.push(boolAndTime.time);
			state.allBuy.push(...state.goodslist);
			state.goodslist = [];
		},
		cls(state) {
			state.goodslist = []
		},
		addCount(state, msg) {
			state.goodslist.some(x => {
				if (x.title == msg.title) {
					if (x.share == msg.share) {
						x.count++
					}
				}
			})
		},
		intCount(state, msg) {
			state.goodslist.some(x => {
				if (x.title == msg.title) {
					if (x.share == msg.share) {
						x.count--
					}
				}
			})
		},
		remGoods(state, title) {
			state.goodslist.some((x, i) => {
				if (x.title == title) {
					state.goodslist.splice(i, 1)
					return true
				}
			})
		},
		addCar(state, msg) {
			let flag = false;
			//如果当前数组中没有新添加的一项，则添加，若有和将原有的项的数量加上新添加的项的数量
			state.goodslist.some((item) => {
				if (item.title == msg.title) {
					if (item.share == msg.share) {
						item.count += msg.count
						flag = true;
						return true
					}
				}
			})
			if (!flag) {
				state.goodslist.push(msg)
			}
		},
		addMsg(state, msg) {
			state.clickMsg = msg
		},
		isFixed(state, b) {
			state.isFixed = b
		},
		getheadBackH(state, h) {
			state.headBackH = h
		},
		setH(state, h) {
			state.getH = h
		},
		ShowTabbber(state, IsShow) {
			state.isShowTabbar = IsShow
		},
		changeWeizhi(state) {
			state.isChangeDV = !state.isChangeDV
		},
		changeDingwei(state, weizhi) {
			state.dingwei = weizhi
		},
		getRouterId(state, id) {
			state.routerId = id
		}
	},
	getters: { //this.$store.getters.xx
		isHaveAddCar(state) {
			if (state.goodslist.length > 0) {
				return true
			} else {
				return false
			}
		},
		allCount(state) { //商品数量和，商品总价和，构成一个数组
			let t = 0;
			let total = 0;
			state.goodslist.forEach(item => {
				t += item.count
				total = (item.count * item.price) + total
			})
			total = total.toFixed(2)
			let obj = {
				t,
				total
			}
			return obj;
		},
		isChange(state) {
			return state.isChangeDV;
		}
	},
	actions: {},
	modules: {}
})