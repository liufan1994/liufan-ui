/*
 * @Date: 2023-07-06 10:55:11
 * @Author: liufan
 * @Description:
 */
import lfButton from "../packages/button/lf-button";
import aaButton from "./button/aa-button";

const components = [lfButton, aaButton];

// 批量组件注册
const install = function (Vue, opts = {}) {
  components.map((component) => {
    Vue.component(component.name, component);
  });
};

/* 支持使用标签的方式引入 */
// if (typeof window !== "undefined" && window.Vue) {
//   install(window.Vue);
// }

export default {
  install,
  lfButton,
  aaButton,
};
