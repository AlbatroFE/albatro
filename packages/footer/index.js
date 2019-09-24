import AlFooter from "packages/container/src/footer";

/* istanbul ignore next */
AlFooter.install = function(Vue) {
  Vue.component(AlFooter.name, AlCol);
};

export default AlFooter;
