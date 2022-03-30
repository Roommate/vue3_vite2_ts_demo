import { createApp } from "vue";
import App from "./App.vue";
import router from './router/index'
import { createPinia } from "pinia"
import naive from 'naive-ui'
// import {
//   create,
//   NButton,
//   useMessage,
//   FormInst,
//   FormItemInst,
//   FormItemRule,
//   FormRules,
// } from 'naive-ui'

// const naive = create({
//   components: [NButton, useMessage],
// })

const app = createApp(App)
app.use(naive)
app.use(router)
app.use(createPinia())
app.mount("#app")
