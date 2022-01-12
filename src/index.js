/* Automatically generated by './build/bin/build-entry.js' */

import AlAside from "../packages/aside/index.js";
import AlButton from "../packages/button/index.js";
import AlCol from "../packages/col/index.js";
import AlContainer from "../packages/container/index.js";
import AlDialog from "../packages/dialog/index.js";
import AlFooter from "../packages/footer/index.js";
import AlGrid from "../packages/grid/index.js";
import AlHeader from "../packages/header/index.js";
import AlMain from "../packages/main/index.js";
import AlMessage from "../packages/message/index.js";
import AlRow from "../packages/row/index.js";
import AlSuperForm from "../packages/super-form/index.js";
import AlTable from "../packages/table/index.js";
import locale from "main/locale";
import AlCollapseTransition from "main/transitions/collapse-transition.js";

const components = [
  AlAside,
  AlButton,
  AlCol,
  AlContainer,
  AlFooter,
  AlGrid,
  AlHeader,
  AlMain,
  AlRow,
  AlSuperForm,
  AlTable,
  AlCollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$ALBATRO = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$dialog = AlDialog;
  Vue.prototype.$messages = AlMessage;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: "0.2.3",
  locale: locale.use,
  i18n: locale.i18n,
  install,
  AlCollapseTransition,
  AlAside,
  AlButton,
  AlCol,
  AlContainer,
  AlDialog,
  AlFooter,
  AlGrid,
  AlHeader,
  AlMain,
  AlMessage,
  AlRow,
  AlSuperForm,
  AlTable
};