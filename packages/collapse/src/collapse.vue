<template>
  <div class="al-collapse" role="tablist" aria-multiselectable="true">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'AlCollapse',
    componentName: 'AlCollapse',
    props: {
      accordion: Boolean,
      value: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        activeNames: [].concat(this.value)
      };
    },
    provide() {
      return {
        collapse: this
      };
    },
    watch: {
      value(value) {
        this.activeNames = [].concat(value);
      }
    },
    methods: {
      setActiveNames(activeNames) {
        activeNames = [].concat(activeNames);
        let value = this.accordion ? activeNames[0] : activeNames;
        this.activeNames = activeNames;
        this.$emit('input', value);
        this.$emit('change', value);
      },
      handleItemClick(item) {
        if (this.accordion) {
          this.setActiveNames(
            (this.activeNames[0] || this.activeNames[0] === 0) &&
            this.activeNames[0] === item.name
              ? '' : item.name
          );
        } else {
          let activeNames = this.activeNames.slice(0);
          let index = activeNames.indexOf(item.name);

          if (index > -1) {
            activeNames.splice(index, 1);
          } else {
            activeNames.push(item.name);
          }
          this.setActiveNames(activeNames);
        }
      }
    },
    created() {
      this.$on('item-click', this.handleItemClick);
    }
  };
</script>


<!--
<script lang='ts'>
import { Vue, Component, Prop, Provide, Watch } from "vue-property-decorator";
@Component({
  name: "AlCollapse"
})
export default class AlCollapse extends Vue {
  @Prop({ default: '', type: [Array, String, Number] }) private value!: string | number | string[] | number[];
  @Prop(Boolean) private accordion!: boolean;

  activeNames: any = Array.isArray(this.value)?[].concat(this.value as []): this.value;

  @Provide() collapse = this;

  @Watch("value")
  onValueChanged(val: [], oldVal: []) {
    this.activeNames = [].concat(val);
  }

  created() {
    this.$on("item-click", this.handleItemClick);
  }

  handleItemClick(item: any) {
    if (this.accordion) {
      this.setActiveNames(
        (this.activeNames[0] || this.activeNames[0] === 0) &&
          this.activeNames[0] === item.name
          ? ""
          : item.name
      );
    } else {
      let activeNames = this.activeNames.slice(0);
      let index = activeNames.indexOf(item.name);

      if (index > -1) {
        activeNames.splice(index, 1);
      } else {
        activeNames.push(item.name);
      }
      this.setActiveNames(activeNames);
    }
  }

  private setActiveNames(activeNames: any) {
    activeNames = [].concat(activeNames);
    let value = this.accordion ? activeNames[0] : activeNames;
    this.activeNames = activeNames;
    this.$emit("input", value);
    this.$emit("change", value);
  }
}
</script>
-->
