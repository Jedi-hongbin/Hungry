<template>
	<div class="active">
		<div class="wraaper">
			<div class="title">—— 恭喜获得红包 ——</div>
			<div class="cont">
				<div class="active_inner">
					<div class="ac_prace"><span>￥</span><span>6</span></div>
					<div class="ac_content">
						<div class="ac_content_title">
							<p>老八秘制小红包</p>
							<p>任意金额</p>
						</div>
						<div class="ac_content_btn">
							<router-link to="/hongbao">
							<el-Button size="mini" round type="danger">
								去使用
							</el-Button>
							</router-link>
						</div>
					</div>
				</div>
				<div class="active_inner">
					<div class="ac_prace"><span>￥</span><span>6</span></div>
					<div class="ac_content">
						<div class="ac_content_title">
							<p>老八秘制小红包</p>
							<p>随机立减</p>
						</div>
						<div class="ac_content_btn">
							<router-link to="/hongbao">
							<el-Button size="mini" round type="danger">
								去使用
							</el-Button>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="joinVip">
			<div class="wrap">
				<img src="../../../public/static/image/VIP.png" alt="vip">
				<span class="becomevip">成为会员</span><span class="lhb">领取20个老八秘制小汉堡</span>
				<span style="font-size: small;line-height:2.8rem;color: #fff;position: absolute;right: 1rem;">限时6元开通 ></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="less">
	.active {
		width: 100vw;
		margin-top: 0.25rem;

		.joinVip {
			width: 100vw;
			height: 2.5375rem;
			margin-top: 2.525rem;

			.wrap {
				width: 96%;
				display: flex;
				margin: 0 auto;
				background: linear-gradient(90deg, #3b3b3b, #6b6b6b 50%, #d9d900);
				border-radius: 0.325rem;
				white-space: nowrap;
				line-height: 2.625rem;

				img {
					transform: scaleY(.7);
				}

				.becomevip {
					color: #fff;
					font-weight: bold;
					margin-left: 0.3125rem;
				}

				.lhb {
					color: #fff;
					transform: translateY(0.1rem);
					font-size: small;
					margin-left: 0.3125rem;
				}
			}
		}

		.wraaper {
			width: 96%;
			margin: 0 auto;
			height: 7.5rem;
			background-color: #FFA07A;

			.title {
				text-align: center;
				color: #fff;
				line-height: 2rem;
				font-weight: bold;
			}

			.cont {
				width: 100%;
				height: 100%;
				background-color: fade(#ec2e2e, 70%);
				display: flex;
				justify-content: space-evenly;
				align-items: center;

				.active_inner {
					width: 45%;
					height: 75%;
					background-color: #Fff;
					border-radius: 0.625rem;
					display: flex;

					.ac_prace {
						flex: 1.5;
						line-height: 3.25rem;
						font-weight: bold;

						span:first-child {
							display: inline-block;
							color: #f00;
							font-size: 1.25rem;
							text-align: start;
						}

						span:last-child {
							display: inline-block;
							color: #f00;
							font-size: 2.25rem;
							transform: translateY(1rem);
						}
					}

					.ac_content {
						flex: 3;
						display: flex;
						flex-flow: column nowrap;

						.ac_content_title {
							p:first-child {
								font-weight: bold;
								color: #000;
								margin-bottom: 0;
							}

							p:last-child {
								font-size: 0.5rem;
							}
						}

						.ac_content_btn {}
					}
				}
			}
		}
	}
</style>
