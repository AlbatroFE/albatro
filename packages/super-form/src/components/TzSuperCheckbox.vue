<template>
    <div>
        <el-checkbox-group v-model="newValue" @change="update">
            <el-checkbox :key="option.value" :label="option.value" v-bind="option.attrs" v-for="option of options">
                {{option.text}}</el-checkbox>
        </el-checkbox-group>

        <em v-if="!options || options.length === 0">????</em>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

import { CheckboxGroup, Radio } from "element-ui";
Vue.use(CheckboxGroup)
Vue.use(Radio)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    }
})
export default class TzSuperCheckbox extends Vue {
    @Prop() desc!: any
    @Prop() value!: any

    newValue: any = this.value

    update() {
        this.$emit('change', this.newValue)
    }

    get options() {
        return this.desc && this.desc.options
            ? this.desc.options
            : []
    }
}
</script>
