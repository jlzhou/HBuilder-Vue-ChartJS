import { zPage } from 'koala-ui'

export default {
  components: {
    zPage
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

  }
}