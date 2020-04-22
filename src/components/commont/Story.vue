<template>
	<div class="Story">
		<div class="mui-card">
			<div class="mui-card-header mui-card-media">
				<img src="../../../public/static/image/oldeight_headicon.png" />
				<div class="mui-media-body">
					老八
					<p>发表于 2016-06-30 15:30</p>
				</div>
			</div>
			<div class="mui-card-content">
				<img src="https://img-blog.csdnimg.cn/20200419064543506.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ByaW50Zl9oZWxsbw==,size_16,color_FFFFFF,t_70" alt="" width="100%" />
			</div>
			<div class="mui-card-footer">
				<a class="mui-card-link">订阅</a>
				<a class="mui-card-link">关注</a>
				<a class="mui-card-link">转发</a>
			</div>
		</div>
			<p class="eatsmallhb" ref="bgt">食用小汉堡前后对比</p>
		<div class="compare">
			<div class="l">吃小汉堡之前
				<img src="https://img-blog.csdnimg.cn/20200418204305308.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ByaW50Zl9oZWxsbw==,size_16,color_FFFFFF,t_70" alt="8">
			</div>
			<div class="r">吃小汉堡之后
				<img src="https://img-blog.csdnimg.cn/20200419064059539.png" alt="8">
			</div>
		</div>
		<h4 class="jingshen">精神百倍，你值得拥有</h4>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				x:0,
				t:0
			}
		},
		mounted() {
			//this.changeBGC()
		},
		methods:{
			// changeBGC(){
			// 	this.t = setInterval(() => {
			// 		if(this.$refs.bgt){
			// 			this.x>= 500 ? this.x=10 : this.x+=10
			// 			this.$refs.bgt.style.backgroundPosition = `${this.x}px 0`
			// 		}
			// 	},300)
			// }
		},
		destroyed() {
			//this.t = null
		}
		
	}
</script>

<style scoped lang="less">
	.Story{
		transform: translateY(-25vh);
		.eatsmallhb{
			font-size: 1.5rem;
			font-weight: bold;
			text-align: center;
			color: transparent;
			background-image: linear-gradient(70deg, #deff05,#62ffc6,#58c5ff);
			transform: translateY(-5vh);
			-webkit-background-clip: text;
			-moz-background-clip: text;
		}
		.compare{
			width: 98vw;
			height: 40vh;
			margin: 0 auto;
			transform: translateY(-5vh);
			display: flex;
			text-align: center;
			.l{
				flex: 1;
				img{
					width: 100%;
					max-height: 25vh;
				}
			}
			.r{
				flex: 1;
				img{
					max-height: 25vh;
					width: 100%;
				}
			}
		}
		.jingshen{
			transform: translateY(-15vh);
			text-align: center;
		}
		.mui-card{
			transform: scale(1,0.8);
		}
	}
</style>
