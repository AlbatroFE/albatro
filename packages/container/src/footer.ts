import Vue, { VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import AlbatroUIComponent from "~/AlbatroUIComponent";

@Component({
    name: "AlFooter"
})
export default class AlFooter extends AlbatroUIComponent {
    @Prop({ default: "60px", type: String }) private height!: string;

    render(h: Vue.CreateElement): VNode {
        return h("footer", {
            class: [
                'al-footer'
            ],
            style: {
                height: this.height
            }
        }, this.$slots.default)
    }

    install(vue: Vue.VueConstructor<Vue>): void {
        vue.component("AlFooter", AlFooter)
    }
}