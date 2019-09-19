import Vue, { VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
    name: "AlRow"
})
export default class AlRow extends Vue {
    @Prop({ default: 'div', type: String }) private tag!: string;
    @Prop(Number) private margin!: number;
    @Prop(Boolean) private flex!: boolean;
    @Prop({ default: 'start', type: String }) private horizontalAlign!: string;
    @Prop({ default: 'top', type: String }) private verticalAlign!: string;


    get style() {
        if (this.margin) {
            const ret = {
                marginLeft: '0px',
                marginRight: '0px'
            };

            ret.marginLeft = `-${this.margin / 2}px`;
            ret.marginRight = ret.marginLeft;
            return ret;
        } else {
            return {}
        }
    }

    render(h: Vue.CreateElement): VNode {
        return h(this.tag, {
            class: [
                'al-row',
                this.horizontalAlign !== 'start' ? `is-horizontal-${this.horizontalAlign}` : '',
                this.verticalAlign !== 'top' ? `is-vertical-${this.verticalAlign}` : '',
                { 'al-row--flex': this.flex }
            ],
            style: this.style
        }, this.$slots.default)
    }
}
