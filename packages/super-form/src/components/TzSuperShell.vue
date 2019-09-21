<template>
    <div class="tz-super-shell">
        <!-- <template v-for="(comp) of desc.slots" v-slot:[key]>
            <component :key="comp.type" :is="comp.type" @submit=" d => { isShow = false; comp.submit(d) }" v-bind="comp.props" v-on="comp.on" :value="comp.default">
            </component>
        </template> -->
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

import { Input } from "element-ui";
Vue.use(Input)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    },
    components: {
    }
})
export default class TzSuperShell extends Vue {
    @Prop() value!: string
    @Prop() desc!: any

    created() {
        this.desc.slots.forEach((ele:any) => {
            Vue.component(ele.type, ele.component)
        });
    }
}
</script>
