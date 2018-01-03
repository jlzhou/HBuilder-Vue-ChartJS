<template>
  <z-page
    title="Bar">
    <canvas ref='chart'></canvas>
  </z-page>
</template>

<script>
import mixin from "../../mixins/mixin";

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
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'second',
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="less">

</style>
