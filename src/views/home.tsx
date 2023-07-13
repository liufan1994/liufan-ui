/*
 * @Date: 2023-07-06 16:13:41
 * @Author: liufan
 * @Description:
 */
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return () => (
      <div>
        home
        <lf-button>Primary Button</lf-button>
        <aa-button type="primary">gggg</aa-button>
      </div>
    );
  },
});
