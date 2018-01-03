import VueRouter from 'vue-router'
import Vue from 'vue'
import Empty from '../components/empty/empty.vue'
import Line from '../components/line/line.vue'
import Bar from '../components/bar/bar.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/', component: Empty},
    {path: '/line', component: Line},
    {path: '/bar', component: Bar},
  ]
})