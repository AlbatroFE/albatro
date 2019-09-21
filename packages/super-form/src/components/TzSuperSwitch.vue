<template>
    <el-switch :value="value" @change="update" v-bind="desc.attrs"/>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

import { Switch } from "element-ui";
Vue.use(Switch)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    }
})
export default class TzSuperSwitch extends Vue {
    @Prop() desc!: any
    update(value:any) {
        this.$emit('change', value)
    }
}
</script>
