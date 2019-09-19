import AlHeader from "~/container/src/header";

/* istanbul ignore next */
AlHeader.install = function(Vue) {
  Vue.component(AlHeader.name, AlCol);
};

export default AlHeader;
