import App from './App.vue'
import Vue from 'vue'
import router from './routes/router.js'

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App />'
})