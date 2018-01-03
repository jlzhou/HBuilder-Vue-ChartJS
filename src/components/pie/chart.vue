<template>
  <z-page
    title="Pie">
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
            data: [10, 20, 30],
            backgroundColor: ['red', 'yellow', 'blue']
          }
        ],
        labels: ["Red", "Yellow", "Blue"]
      }
    };
  }
};
</script>

<style scoped lang="less">

</style>
