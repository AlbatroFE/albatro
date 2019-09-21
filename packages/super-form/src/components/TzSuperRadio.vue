<template>
    <div>
        <el-radio-group v-model="newValue" @change="update" v-bind="desc.attrs">
            <el-radio :key="option.value" :label="option.value" v-bind="option.attrs" v-for="option of options">
                {{option.text}}</el-radio>
        </el-radio-group>

        <em v-if="!options || options.length === 0">没有选项</em>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

import { RadioGroup, Radio } from "element-ui";
Vue.use(RadioGroup)
Vue.use(Radio)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    }
})
export default class TzSuperRadio extends Vue {
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
