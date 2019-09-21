<template>
    <el-time-picker is-range arrow-control v-model="newValue" range-separator="至" start-placeholder="开始时间"
        end-placeholder="结束时间" placeholder="选择时间范围" @change="update" value-format="HH:mm:ss" style="width: 100%">
    </el-time-picker>
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
export default class TzSuperTimeRange extends Vue {
    @Prop() desc!: any
    @Prop() value!: any

    newValue: any = this.value

    update() {
        this.$emit('change', this.newValue)
    }
}
</script>
