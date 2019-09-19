import Vue, { VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import AlbatroUIComponent from "~/AlbatroUIComponent";

@Component({
    name: "AlAside"
})
export default class AlAside extends AlbatroUIComponent {
    @Prop({ default: "300px", type: String }) private width!: string;

    render(h: Vue.CreateElement): VNode {
        return h("aside", {
            class: [
                'al-aside'
            ],
            style: {
                width: this.width
            }
        }, this.$slots.default)
    }

    install(vue: Vue.VueConstructor<Vue>): void {
        vue.component("AlAside", AlAside)
    }
}