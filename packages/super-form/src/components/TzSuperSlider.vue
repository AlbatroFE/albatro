<template>
  <el-slider
    v-model="newValue"
    @change="update"
    :show-tooltip="true"
    v-bind="desc.attrs"
    v-on="desc.on"
    :class="desc.class"
    :style="desc.style"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import { Slider, Tooltip } from "element-ui";
Vue.use(Slider);
Vue.use(Tooltip);

@Component({
  props: ["value", "desc"],
  model: {
    prop: "value",
    event: "change"
  }
})
export default class TzSuperSlider extends Vue {
  @Prop() desc!: any;
  @Prop() value!: number;

  newValue: number = this.value;

  update() {
    this.$emit("change", this.newValue);
  }
}
</script>
