<template>
	<div class="goodslist" ref="goodslist">
		<el-tabs :tab-position="tabPosition" @tab-click="tab_click">
			<el-tab-pane label="优惠">
				<p>优惠</p>
				<div v-for="(item,index) in goodslist0" :key="index">
					<el-card shadow="always">
						<el-image style="width: 60px; height: 60px" :src="item.cover_url" :fit="fit"></el-image>
						<div class="content">
							<h4>{{item.title}}</h4>
							<span class="zhekou">{{item.youhui}}折</span>
							<div class="addcar">
								<span>￥{{item.price}}</span>
								<i class="el-icon-circle-plus" @click="addcar(item)"></i>
							</div>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="老八推荐">
				<p class="el-icon-sunny">老八推荐</p>
				<div v-for="(item,index) in goodslist1" :key="index">
					<el-card shadow="always">
						<el-image style="width: 60px; height: 60px" :src="item.cover_url" :fit="fit"></el-image>
						<div class="content">
							<h4>{{item.title}}</h4>
							<span class="zhekou">{{item.youhui}}折</span>
							<div class="addcar">
								<span>￥{{item.price}}</span>
								<i class="el-icon-circle-plus" @click="addcar(item)"></i>
							</div>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="老八挑战失败系列">
				<p>老八挑战失败系列</p>
				<div v-for="(item,index) in goodslist2" :key="index">
					<el-card shadow="always">
						<el-image style="width: 60px; height: 60px" :src="item.cover_url" :fit="fit"></el-image>
						<div class="content">
							<h4>{{item.title}}</h4>
							<span class="zhekou">{{item.youhui}}折</span>
							<div class="addcar">
								<span>￥{{item.price}}</span>
								<i class="el-icon-circle-plus" @click="addcar(item)"></i>
							</div>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="硬核美食">
				<p>硬核美食</p>
				<div v-for="(item,index) in goodslist3" :key="index">
					<el-card shadow="always">
						<el-image style="width: 60px; height: 60px" :src="item.cover_url" :fit="fit"></el-image>
						<div class="content">
							<h4>{{item.title}}</h4>
							<span class="zhekou">{{item.youhui}}折</span>
							<div class="addcar">
								<span>￥{{item.price}}</span>
								<i class="el-icon-circle-plus" @touchstart="touchebe" @click="addcar(item)"></i>
							</div>
						</div>
					</el-card>
				</div>
			</el-tab-pane>
			<el-tab-pane label="老八特饮">
				<p>老八特饮</p>
			</el-tab-pane>
			<i class="el-icon-eleme" v-show="ebe" ref="boll"></i>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabPosition: "left",
				elContent: '',
				defClientY: 0,
				fit: 'fill',
				goodslist0: [],
				goodslist1: [],
				goodslist2: [],
				goodslist3: [],
				shoopcar: [],
				ebe: true,
				currXY: {},
				HArr: [],
				LArr: [],
				noShake: 0
			}
		},
		mounted() {
			this.elContent = document.getElementsByClassName('el-tabs__content')[0]
			this.elContent.addEventListener('touchstart', this.selectGoods)
			this.getList()
			setTimeout(() => {
				this.getRightH()
			}, 500)
		},
		methods: {
			getRightH() {
				let t = []
				for (let s of [0, 1, 2, 3, 4]) {
					let tarLeft = 'pane-' + s.toString();
					let rH = document.getElementById(tarLeft).offsetHeight + 10;
					let Left = 'tab-' + s.toString();
					let lH = document.getElementById(Left);
					t.push(rH)
					this.LArr.push(lH)
				}
				t.reduce((p, c) => {
					this.HArr.push(p)
					return p + c
				})
			},
			touchebe() {},
			addcar(item) {
				this.$store.commit('addMsg', item)
				this.$emit('check', true)
			},
			getList() {
				this.axios.get('http://localhost:3000/goodslist')
					.then(res => {
						for (let s of res.data) {
							if (s.type == 0) {
								this.goodslist0.push(s)
							} else if (s.type == 1) {
								this.goodslist1.push(s)
							} else if (s.type == 2) {
								this.goodslist2.push(s)
							} else {
								this.goodslist3.push(s)
							}
						}
					})
					.catch(err => console.log(err))
			},
			selectGoods(e) {
				if (this.$store.state.isFixed) {
					let prevY = parseFloat(this.elContent.style.transform.split('(')[1]) || 0;
					this.defClientY = e.targetTouches[0].clientY
					this.elContent.ontouchmove = (e) => {
						if (((e.targetTouches[0].clientY - this.defClientY) + prevY) <= 0) {
							let y = (e.targetTouches[0].clientY - this.defClientY) + prevY;
							this.elContent.style.transform = 'translateY(' + y + 'px)'
							e.preventDefault(); //禁止触摸向上活动时页面滑动
							this.elContent.style.transition = 'none'
							//左侧同步高亮显示
							let ii = 0;
							for (let i = 0; i < 4; i++) {
								if (Math.abs(y) >= this.HArr[i]) {
									ii = i + 1
									if (Math.abs(y) <= this.HArr[i + 1]) {
										ii = i + 1
									}
								}
							}
							if (ii !== this.noShake) {
								for (let s of this.LArr) {
									s.className = 'el-tabs__item is-left'
								}
								this.LArr[ii].className = 'el-tabs__item is-left is-active'
								this.noShake = ii
							}
						}
					}
					this.elContent.ontouchend = () => {
						this.elContent.ontouchmove = null
					}
				}
			},
			tab_click(tar) {
				let arr = [0, 1, 2, 3]
				if (tar.index == 0) {
					this.elContent.style.transform = 'translateY(0)'
				} else {
					let result = []
					for (let s of arr.slice(0, Number(tar.index))) {
						let target = 'pane-' + s.toString();
						let el = document.getElementById(target).offsetHeight + 10
						result.push(el)
					}
					let TransY = result.reduce((prev, curr) => prev + curr)
					this.elContent.style.transform = 'translateY(-' + TransY + 'px)'
				}
				this.elContent.style.transition = 'all .5s ease'
			},

		}
	}
