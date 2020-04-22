<template>
	<div class="hongbaopage">
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<el-avatar src="https://img-blog.csdnimg.cn/20200415175416986.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ByaW50Zl9oZWxsbw==,size_16,color_FFFFFF,t_70"></el-avatar>
					<div class="cont">
						<div class="l">
							<h4>老八特供<span style="color: #f00;">5元</span>红包</h4>
							<ul>
								<li>限老八美食店专用</li>
								<li>限2020-4-17到2020-4-14使用</li>
								<li>任意金额可用</li>
							</ul>
						</div>
						<div class="r">
							<router-link to="/goodsinfo/id=7">
								<el-Button size="small" round type="danger">进店使用</el-Button>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<el-avatar src="https://img-blog.csdnimg.cn/20200415175416986.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ByaW50Zl9oZWxsbw==,size_16,color_FFFFFF,t_70"></el-avatar>
					<div class="cont">
						<div class="l">
							<h4>心酸老八<span style="color: #f00;">10元</span>大额红包</h4>
							<ul>
								<li>限老八美食店专用</li>
								<li>限2020-4-17到2020-4-14使用</li>
								<li>限购买老八秘制小汉堡</li>
							</ul>
						</div>
						<div class="r">
							<router-link to="/goodsinfo/id=6">
								<el-Button size="small" round type="danger">进店使用</el-Button>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="less">
	.hongbaopage {
		.mui-card-content-inner {
			display: flex;
			justify-content: space-between;
			padding: 0.3125rem;

			.el-avatar{
				transform: translate(5px,15px);
			}

			.cont {
				display: flex;
				min-width: 80%;
				height: 12vh;
				justify-content: center;
				align-items: center;

				.l {
					flex: 2;
					ul{
						margin-left: 0.6125rem;
						color: #999;
						font-size: xx-small;
						li{
							height: 14px;
						}
					}
				}

				.r {
					flex: 1;
				}
			}
		}
	}
</style>
