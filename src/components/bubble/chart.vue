<template>
  <z-page
    title="Bubble">
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
            label: 'Red',
            backgroundColor: 'red',
            data: [
              {
                x: 1, y: 1, r: 4
              },
              {
                x: 2, y: 2, r: 4
              },
              {
                x: 0, y: 0, r: 4
              },
            ]
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="less">

</style>
