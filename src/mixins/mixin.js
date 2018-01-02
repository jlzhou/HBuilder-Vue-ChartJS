import Page from '../components/core/page.vue'

export default {
  components: {
    Page
  },
  mounted() {
    if(this.$refs.chart) this.buildChart()
  },
  methods: {
    
  }
}