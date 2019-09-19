import AlSuperForm from "~/super-form/src/super-form.vue";

/* istanbul ignore next */
AlSuperForm.install = function(Vue) {
  Vue.component(AlSuperForm.name, SuperForm);
};
export default AlSuperForm;
