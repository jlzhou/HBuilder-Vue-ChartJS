<template>
  <div id="app">
    <homapage />
  </div>
</template>

<script>
import homapage from './components/homepage/homepage.vue'

export default {
  components: {
    homapage,
  }
}
</script>

<style scoped lang="less">
#app {
  height: 100%;

  &>div {
    height: 100%;
  }
}
</style>