</script>

<style lang="less">
	.goodslist {
		.animateImg {
			position: absolute;
			top: 5%;
			left: 45%;
			width: 1.55rem;
			height: 1.55rem;
			border-radius: 50%;
			transition: all 1s ease;
			z-index: -1;
		}

		.el-icon-eleme {
			color: #3cd2ff;
			z-index: 100;
		}

		.boll {
			width: 0.925rem;
			height: 0.925rem;
			background-color: #005CC5;
			border-radius: 50%;
			z-index: 999;
			transition: all 1s ease;
			transform: translate(0, 0);
		}

		.el-card {
			margin: 0 0 0.625rem 0;
		}

		.el-tab-pane {
			display: block !important;
		}

		.el-card__body {
			display: flex;
			padding: 5px;

			img {
				border-radius: 0.2875rem;
			}

			.content {
				flex: 1;
				overflow: hidden;

				.addcar {
					color: #F00;
					font-weight: bold;
					position: relative;

					i {
						position: absolute;
						right: 0.625rem;
						color: #40c6ff;
						line-height: 1.5rem;
					}
				}

				h4 {
					margin: 0 0.125rem;
					font-size: medium;
				}

				.zhekou {
					margin-left: 0.3125rem;
					border: 0.0325rem solid #f00;
					color: #f00;
					border-radius: 0.1875rem;
					font-size: small;
				}
			}
		}

		.el-tabs__header {
			//transform: translateY(-50px);
		}

		.el-tabs__content {
			position: relative;
			transform: translateY(0);
		}

		.el-tabs__item {
			text-align: left !important;
			padding: 0;
			width: 20vw;
			height: auto;
			white-space: normal;
			line-height: 1.625rem;
			padding: 0.6125rem 0;
		}
		.el-tabs__item:hover{
			color: #303133;
		}
		.is-active{
			color: #007AFF !important;
			border-right: 0.1625rem solid #0069D9;
		}
		.el-tabs__active-bar{
			background-color: transparent;
		}
	}
</style>
