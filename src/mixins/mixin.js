import { zPage } from 'koala-ui'
import Chart from "chart.js";

export default {
  components: {
    zPage
  },
  data() {
    return {
      chartOptions: {}
    }
  },
  props: {
    afterEnter: Boolean
  },
  watch: {
    afterEnter(hasEnter) {
      if(hasEnter && this.$refs.chart) {
        this.build()
      }
    }
  },
  mounted() {

  },
  methods: {
    build() {
      this.buildChart()
    },
    buildChart() {
      let { type } = this.$route.query
      let ctx = this.$refs.chart.getContext("2d");

      new Chart(ctx, {
        type,
        data: this.chartData,
        options: this.chartOptions
      });
    },
  }
}