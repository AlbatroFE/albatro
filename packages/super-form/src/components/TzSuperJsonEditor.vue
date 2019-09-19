<template>
    <v-jsoneditor v-model="json" :plus="false" :height="'400px'" @error="onError" @change="update">    
    </v-jsoneditor>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator"

import VJsoneditor from "v-jsoneditor"
//Vue.use(VJsoneditor)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    },
    components: {
        VJsoneditor
    }
})
export default class TzSuperJsonEditor extends Vue {
    @Prop() value!: any

    json: any = this.value

    update(value:any) {
        this.$emit('change', this.json)
    }

    onError() {

    }

    @Watch('json', { immediate: true, deep: true })
    onListChanged(val: any, oldVal: any) {
        this.$emit('change', this.json)
    }

    @Watch('value', { immediate: true, deep: true })
    onValueChanged(val: any, oldVal: any) {
        //this.json = this.value
        Object.assign(this.json, this.value)
    }
}

</script>
