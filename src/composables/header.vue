<template>
  <div class="warp">
    <div v-if="clientWidth > 768">
      <n-menu
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
      />
    </div>
    <div v-else>
      <n-dropdown trigger="click" :options="options" @select="handleSelect">
        菜单组合
      </n-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref, Component } from "vue";
import { useMessage } from "naive-ui";
import { NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
export default defineComponent({
  setup() {
    const menuOptions: MenuOption[] = [
      {
        label: () =>
          h(
            "a",
            // {
            //   href: "/login",
            //   rel: "noopenner noreferrer",
            // },
            "菜单1"
          ),
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
      },
      {
        label: "菜单2",
        key: "pinball-1973",
        icon: renderIcon(BookIcon),
        children: [
          {
            label: "子菜单1",
            key: "rat",
          },
        ],
      },
      {
        label: "菜单3",
        key: "a-wild-sheep-chase",
        icon: renderIcon(BookIcon),
      },
      {
        label: "菜单4",
        key: "dance-dance-dance",
        icon: renderIcon(BookIcon),
        children: [
          {
            label: "子菜单2",
            key: "narrator",
            icon: renderIcon(PersonIcon),
          },
          {
            label: "子菜单3",
            key: "sheep-man",
            icon: renderIcon(PersonIcon),
          },
          {
            label: "子菜单4",
            key: "the-past-increases-the-future-recedes",
          },
        ],
      },
    ];
    // const message = useMessage()
    const showDropdownRef = ref(false);
    let clientWidth = ref(800);
    clientWidth.value = document.body.clientWidth;
    window.addEventListener(
      "resize",
      () => (clientWidth.value = document.body.clientWidth)
    );
    return {
      showDropdownRef,
      clientWidth,
      options: [
        {
          label: "菜单1",
          key: "marina bay sands",
        },
        {
          label: "菜单2",
          key: "brown's hotel, london",
        },
        {
          label: "菜单3",
          key: "atlantis nahamas, nassau",
        },
        {
          label: "菜单4",
          key: "the beverly hills hotel, los angeles",
        },
      ],
      handleSelect(key: string | number) {
        // message.info(String(key))
        console.log(key);
      },
      activeKey: ref<string | null>(null),
      menuOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
.warp {
  height: 60px;
  line-height: 60px;
  background: #fff;
}
</style>
