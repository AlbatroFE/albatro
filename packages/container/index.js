import AlContainer from "packages/container/src/container";

/* istanbul ignore next */
AlContainer.install = function(Vue) {
  Vue.component(AlContainer.name, AlCol);
};

export default AlContainer;
