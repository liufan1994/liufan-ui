/*
 * @Date: 2023-07-06 15:42:37
 * @Author: liufan
 * @Description:
 */
import "./assets/main.css";

import { createApp } from "vue";
// import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import liufanUi from "@/packages/index";
// import { setupAntd } from "./libs/antdv";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
const app = createApp(App);
// setupAntd(app);
app.use(router);
app.use(liufanUi);

app.use(Antd);
// app.use(createPinia());

app.mount("#app");
