<template>
  <div
    v-bind="desc.attrs"
    v-on="desc.on"
    :class="desc.class"
    :style="desc.style"
  >{{desc.title}}</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

// import { Button } from "element-ui";
// Vue.use(Button);

@Component({
  props: ["value", "desc"],
  model: {
    prop: "value",
    event: "change"
  }
})
export default class TzSuperCascader extends Vue {
  @Prop() desc!: any;
  @Prop() value!: any;
}
</script>
