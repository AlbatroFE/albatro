<template>
    <el-select v-model="newValue" @change="update" v-bind="desc.attrs">
        <el-option :key="option.value" :label="option.text" :value="option.value" v-bind="option.attrs" v-for="option in options">
        </el-option>
    </el-select>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"

import { Select, Option } from "element-ui";
Vue.use(Select)
Vue.use(Option)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    }
})
export default class TzSuperSelect extends Vue {
    @Prop() desc!: any
    @Prop() value!: any

    newValue: any = this.value

    @Watch('value', { immediate: true, deep: true })
    onFormDataChanged(val: any, oldVal: any) {
        this.newValue = this.value
    }

    update(value:any) {
        this.$emit('change', this.newValue)
    }

    get options() {
        return this.desc && Array.isArray(this.desc.options)
            ? this.desc.options
            : []
    }
}
</script>
