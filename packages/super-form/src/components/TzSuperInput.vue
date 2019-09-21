<template>
    <el-input :placeholder="'请输入' + desc.label" v-model="newValue" @change="update">
    </el-input>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"

import { Input } from "element-ui";
Vue.use(Input)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    },
    components: {
        Input
    }
})
export default class TzSuperInput extends Vue {
    @Prop() desc!: any
    @Prop() value!: any

    newValue: any = this.value

    @Watch('value', { immediate: true, deep: true })
    onFormDataChanged(val: any, oldVal: any) {
        this.newValue = this.value
    }

    update() {
        this.$emit('change', this.newValue)
    }
}

</script>
