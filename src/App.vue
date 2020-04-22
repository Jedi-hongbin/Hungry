<template>
	<div id="app" class="wow rollIn" data-wow-delay="0.5s">
		<transition :name="$store.state.style">
			<router-view />
		</transition>
		<el-menu v-show="$store.state.isShowTabbar" :router=true :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#ff0" @select="handleSelect" text-color="#999" active-text-color="#000">
			<el-menu-item index="/">
				<span class="tabbar_icon_con">
					<i class="el-icon-dish"></i>
					<span>饿不饿</span>
				</span>
			</el-menu-item>
			<el-menu-item index="/car">
				<span class="tabbar_icon_con">
					<i class="el-icon-goods"></i>
					<span>订单</span>
				</span>
			</el-menu-item>
			<el-menu-item index="/about">
				<span class="tabbar_icon_con">
					<i class="el-icon-user"></i>
					<span>我的</span>
				</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '/',
				router_name:'v',
			}
		},
		mounted() {

		},
		methods: {
			handleSelect(key) {
				this.activeIndex = key
			}
		}
	}
</script>

<style scoped lang="less">
	.v-enter {
		opacity: 0;
		transform: rotate(20deg) translateX(100vw) scale(0);
	}

	.v-leave-to {
		opacity: 0;
		transform: rotate(-30deg) translateX(-100vw)  scale(0);
	}

	.v-enter-active,
	.v-leave-active {
		width: 100vw;
		position: absolute;
		transition: all .7s ease;
	}

	.h-enter {
		opacity: 0;
		transform: translateX(50vw);
	}
	
	.h-leave-to {
		opacity: 0;
		transform: translateX(-100vw);
	}
	
	.h-enter-active,
	.h-leave-active {
		max-width: 100vw;
		position: absolute;
		transition: all .7s ease;
	}

	#app {
		.el-menu-demo {
			top: 92vh;
			position: fixed;
			display: flex;
			justify-content: space-between;
			height: 8%;
			width: 100vw;
			.tabbar_icon_con {
				display: flex;
				flex-flow: column wrap;
				justify-content: space-around;
				line-height: 0.2rem;

				i {
					margin: 0.625rem auto;
				}
			}
		}

		.el-menu-item{
			width: calc(100vw / 3);
			text-align: center;
		}

		.el-menu--horizontal>.el-menu-item.is-active {
			border-top: 2px solid #ffaa00;
			border-bottom: none;
			color: #000 !important;
			background-color: transparent;
		}
	}
</style>
