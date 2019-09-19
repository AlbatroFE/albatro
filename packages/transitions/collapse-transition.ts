import { addClass, removeClass } from "main/utils/dom";
import Vue, { VNode } from "vue";

class Transition {
  beforeEnter(el: any) {
    addClass(el, "collapse-transition");
    if (!el.dataset) el.dataset = {};

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;

    el.style.height = "0";
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  }

  enter(el: any) {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + "px";
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    } else {
      el.style.height = "";
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }

    el.style.overflow = "hidden";
  }

  afterEnter(el: any) {
    // for safari: remove class then reset height is necessary
    removeClass(el, "collapse-transition");
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
  }

  beforeLeave(el: any) {
    if (!el.dataset) el.dataset = {};
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;

    el.style.height = el.scrollHeight + "px";
    el.style.overflow = "hidden";
  }

  leave(el: any) {
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      addClass(el, "collapse-transition");
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  }

  afterLeave(el: any) {
    removeClass(el, "collapse-transition");
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }
}

// export default Vue.extend({
//   name: "AlCollapseTransition",
//   functional: true,
//   render(h: Vue.CreateElement, { children } : any) {
//     const data: any = {
//       on: new Transition()
//     };

//     return h("transition", data, children);
//   }
// });

import { Component } from "vue-property-decorator";
import AlbatroUIComponent from "~/AlbatroUIComponent";

@Component({
  name: "AlCollapseTransition"
})
export default class AlCollapseTransition extends AlbatroUIComponent {
  render(h: Vue.CreateElement, { children }: any): VNode {
    const data: any = {
      on: new Transition()
    };

    return h("transition", data, children);
  }

  install(vue: Vue.VueConstructor<Vue>): void {
    vue.component("AlCollapseTransition", AlCollapseTransition)
  }
}
