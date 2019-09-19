<template>
    <el-date-picker placeholder="????????" type="datetime" v-bind="desc.attrs" value-format="yyyy-MM-dd HH:mm:ss" v-model="newValue" style="width: 100%"
        @change="update" />
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

import { DatePicker } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(DatePicker)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    }
})
export default class TzSuperDatetime extends Vue {
    @Prop() desc!: any
    @Prop() value!: any

    newValue: any = this.value

    update() {
        this.$emit('change', this.newValue)
    }
}
</script>
