<template>
  <z-page
    title="Line">
    <canvas ref='chart'></canvas>
  </z-page>
</template>

<script>
import mixin from "../../mixins/mixin";
import Chart from "chart.js";

export default {
  mixins: [mixin],
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
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'second',
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      chartOptions: {}
    };
  },
  methods: {
    build() {
      this.buildChart()
    },
    buildChart() {
      let ctx = this.$refs.chart.getContext("2d");

      new Chart(ctx, {
        type: "line",
        data: this.chartData,
        options: this.chartOptions
      });
    }
  }
};
</script>

<style scoped lang="less">
.line {
}
</style>
