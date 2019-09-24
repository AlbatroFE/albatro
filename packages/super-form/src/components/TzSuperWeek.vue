<template>
  <el-date-picker
    v-model="newValue"
    type="week"
    format="yyyy 第 WW 周"
    @change="update"
    placeholder="选择周"
    v-bind="desc.attrs"
    v-on="desc.on"
    :class="desc.class"
    :style="desc.style"
    style="width: 100%"
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
export default class TzSuperWeek extends Vue {
  @Prop() desc!: any;
  @Prop() value!: any;

  newValue: any = this.value;

  update() {
    this.$emit("change", this.newValue);
  }
}
</script>
