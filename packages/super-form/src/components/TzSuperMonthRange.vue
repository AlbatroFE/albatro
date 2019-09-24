<template>
  <el-date-picker
    v-model="newValue"
    type="monthrange"
    style="width: 100%"
    range-separator="至"
    start-placeholder="开始月份"
    end-placeholder="结束月份"
    @change="update"
    v-bind="desc.attrs"
    v-on="desc.on"
    :class="desc.class"
    :style="desc.style"
    unlink-panels
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
export default class TzSuperMonthRange extends Vue {
  @Prop() desc!: any;
  @Prop() value!: any;

  newValue: any = this.value;

  update() {
    this.$emit("change", this.newValue);
  }
}
</script>
