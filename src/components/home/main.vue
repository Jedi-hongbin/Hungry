<template>
	<div class="hello">
		<div class="swiper">
			<el-carousel height="150px">
				<el-carousel-item v-for="item in swiper_url" :key="item">
					<img :src="item" alt="oldeight">
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="mui-content" @touchstart="touchS" ref="content_menu">
			<div class="leftside">
				<ul class="mui-table-view mui-grid-view mui-grid-9">
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/oldeight_headicon.png" alt="oldeight">
							<div class="mui-media-body">专场</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/cai.png" alt="oldeight">
							<div class="mui-media-body">买菜</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/hanbao.png" alt="oldeight">
							<div class="mui-media-body">汉堡</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/huoguo.png" alt="oldeight">
							<div class="mui-media-body">火锅</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/xican.png" alt="oldeight">
							<div class="mui-media-body">西餐</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/allfood.png" alt="oldeight">
							<div class="mui-media-body">午餐</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/tiandian.png" alt="oldeight">
							<div class="mui-media-body">甜点</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/yao.png" alt="oldeight">
							<div class="mui-media-body">送药</div>
						</a></li>
				</ul>
			</div>
			<span ref="arrow" class="el-icon-arrow-right trans" @click="transf"></span>
			<div class="assid">
				<ul class="mui-table-view mui-grid-view mui-grid-9">
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/oldeight_headicon.png" alt="oldeight">
							<div class="mui-media-body">专场</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/hongbaba.png" alt="oldeight">
							<div class="mui-media-body">红粑粑</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/lvbaba.png" alt="oldeight">
							<div class="mui-media-body">绿粑粑</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/huangbaba.png" alt="oldeight">
							<div class="mui-media-body">黄粑粑</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/heibaba.png" alt="oldeight">
							<div class="mui-media-body">黑粑粑</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/lanbaba.png" alt="oldeight">
							<div class="mui-media-body">蓝粑粑</div>
						</a></li>
					<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-2"><a href="#">
							<img class="gridPicture" src="../../../public/static/image/fenbaba.png" alt="oldeight">
							<div class="mui-media-body">粉粑粑</div>
						</a></li>
				</ul>
			</div>
		</div>
		<div class="huakuai" ref="kuakuai">
			<div class="left isit"></div>
			<div class="right"></div>
		</div>
		<active></active>
		<showgoods></showgoods>
	</div>
</template>

<script>
	import active from './active.vue'
	import showgoods from './showgoods.vue'
	export default {
		data() {
			return {
				X: -100,
				swiper_url: [
					'https://img-blog.csdnimg.cn/20200415175509241.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ByaW50Zl9oZWxsbw==,size_16,color_FFFFFF,t_70',
					'https://img-blog.csdnimg.cn/20200415175455238.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ByaW50Zl9oZWxsbw==,size_16,color_FFFFFF,t_70',
					'https://img-blog.csdnimg.cn/20200415175502111.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ByaW50Zl9oZWxsbw==,size_16,color_FFFFFF,t_70',
				]
			}
		},
		mounted() {
			this.addAnimate()
			this.$nextTick(()=>{
				this.changeWeizhi = this.$store.getters.isChange
			})
		},
		methods: {
			touchS(e) {
				let client = e.targetTouches[0].clientX
				this.$refs.content_menu.ontouchmove = (e) => {
					if (this.$refs.arrow.classList.length == 2) {
						if (e.targetTouches[0].clientX - client <= -70) {
							this.transf()
						}
					} else {
						if (e.targetTouches[0].clientX - client >= 70) {
							this.transf()
						}
					}
				}
			},
			transf() {
				this.$refs.content_menu.style.transform = 'translateX(' + this.X + 'vw)'
				this.X == -100 ? this.X = 0 : this.X = -100
				this.$refs.arrow.classList.toggle('transs')
				this.$refs.arrow.classList.toggle('el-icon-arrow-left')
				this.$refs.kuakuai.children.forEach(el => {
					el.classList.toggle('isit')
				})
			},
			addAnimate() {
				let allGridP = document.querySelectorAll('img[class=gridPicture]');
				let gridPIndex = 0;
				setTimeout(function fn() {
					allGridP.forEach(ele => {
						ele.className = "gridPicture"
					})
					allGridP[gridPIndex].className = "gridPicture animated rollIn"
					gridPIndex >= allGridP.length - 1 ? gridPIndex = 0 : gridPIndex++
					setTimeout(() => {
						fn()
					}, 1500)
				}, 1500)
			}
		},
		components:{
			active,
			showgoods
		}
	}
</script>

<style scoped lang="less">
	.hello {
		overflow-x: hidden;

		.mui-content {
			display: flex;
			flex-flow: row nowrap;
			width: 200vw;
			position: relative;
			transition: transform 1s ease;
			// transition: transform 1s cubic-bezier(0.1, -0.35, 0.78, 0.27);
			background-color: #fff;
			
		}
		.huakuai{
			width: 100vw;
			position: relative;
			height: 0.3125rem;
			display: flex;
			justify-content: center;
			
			.left{
				height: 80%;
				width: 1.25rem;
				margin-right: 2px;
				border-radius: 0.625rem;
				background-color: #e7e7e7;
			}
			.right{
				border-radius: 0.625rem;
				width: 1.25rem;
				height: 80%;
				background-color: #e7e7e7;
				
			}
			.isit{
				background-color: #ffaa00;
			}
		}

		.leftside {
			min-width: 100vw;
			max-height: 10.8375rem;
		}

		.trans {
			position: absolute;
			top: 5rem;
			left: 93vw;
		}

		.transs {
			top: 5rem;
			left: 103vw;
			z-index: 10;
		}

		.aside {
			min-width: 100vw;
		}

		.mui-grid-view.mui-grid-9 {
			padding: 0.5rem;
			border-top: none;
			border-left: none;
		}

		.swiper {
			width: 95%;
			height: 9.5rem;
			border: 1px solid #ff0;
			border-radius: 0.625rem;
			margin: calc(5% / 2);
			box-sizing: border-box;
			background-color: #fff;
			overflow: hidden;
			img {
				box-sizing: border-box;
				border-radius: 0.625rem;
				width: 100%;
				height: 100%;
			}
		}

		.mui-content {
			margin-top: -0.5rem;
		}

		.mui-content {
			.gridPicture {
				border-radius: 50%;
				width: 2.5rem;
				height: 2.5rem;
			}
		}

		.mui-grid-view.mui-grid-9 {
			background-color: #fff;
		}

		.mui-grid-view.mui-grid-9 .mui-table-view-cell {
			border: none;
		}

		.mui-grid-view.mui-grid-9 .mui-table-view-cell {
			padding: 0 0.625rem;
		}
		.mui-table-view-cell>a:not(.mui-btn) {
			overflow: none !important;
		}
	}
</style>
