<template>
  <el-date-picker
    placeholder="请选择时间和日期"
    type="datetime"
    value-format="yyyy-MM-dd HH:mm:ss"
    v-model="newValue"
    style="width: 100%"
    v-bind="desc.attrs"
    v-on="desc.on"
    :class="desc.class"
    :style="desc.style"
    @change="update"
  />
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
export default class TzSuperDatetime extends Vue {
  @Prop() desc!: any;
  @Prop() value!: any;

  newValue: any = this.value;

  update() {
    this.$emit("change", this.newValue);
  }
}
</script>
