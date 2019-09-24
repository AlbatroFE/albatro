<template>
  <el-date-picker
    v-model="newValue"
    style="width: 100%"
    type="daterange"
    value-format="yyyy-MM-dd"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    @change="update"
    unlink-panels
    v-bind="desc.attrs"
    v-on="desc.on"
    :class="desc.class"
    :style="desc.style"
  ></el-date-picker>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import { DatePicker } from "element-ui";
Vue.use(DatePicker);

@Component({
  props: ["value", "desc"],
  model: {
    prop: "value",
    event: "change"
  }
})
export default class TzSuperDateRange extends Vue {
  @Prop() desc!: any;
  @Prop() value!: any;

  newValue: any = this.value;

  update() {
    this.$emit("change", this.newValue);
  }
}
</script>
