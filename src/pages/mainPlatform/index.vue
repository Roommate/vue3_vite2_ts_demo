<template>
  <div class="flex-warp">
    <vheader class="header"></vheader>
    <div class="contant">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { h, defineComponent, ref, Component } from "vue";
import { NIcon } from "naive-ui";
import vheader from "@/composables/header.vue";
import { RouterLink } from "vue-router";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default defineComponent({
  components: {
    vheader,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.flex-warp {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  .header {
    width: 100%;
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
  }
  .contant {
    margin-top: 60px;
  }
  .n-layout {
    flex: 1;
    // .n-layout-sider {
    //   height: 100%;
    // }
    .window {
      width: 100%;
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
