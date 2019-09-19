import AlButton from "~/button/src/button.vue";

/* istanbul ignore next */
AlButton.install = function(Vue) {
  Vue.component(AlButton.name, AlButton);
};

export default AlButton;
