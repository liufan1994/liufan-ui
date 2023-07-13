/*
 * @Date: 2023-07-12 10:07:24
 * @Author: liufan
 * @Description:  
 */
import { TreeSelect } from "ant-design-vue";
const components = [TreeSelect];

export function setupAntd(app) {
  components.forEach((component) => {
    app.use(component);
  });
}
