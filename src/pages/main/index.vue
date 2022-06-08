<template>
  <div class="main">
    <div class="swipper">
      <n-carousel autoplay centered-slides>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        />
      </n-carousel>
    </div>
    <div v-if="clientWidth > 768">
      <div>
        <p>主要认证明星产品</p>
        <p>
          高度规范化制度化的咨询流程，服务标准，致力于提供专业的认证咨询服务
        </p>
      </div>
      <div class="productsBox">
        <ul>
          <li v-for="(item, index) in introList" :key="index">
            <p>{{ item.title }}</p>
            <p>{{ item.subTitle }}</p>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    let clientWidth = ref(800);
    clientWidth.value = document.body.clientWidth;
    window.addEventListener(
      "resize",
      () => (clientWidth.value = document.body.clientWidth)
    );

    const introList = [
      {
        title: "ISO9001",
        subTitle: "质量管理体系",
        text: "补充信息",
        bgColor: "#6a8a3a8",
      },
      {
        title: "IS20000",
        subTitle: "体系",
        text: "补充信息",
        bgColor: "#6a8a3a8",
      },
      {
        title: "ISO45001",
        subTitle: "职业健康安全管理体系认证",
        text: "补充信息",
      },
      {
        title: "ISO27001",
        subTitle: "安全管理体系认证",
        text: "补充信息",
      },
      {
        title: "ITSS运维",
        subTitle: "服务能力成熟度模型",
        text: "补充信息",
      },
      {
        title: "CMMI能力",
        subTitle: "成熟度模型集成",
        text: "补充信息",
      },
    ];
    const router = useRouter();

    return {
      clientWidth,
      introList,
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  text-align: center;
  .swipper {
    margin: 0 auto;
    width: 100%;
    height: 40vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .productsBox {
    margin: 30px;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // flex-direction: row;
      li {
        height: 200px;
        min-width: 150px;
        background: skyblue;
        margin-right: 10px;
      }
    }
  }
}
</style>
