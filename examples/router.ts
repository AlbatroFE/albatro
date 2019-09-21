import Vue from "vue";
import VueRouter from "vue-router";
import hljs from "highlight.js";
import routes from "./route.config";
//import { ga } from "globalfunc";

Vue.use(VueRouter);

var router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

router.afterEach((route: any) => {
  var title = require("./i18n/title");
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code:not(.hljs)");
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  const data = title[route.meta.lang];
  for (let val in data) {
    if (new RegExp("^" + val, "g").test(route.name)) {
      document.title = data[val];
      return;
    }
  }
  document.title = "AlbatroUI";
  ga("send", "event", "PageView", route.name);
});

export default router;
