<template>
    <el-input :value="value" :readonly="true" v-bind="desc.attrs"></el-input>
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
    }
})
export default class TzSuperText extends Vue {
    @Prop() desc!: any
}

</script>
