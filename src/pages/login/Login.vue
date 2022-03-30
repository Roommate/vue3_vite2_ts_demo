<template>
  <div class="main">
    <div class="content-box">
      <n-form ref="formRef" class="form" :model="model" :rules="rules">
        <n-form-item path="username" label="用户名">
          <n-input v-model:value="model.username" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input
            v-model:value="model.password"
            type="password"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-button @click="login" type="primary"> 登录 </n-button>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import loginApi from "@/service/api/login/login";
import { FormInst, FormItemInst, FormRules } from "naive-ui";
import { useRoute, useRouter } from "vue-router";

interface ModelType {
  username: string | null;
  password: string | null;
}

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null);
    const rPasswordFormItemRef = ref<FormItemInst | null>(null);
    const modelRef = ref<ModelType>({
      username: null,
      password: null,
    });
    const router = useRouter();
    const rules: FormRules = {
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: ["blur"],
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: ["blur"],
        },
      ],
    };
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,
      async login() {
        // const { code, data, msg } = await loginApi.login({
        //   username: modelRef.value.username,
        //   password: modelRef.value.password,
        // });
        // console.log(code, data, msg);
        router.push({ name: "main" });
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
.content-box {
  margin: 220px auto 0;
  width: 500px;
  height: 300px;
  background: #ddd;
  border-radius: 10px;
  overflow: auto;
}
.form {
  margin: 30px;
}
.test {
  color: $test-color;
}
</style>