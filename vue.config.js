module.exports = {
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.less$/,
	// 			loader: "style-loader!css-loader!less-loader"
	// 		}
	// 	]
	// },
	devServer: {
		host: "localhost",
		port: 8080, // 端口号
		//proxy: 'http://api.map.baidu.com'// 配置跨域处理,只有一个代理
		proxy: { //配置多个跨域
			"/location": {
				target: "http://api.map.baidu.com",
				changeOrigin: true,
			}
			// "/api2": {
			// 	target: "http://172.12.12.12:2018",
			// 	changeOrigin: true,
			// 	//ws: true,//websocket支持
			// 	secure: false,
			// 	pathRewrite: {
			// 		"^/api2": "/"
			// 	}
			// }
		}
	}
}
