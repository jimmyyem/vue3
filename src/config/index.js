const DEFAULT_CONFIG = {
	// 模式 开发：dev | 生产：prod | 普通：normal，生产模式会隐藏掉模块管理、代码生成器、数据表设计器
	APP_MODE: 'dev',

	//标题
	APP_NAME: "Vue3",

	//首页地址
	DASHBOARD_URL: "/dashboard",

	//接口地址
	API_URL: process.env.VUE_APP_API,

	//Token前缀，注意最后有个空格，如不需要需设置空字符串
	TOKEN_PREFIX: "Bearer ",

	// 请求超时时间	 默认 5 秒
	TIMEOUT: 5000,

}

// 如果生产模式，就合并动态的APP_CONFIG
// public/config.js
// if(process.env.NODE_ENV === 'production'){
// 	Object.assign(DEFAULT_CONFIG, APP_CONFIG)
// }

module.exports = DEFAULT_CONFIG
