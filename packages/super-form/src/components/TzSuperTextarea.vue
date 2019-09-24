<template>
  <el-input
    type="textarea"
    :value="value"
    @change="update"
    v-bind="desc.attrs"
    v-on="desc.on"
    :class="desc.class"
    :style="desc.style"
  ></el-input>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import { Input } from "element-ui";
Vue.use(Input);

@Component({
  props: ["value", "desc"],
  model: {
    prop: "value",
    event: "change"
  }
})
export default class TzSuperTextarea extends Vue {
  @Prop() desc!: any;
  
  update(value: string) {
    this.$emit("change", value);
  }
}
</script>
