import axios from 'axios'
import { ElMessage } from 'element-plus'

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL, // 使用设置好的全局环境
  timeout: 30 * 1000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // 此处可以执行处理添加token等逻辑
    // config.headers["Authorization"] = getToken();
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data // 根据接口返回参数自行处理

    if (res.code !== 200) {
      if (res.code === 50000) {
        // 根据状态码自行处理
        ElMessage({
          message: '服务器内部出现异常，请稍后再试',
          type: 'warning',
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      // 调用成功返回数据
      return Promise.resolve(res)
    }
  },
  (error) => {
    console.log('err' + error) // 出现异常的处理
    return Promise.reject(error)
  }
)

export default service
