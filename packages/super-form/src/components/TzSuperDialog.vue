<template>
    <div>
        <el-input :value="newValue" :disabled="true">
            <el-button slot="append" icon="el-icon-search" @click="isShow = true"></el-button>
        </el-input>

        <!-- 弹框 -->
        <el-dialog :visible.sync="isShow" append-to-body :title="desc.title" v-if="isShow" width="1200px">
            <template v-for="(comp) of desc.slots" v-slot:[key]>
                <component :key="comp.type" :is="comp.type" @submit=" d => { isShow = false; comp.submit(d) }" v-bind="comp.props" :value="comp.default">
                </component>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">

import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

import { Input, Button, Dialog } from "element-ui";
Vue.use(Input)
Vue.use(Button)
Vue.use(Dialog)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    },
    components: {
    }
})
export default class TzSuperDialog extends Vue {
    @Prop() value!: string
    @Prop() desc!: any

    isShow: boolean = false

    created() {
        this.desc.slots.forEach((ele : any) => {
            Vue.component(ele.type, ele.component)
        });
    }

    get newValue(){
        return this.value
    }
}

</script>
