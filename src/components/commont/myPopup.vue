<template>
	<div class="mark" ref="mark">
		<div class="myPopup" v-for="(item,index) in currMsg" :key="index">
			<img :src="item.cover_url" alt="show">
			<img ref="xiaoba" class="animateImg" :src="item.cover_url" alt="show">
			<span class="hr"></span>
			<div class="pop_body">
				<div class="t">
					<el-radio-group v-model="radio" size="small">
						<el-radio label="1" border>原味</el-radio>
						<el-radio label="2" border>香辣</el-radio>
						<el-radio label="3" border>黑胡椒</el-radio>
					</el-radio-group>
				</div>
				<div class="b">
					<el-input-number :min="1" :max="10" label="描述文字" size="mini" v-model="num"></el-input-number>
				</div>
			</div>
			<div class="foot">
				<i class="el-icon-close" @click="close"></i>
				<i class="el-icon-check" @click="ckeck"></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				fit: 'fit',
				radio:'1',
				num:1,
				currMsg:[this.$store.state.clickMsg]
			}
		},
		mounted() {

		},
		methods:{
			close(){
				this.$emit('close',false)
			},
			ckeck(){
				let msg = {
					...this.$store.state.clickMsg,
					"share":Number(this.radio),
					"count":this.num
				}
				this.$store.commit('addCar',msg)
				this.$emit('close',false)
			}
		}
	}
</script>

<style lang="less">
	.mark {
		
		.myPopup {
			width: 70vw;
			height: 50vw;
			position: fixed;
			background: linear-gradient(#eeeeee,#ffffff);
			z-index: 100;
			margin-left: 15vw;
			border-radius: 0.625rem;
			box-shadow: 1px 1px 3px #ccc,-1px -1px 3px #ccc;
			padding: 0.3125rem;

			.animateImg{
				position: fixed;
				top: 15%;
				left: 45%;
				width: 1.55rem;
				height: 1.55rem;
				border-radius: 50%;
				display: none;
			}

			.pop_body {
				width: 100%;
				height: 50%;
				background-color: #f7f7f7;
				display: flex;
				flex-flow: column nowrap;

				div {
					flex: 1;
				}

				.t {
					.el-radio-group{
						display: flex;
						.el-radio{
							flex: 1;
							margin: 0.125rem;
						}
					}
				}

				.b {
					.el-input__inner{
						border-radius: 0.325rem;
					}
					.el-input-number{
						display: block;
						margin: 0 auto;
					}
				}
			}

			.foot {
				color: #009595;
				display: flex;
				justify-content: space-around;
			}

			.hr {
				display: block;
				width: 95%;
				margin: 0.125rem auto;
				height: 0.0625rem;
				background-color: #15245a;
			}

			img {
				display: block;
				width: 40%;
				height: 40%;
				margin: 0 auto;
				border-radius: 0.325rem;
			}
		}
	}
</style>
