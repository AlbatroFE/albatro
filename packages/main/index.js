import AlMain from "~/container/src/main";

/* istanbul ignore next */
AlMain.install = function(Vue) {
  Vue.component(AlMain.name, AlCol);
};

export default AlMain;
