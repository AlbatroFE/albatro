<template>
    <div>
        <el-tag :key="tag" v-for="tag in tags" closable :disable-transitions="false" @close="handleClose(tag)">
            {{tag}}
        </el-tag>
        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
            @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增</el-button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator"

import { Tag } from "element-ui";
Vue.use(Tag)

@Component({
    props: ["value", "desc"],
    model: {
        prop: 'value',
        event: 'change'
    }
})
export default class TzSuperTag extends Vue {
    @Prop() desc!: any
    @Prop() value!: string[] 

    tags: string[] = this.value
    inputVisible: boolean = false
    inputValue: string = ''

    handleClose(tag: string) {
        this.tags.splice(this.tags.indexOf(tag), 1);
    }

    showInput() {
        this.inputVisible = true;
        this.$nextTick(() => {
            (this.$refs.saveTagInput as any).$refs.input.focus();
        });
    }

    handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
            this.tags.push(inputValue);
            this.$emit('change', this.tags)
        }

        this.inputVisible = false;
        this.inputValue = '';
    }
}
</script>
