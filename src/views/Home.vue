<template>
	<div class="home">
		<Header />
		<Main/>
	</div>
</template>

<script>
	import Main from '@/components/home/main.vue'
	import Header from '@/components/home/header.vue'

	export default {
		components: {
			Main,
			Header
		},
		mounted() {
		}
	}
</script>

<style scoped lang="less">
	.home{
		
	}
</style>
