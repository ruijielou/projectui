import ElButton from "./button/button.vue";
import LLayout from "./layout/layout.vue";
import LLogin from "./login/login.vue";
import ATLLogin from "./login/ATLlogin.vue";

let ModuleObj = {
  ElButton,
  LLayout,
};

switch (process.env.APP_CUSTOMER) {
  case "ATL":
    ModuleObj.LLogin = ATLLogin;
    break;

  default:
    ModuleObj.LLogin = LLogin;
    break;
}

let LView = {};
LView.install = (Vue) => {
  for (let i in ModuleObj) {
    Vue.component(ModuleObj[i].name, ModuleObj[i]);
  }
};

export default LView;
