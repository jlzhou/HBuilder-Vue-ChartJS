import { zPage } from 'koala-ui'
import Chart from "chart.js";

export default {
  components: {
    zPage
  },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: 'first',
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'second',
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
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