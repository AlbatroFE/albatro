<template>
    <el-input-number :value="value" @change="update">
    </el-input-number>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

import { InputNumber } from "element-ui";
Vue.use(InputNumber)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    }
})
export default class TzSuperNumber extends Vue {
    @Prop() desc!: any
    update(value: number) {
        this.$emit('change', value)
    }
}

</script>
