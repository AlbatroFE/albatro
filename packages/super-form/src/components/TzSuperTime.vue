<template>
  <el-time-select
    style="width: 100%"
    v-model="newValue"
    placeholder="选择时间"
    :picker-options="options"
    @change="update"
    v-bind="desc.attrs"
    v-on="desc.on"
    :class="desc.class"
    :style="desc.style"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import { TimeSelect, Scrollbar } from "element-ui";
Vue.use(TimeSelect);
Vue.use(Scrollbar);

@Component({
  props: ["value", "desc"],
  model: {
    prop: "value",
    event: "change"
  }
})
export default class TzSuperTime extends Vue {
  @Prop() desc!: any;
  @Prop() value!: any;

  newValue: any = this.value;

  update() {
    this.$emit("change", this.newValue);
  }

  get options() {
    return this.desc && this.desc.options
      ? this.desc.options
      : {
          start: "08:30",
          step: "00:30",
          end: "18:00"
        };
  }
}
</script>
