import axios from "axios"
axios.defaults.baseURL = "http://192.168.31.104:3000"
// 允许ajax携带cookie 实现跨域请求
axios.defaults.withCredentials=true
export default axios