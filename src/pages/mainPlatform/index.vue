<template>
  <div class="flex-warp">
    <vheader></vheader>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="200"
        :native-scrollbar="false"
        :inverted="inverted"
      >
        <n-menu
          :inverted="inverted"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <!-- <div class="window">123</div> -->
      <router-view></router-view>
      <!-- <n-layout style="max-height: 320px" /> -->
    </n-layout>
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

const menuOptions = [
  {
    key: "main",
    icon: renderIcon(BookIcon),
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "Login1",
            // params: {
            //   lang: "zh-CN",
            // },
          },
        },
        { default: () => "主页" }
      ),
  },
  {
    label: "菜单1",
    key: "menu1",
    icon: renderIcon(BookIcon),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "Login2",
                // params: {
                //   lang: "zh-CN",
                // },
              },
            },
            { default: () => "功能页1" }
          ),
        key: "people",
      },

      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: "Login3",
                // params: {
                //   lang: "zh-CN",
                // },
              },
            },
            { default: () => "功能页2" }
          ),
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
];

export default defineComponent({
  components: {
    vheader,
  },
  setup() {
    return {
      inverted: ref(false),
      menuOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
.flex-warp {
  display: flex;
  flex-direction: column;
  height: 100%;
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