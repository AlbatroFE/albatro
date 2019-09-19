<template>
    <el-date-picker type="dates" v-bind="desc.attrs" v-model="newValue" placeholder="选择一个或多个日期" value-format="yyyy-MM-dd" style="width: 100%" @change="update"/>
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
export default class TzSuperDates extends Vue {
    @Prop() desc!: any
    @Prop() value!: any

    newValue: any = this.value

    update() {
        this.$emit('change', this.newValue)
    }
}

</script>
