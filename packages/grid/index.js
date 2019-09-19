import AlGrid from "~/grid/src/grid.vue";

/* istanbul ignore next */
AlGrid.install = function(Vue) {
  Vue.component(AlGrid.name, Grid);
};
export default AlGrid;
