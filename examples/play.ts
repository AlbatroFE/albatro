import Vue from "vue";
import App from "./play/form.vue";
//import App from "./play/layout.vue";

import AlbatroUI from "~/index";
import "~/theme-albatro/src/index.scss";
Vue.use(AlbatroUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
