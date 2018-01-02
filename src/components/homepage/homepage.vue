<template>
  <page
    class="homepage"
    :noLeft="true"
    title="首页">
    <z-list
      :items="items"
      @itemClick="itemClick" />
    <transition :name="transitionName">
      <router-view />
    </transition>
  </page>
</template>

<script>
import Page from "../core/page.vue";
import { zList } from "koala-ui";

export default {
  components: {
    Page,
    zList
  },
  data() {
    return {
      items: ["line"],
      transitionName: "push"
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
      this.$router.push(`/${item}`);
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
