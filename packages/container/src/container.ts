import Vue, { VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import AlbatroUIComponent from "~/AlbatroUIComponent";

@Component({
    name: "AlContainer"
})
export default class AlContainer extends AlbatroUIComponent {
    @Prop(String) private direction!: string;

    get isVertical() {
        if (this.direction === 'vertical') {
            return true;
        } else if (this.direction === 'horizontal') {
            return false;
        }

        return this.$slots && this.$slots.default
            ? this.$slots.default.some(vnode => {
                const tag = vnode.componentOptions && vnode.componentOptions.tag;
                return tag === 'al-header' || tag === 'al-footer';
            })
            : false;
    }

    render(h: Vue.CreateElement): VNode {
        return h("section", {
            class: [
                'al-container',
                { 'is-vertical': this.isVertical }
            ]
        }, this.$slots.default)
    }

    install(vue: Vue.VueConstructor<Vue>): void {
        vue.component("AlContainer", AlContainer)
    }
}
