import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import Empty from '../components/empty/empty.vue'
import Line from '../components/line/line.vue'

export default new VueRouter({
  routes: [
    {path: '/', component: Empty},
    {path: '/line', component: Line}
  ]
})