import App from './App.vue'
import Vue from 'vue'
import router from './routes/router.js'

// 配置头部背景
Vue.prototype.$headerBackground = 'blue'

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App />'
})