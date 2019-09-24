<template>
  <el-input
    :placeholder="'???' + desc.label"
    type="password"
    :show-password="true"
    v-model="newValue"
    v-bind="desc.attrs"
    v-on="desc.on"
    :class="desc.class"
    :style="desc.style"
    @change="update"
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
export default class TzSuperPassword extends Vue {
  @Prop() desc!: any;
  @Prop() value!: any;

  newValue: any = this.value;

  update() {
    this.$emit("change", this.newValue);
  }
}
</script>
