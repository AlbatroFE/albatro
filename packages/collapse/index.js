import AlCollapse from "~/collapse/src/collapse.vue";

/* istanbul ignore next */
AlCollapse.install = function(Vue) {
  Vue.component(AlCollapse.name, Collapse);
};
export default AlCollapse;
