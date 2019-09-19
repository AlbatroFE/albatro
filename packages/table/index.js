import AlTable from "~/table/src/table.vue";

/* istanbul ignore next */
AlTable.install = function(Vue) {
  Vue.component(AlTable.name, Table);
};
export default AlTable;
