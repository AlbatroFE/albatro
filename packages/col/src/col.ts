
import Vue, { VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
    name: "AlCol"
})
export default class AlCol extends Vue {
    @Prop({ default: 24, type: Number }) private span!: number;
    @Prop({ default: 'div', type: String }) private tag!: string;
    @Prop(Number) private offset!: number;
    @Prop([Number, Object]) private xs!: number | Object;
    @Prop([Number, Object]) private sm!: number | Object;
    @Prop([Number, Object]) private md!: number | Object;
    @Prop([Number, Object]) private lg!: number | Object;
    @Prop([Number, Object]) private xl!: number | Object;

    getProp(prop: string): any {
        return (this as any)[prop];
    }

    get gutter(): number {
        let parent = this.$parent;

        while (parent && parent.$options.name !== 'AlRow') {
            parent = parent.$parent;
        }
        return parent ? (parent as any).margin : 0;
    }

    get style() {

        if (this.gutter) {
            const style = {
                paddingLeft: '0px',
                paddingRight: '0px'
            };

            style.paddingLeft = this.gutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
            return style;
        } else {
            return {};
        }
    }

    get classList(): string[] {
        let class_prefix = "al-col";
        let classList: string[] = [];

        ['span', 'offset'].forEach(prop => {
            var props = this.getProp(prop);
            if (props || props === 0) {
                classList.push(prop !== 'span' ? `${class_prefix}-${prop}-${props}` : `${class_prefix}-${this[prop]}`);
            }
        });

        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
            var props = this.getProp(size);
            if (typeof props === 'number') {
                classList.push(`${class_prefix}-${size}-${props}`);
            } else if (typeof props === 'object') {
                Object.keys(props).forEach(prop => {
                    classList.push(prop !== 'span' ? `${class_prefix}-${size}-${prop}-${props[prop]}` : `${class_prefix}-${size}-${props[prop]}`);
                });
            }
        });

        return classList;
    }

    render(h: Vue.CreateElement): VNode {
        return h(this.tag, {
            class: [
                'al-col',
                this.classList
            ],
            style: this.style
        }, this.$slots.default)
    }
}
