import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/less/app.less";
import util from "./assets/js/util";
import api from "./assets/js/api";
import "./assets/icons";

Vue.config.productionTip = process.NODE_ENV === "production";

// 加载自定义插件
function installPlugin(plugin, name) {
  plugin.install = function() {
    Vue.prototype[name] = this;
  };
  Vue.use(plugin);
}
installPlugin(api, "api"); //api注册到全局
installPlugin(util, "util"); //公共函数注册到全局

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
