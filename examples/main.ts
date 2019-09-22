import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/demo-styles/index.scss";
import "@/assets/styles/common.scss";
import "@/assets/styles/fonts/style.css";

import demoBlock from "@/components/demo-block.vue";
import MainFooter from "@/components/footer.vue";
import MainHeader from "@/components/header.vue";
import SideNav from "@/components/side-nav.vue";
import FooterNav from "@/components/footer-nav.vue";
Vue.component("demo-block", demoBlock);
Vue.component("main-footer", MainFooter);
Vue.component("main-header", MainHeader);
Vue.component("side-nav", SideNav);
Vue.component("footer-nav", FooterNav);

import Element from "element-ui";
Vue.use(Element);

import Albatro from "~/index";
import "packages/theme-albatro/src/index.scss";
Vue.use(Albatro);

Vue.config.productionTip = false;
Vue.prototype.$event = new Vue();
Vue.prototype.$icon = require("@/icon.json"); // Icon 列表页用

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
