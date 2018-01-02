<template>
  <div class="page">
    <z-header
      :noLeft="noLeft"
      background="red"
      :title="title"
      @backClick="backClick" />
    <z-content>
      <slot></slot>
    </z-content>
  </div>
</template>

<script>
import { zHeader, zContent} from 'koala-ui'

export default {
  components: {
    zHeader,
    zContent
  },
  props: ['noLeft', 'title'],
  methods: {
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
.page {
  background: white;
}
</style>
