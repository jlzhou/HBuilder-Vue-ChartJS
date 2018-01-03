<template>
  <z-page
    :mainPage="true"
    :background="'red'"
    class="homepage"
    title="首页">
    <z-list
      :items="items"
      @itemClick="itemClick" />
    <transition
      :name="transitionName"
      @before-enter="beforeEnter"
      @after-enter="afterEnter">
      <router-view
        :afterEnter="hasEnter" />
    </transition>
  </z-page>
</template>

<script>
import { zList, zPage } from "koala-ui";

export default {
  components: {
    zPage,
    zList
  },
  data() {
    return {
      items: ["line", 'bar', 'radar', 'polarArea', 'pie', 'bubble', 'scatter'],
      transitionName: "push",
      hasEnter: false,
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (to.path === "/") this.transitionName = "pop";
      else if (from.path === "/") this.transitionName = "push";
      else this.transitionName = toDepth > fromDepth ? "push" : "pop";
    }
  },
  methods: {
    itemClick(item) {
      this.$router.push({path: `/${item}`, query: { type: item }});
    },
    beforeEnter(el, done) {
      this.hasEnter = false
    },
    afterEnter(el, done) {
      this.hasEnter = true
    }
  }
};
</script>

<style scoped lang="less">
.homepage {
  .content {
    & > .page {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .push-enter {
      left: 100%;
    }

    .push-enter-active {
      transition: left 0.3s ease;
    }

    .push-enter-to,
    .push-leave {
      left: 0;
      opacity: 1;
    }

    .push-leave-active {
      transition: all 0.3s ease;
    }

    .push-leave-to {
      left: -50%;
      opacity: 0.8;
    }

    .pop-enter {
      left: -50%;
      opacity: 0.8;
    }

    .pop-enter-active {
      transition: all 0.3s ease;
    }

    .pop-enter-to,
    .pop-leave {
      left: 0;
      opacity: 1;
    }

    .pop-leave-active {
      transition: left 0.3s ease;
    }

    .pop-leave-to {
      left: 100%;
    }
  }
}
</style>
