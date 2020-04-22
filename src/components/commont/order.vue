<template>
	<div class="order" ref="goods_container">
		<div class="container">
			<div class="header_card">
				<div class="head">
					<span>品牌</span> 专机抵达送达,温度尚存 | 距离0km
				</div>
				<div class="body">
					<div class="l"><i class="fa fa-check-square-o fa-2x" aria-hidden="true"></i> 百万粉丝店铺 </div>
					<div class="r"><i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i> 店家亲身试吃，品质保证 </div>
				</div>
				<div class="footer">
					<span>老八：兄弟们,老八给你们露一手 <i class="fa fa-hand-paper-o" aria-hidden="true"></i></span>
				</div>
			</div>
			<div class="youhui_message" ref="youhui">
				<p>老八哭了</p>
				<span>全场8折</span>
			</div>
			<div class="goods_main" ref="goods_main">
				<goodsList @check="cheked" />
			</div>
		</div>
	</div>
</template>

<script>
	import goodsList from './goodslist.vue'
	export default{
		data(){
			return{
				Top:0
			}
		},
		mounted() {
			this.Top = this.$refs.goods_main.offsetTop
			window.addEventListener('scroll',this.goosListScroll)
		},
		methods:{
			cheked(b){
				this.$emit('checke',b)
			},
			goosListScroll(e){
				var scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop || '';
				if(scrollTop >= this.Top){
					if(this.$refs.goods_main){
						this.$refs.goods_main.style.position = 'fixed'
						this.$refs.goods_main.style.top = this.Top+'px'
						// this.$refs.goods_main.style.transform = 'translateY(10px)'
						if(!this.$store.state.isFixed){
							this.$store.commit('isFixed',true)
						}
					}
				}else{
					if(this.$refs.goods_main){
						this.$refs.goods_main.style.position = 'static'
						this.$refs.goods_main.style.transform = 'translateY(0)'
						if(this.$store.state.isFixed){
							this.$store.commit('isFixed',false)
						}
					}
				}
			}
		},
		components:{
			goodsList
		}
	}
</script>

<style scoped lang="less">
	.order {
		width: 100vw;
		transform: translateY(-20vh);
		.container {
			width: 96%;
			height: 100%;
			margin: 0 auto;
			border-radius: 0.2875rem;
			.header_card {
				height: 13%;
				background-color: #fff;
				padding: 0.325rem;
				display: flex;
				flex-flow: column nowrap;
				border-radius: 0.3125rem;
				box-shadow: 0 1px 2px #ccc;
				.head{
					flex:1;
					font-size: x-small;
					span{
						padding: 3px;
						background: linear-gradient(#e3ff27,#ffd118);
						border-radius: 0.1875rem;
					}
				}
				.body{
					flex:2;
					display: flex;
					flex-wrap: nowrap;
					div{
						font-size: small;
						line-height: 5vh;
						border-radius: 0.3125rem;
						padding: 0 0.3125rem;
						margin:0.3125rem 0.3125rem 0 0 ;
						font-weight: bold;
						text-align: center;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					.l{
						color: #fff;
						background-color: #32d432;
						.fa-check-square-o{
							transform: translateY(5px);
						}
					}
					.r{
						color: #59ffc2;
						background-color: #6079d4;
						.fa-thumbs-o-up{
							transform: translateY(5px);
						}
					}
				}
				.footer{
					flex:2;
					font-size: small;
					span{
						margin-bottom: 1.625rem;
					}
				}
			}

			.youhui_message {
				margin: 2% 0;
				width: 100%;
				height: 7%;
				background: linear-gradient(90deg,#ffc7a2,#e8e89d);
				border-radius: 0.3125rem;
				padding-left: 0.3125rem ;
				p{
					color: #000;
					margin: 0;
				}
				span{
					font-weight: bold;
				}
			}

			.goods_main {
				overflow: hidden;
				height: 88vh;
				width: 96vw;
				
			}
		}
	}
</style>
