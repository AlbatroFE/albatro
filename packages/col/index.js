import AlCol from "packages/col/src/col";

/* istanbul ignore next */
AlCol.install = function(Vue) {
  Vue.component(AlCol.name, AlCol);
};

export default AlCol;
