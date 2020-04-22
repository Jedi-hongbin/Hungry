<template>
	<div class="comment" ref="comment">
		<el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit>
		</el-input>
		<el-button plain @click="open">
			我来评论
		</el-button>

		<div class="mui-card">
			<div class="mui-card-header">1楼</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					奥力给，干了兄弟们
				</div>
			</div>
			<div class="mui-card-footer">{{T}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				textarea: '',
				user_index: 1,
				T: this.moment(new Date()).format('YYYY MM DD, h:mm:ss a')
			}
		},
		mounted() {
		},
		methods: {
			open() {
				this.$notify({
					title: '成功',
					message: '发布成功',
					type: 'success',
					offset: 100,
					duration: 500
				});
				this.user_index++
				let temp =
					`<div class="mui-card-header">${this.user_index}楼</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					${this.textarea}
				</div>
			</div>
			<div class="mui-card-footer">${this.moment(new Date()).format('YYYY MM DD, h:mm:ss a')}</div>`
				let newComment = document.createElement('div')
				newComment.innerHTML = temp
				newComment.className = 'mui-card'
				this.$refs.comment.appendChild(newComment)
			}
		}
	}
</script>

<style scoped lang="less">
	.comment {
		transform: translateY(-5vh);

		.mui-card-content-inner,
		.a {
			padding: 0.3125rem 0.625rem;
		}

		.mui-card-header,
		.ba {
			min-height: auto;
			padding: 0.3rem 0.9375rem;
		}

		.mui-card-footer,
		.cba {
			.mui-card-header()
		}

		.el-button {
			width: 98%;
			margin-left: 1%;
		}
	}
</style>
