<template>
  <z-page
    title="Scatter">
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
        datasets: [
          {
            label: "Scatter Dataset",
            data: [
              {
                x: -10,
                y: 0
              },
              {
                x: 0,
                y: 10
              },
              {
                x: 10,
                y: 5
              }
            ]
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              type: "linear",
              position: "bottom"
            }
          ]
        }
      }
    };
  }
};
</script>

<style scoped lang="less">

</style>
