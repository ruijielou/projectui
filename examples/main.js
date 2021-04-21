import Vue from "vue";
import App from "./App.vue";
import "../packages/theme/src/index.css";
import { ElButton } from "../packages/index";
Vue.config.productionTip = false;
Vue.use(ElButton);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
