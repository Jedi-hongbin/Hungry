<template>
	<div class="hongbao">
		<el-page-header @back="goBack" content="返回上一页"></el-page-header>
		<el-menu :default-active="activeIndex" mode="horizontal" background-color="#fff" @select="handleSelect" text-color="#999" active-text-color="#000">
			<el-menu-item index="0">
				<span class="tabbar_icon_con">
					<span>红包</span>
				</span>
			</el-menu-item>
			<el-menu-item index="1">
				<span class="tabbar_icon_con">
					<span>抵用卷</span>
				</span>
			</el-menu-item>
		</el-menu>	
		<hongbaopage />
	</div>
</template>

<script>
	import hongbaopage from '../components/commont/hongbaopage.vue'
	export default{
		data(){
			return{
				activeIndex:'0'
			}
		},
		mounted() {
			
		},
		methods:{
			goBack(){
				this.$router.go(-1)
				this.$store.commit('ShowTabbber')
			},
			handleSelect(index){
				this.activeIndex = index.toString()
			}
		},
		components:{
			hongbaopage
		}
	}
</script>

<style scoped lang="less">
	.hongbao{
		.el-page-header{
			background-color: #d4ff6e;
			line-height: 8vh;
			height: 7vh;
			width: 100vw;
		}
	}
</style>
