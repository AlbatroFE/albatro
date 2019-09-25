<template>
  <button
    class="al-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'al-button--' + type : '',
      buttonSize ? 'al-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="al-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from "vue-property-decorator";

@Component({
  name: "AlButton"
})
export default class AlButton extends Vue {
  @Prop(String) private type!: string;
  @Prop(String) private size!: string;
  @Prop(String) private icon!: string;
  @Prop(String) private nativeType!: string;
  @Prop(Boolean) private loading!: boolean;
  @Prop(Boolean) private disabled!: boolean;
  @Prop(Boolean) private plain!: boolean;
  @Prop(Boolean) private autofocus!: boolean;
  @Prop(Boolean) private round!: boolean;
  @Prop(Boolean) private circle!: boolean;

  @Inject({ default: null }) readonly elForm!: any;
  @Inject({ default: null }) readonly elFormItem!: any;

  private _elFormItemSize() {
    return (this.elFormItem || {}).elFormItemSize;
  }

  get buttonSize() {
    return (
      this.size || this._elFormItemSize || ((this as any).$albatro || {}).size
    );
  }

  get buttonDisabled() {
    return this.disabled || (this.elForm || {}).disabled;
  }

  handleClick(e: any) {
    this.$emit("click", e);
  }
}
</script>
