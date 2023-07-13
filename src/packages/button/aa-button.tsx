/*
 * @Date: 2023-07-07 11:34:52
 * @Author: liufan
 * @Description:
 */
// import { Button } from "ant-design-vue";
// import "ant-design-vue/lib/button/style/index.css";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "aa-button",
  // functional: true,
  props: {
    type: String,
    name: Function,
  },
  setup(props, { slots }) {
    return () => (
      <div>
        <a-button type={props.type}>{slots}</a-button>
      </div>
    );
  },
});
