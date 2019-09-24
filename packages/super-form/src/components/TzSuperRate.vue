<template>
  <el-rate
    v-bind="desc.attrs"
    v-model="newValue"
    @change="update"
    v-on="desc.on"
    :class="desc.class"
    :style="desc.style"
    allow-half
  />
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import { Rate } from "element-ui";
Vue.use(Rate);

@Component({
  props: ["value", "desc"],
  model: {
    prop: "value",
    event: "change"
  }
})
export default class TzSuperRate extends Vue {
  @Prop() desc!: any;
  @Prop() value!: any;

  newValue: any = this.value;

  update() {
    this.$emit("change", this.newValue);
  }
}
</script>
