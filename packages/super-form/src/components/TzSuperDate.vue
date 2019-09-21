<template>
    <el-date-picker placeholder="?????" type="date" v-bind="desc.attrs" value-format="yyyy-MM-dd" v-model="newValue" @change="update" style="width: 100%"/>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

import { DatePicker } from "element-ui";
Vue.use(DatePicker)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    }
})
export default class TzSuperDate extends Vue {
    @Prop() desc!: any
    @Prop() value!: any

    newValue: any = this.value

    update() {
        this.$emit('change', this.newValue)
    }
}
</script>
