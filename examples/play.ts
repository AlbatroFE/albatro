import Vue from "vue";
import App from "./play/form.vue";
//import App from "./play/layout.vue";

//import { Button } from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI);

import AlbatroUI from "~/index";
import "~/theme-albatro/src/index.scss";
Vue.use(AlbatroUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
