import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import './plugins/element'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import vuex from 'vuex'

Vue.use(vuex)
axios.defaults.baseURL = 'http://127.0.0.1:8888/'
// 拦截请求(config)加入token头部
axios.interceptors.request.use(config => {
  // config.headers.Authorization: 请求的头部，后面的是token，将token赋值给请求头部
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 必须返回config
  return config
})
Vue.prototype.$http = axios
// 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。
// 而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
// 此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。
// Vue.config.productionTip = false：阻止启动生产消息，常用作指令。
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
