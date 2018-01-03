import VueRouter from 'vue-router'
import Vue from 'vue'
import Empty from '../components/empty/empty.vue'
import Line from '../components/line/chart.vue'
import Bar from '../components/bar/chart.vue'
import Radar from '../components/radar/chart.vue'
import PolarArea from '../components/polar-area/chart.vue'
import Pie from '../components/pie/chart.vue'
import Bubble from '../components/bubble/chart.vue'
import Scatter from '../components/scatter/chart.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/', component: Empty},
    {path: '/line', component: Line},
    {path: '/bar', component: Bar},
    {path: '/radar', component: Radar},
    {path: '/polarArea', component: PolarArea},
    {path: '/pie', component: Pie},
    {path: '/bubble', component: Bubble},
    {path: '/scatter', component: Scatter},
  ]
})