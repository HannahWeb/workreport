import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
// require('./mock.js');//模拟本地，有服务端删除即可

axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
