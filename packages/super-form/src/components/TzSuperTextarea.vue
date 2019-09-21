<template>
    <el-input type="textarea" :value="value" @change="update" >
    </el-input>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

import { Input } from "element-ui";
Vue.use(Input)

@Component({
    props: ["value"],
    model: {
        prop: 'value',
        event: 'change'
    }
})
export default class TzSuperTextarea extends Vue {
    update(value: string) {
        this.$emit('change', value)
    }
}
</script>
