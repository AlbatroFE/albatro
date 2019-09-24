import Vue, { VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import AlbatroUIComponent from "packages/AlbatroUIComponent";

@Component({
    name: "AlMain"
})
export default class AlMain extends AlbatroUIComponent {
    render(h: Vue.CreateElement): VNode {
        return h("main", {
            class: [
                'al-main'
            ]
        }, this.$slots.default)
    }

    install(vue: Vue.VueConstructor<Vue>): void {
        vue.component("AlMain", AlMain)
    }
}