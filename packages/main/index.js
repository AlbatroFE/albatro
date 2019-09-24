import AlMain from "packages/container/src/main";

/* istanbul ignore next */
AlMain.install = function(Vue) {
  Vue.component(AlMain.name, AlCol);
};

export default AlMain;
