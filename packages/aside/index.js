import AlAside from "~/container/src/aside";

/* istanbul ignore next */
AlAside.install = function(Vue) {
  Vue.component(AlAside.name, AlCol);
};

export default AlAside;
