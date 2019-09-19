<template>
  <div class="al-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`al-collapse-content-${id}`"
      :aria-describedby ="`al-collapse-content-${id}`"
    >
      <div
        class="al-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`al-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="al-collapse-item__arrow al-icon-arrow-right"
          :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <al-collapse-transition>
      <div
        class="al-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`al-collapse-head-${id}`"
        :id="`al-collapse-content-${id}`"
      >
        <div class="al-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </al-collapse-transition>
  </div>
</template>
<script>
  import AlCollapseTransition from "albatro-ui/src/transitions/collapse-transition";
  import Emitter from "albatro-ui/src/mixins/emitter";
  import { generateId } from "albatro-ui/src/utils/util";

  export default {
    name: "AlCollapseItem",

    componentName: "AlCollapseItem",

    mixins: [Emitter],

    components: { AlCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: "auto",
          display: "block"
        },
        contentHeight: 0,
        focusing: false,
        isClick: false,
        id: generateId()
      };
    },

    inject: ["collapse"],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      disabled: Boolean
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch("AlCollapse", "item-click", this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch("AlCollapse", "item-click", this);
      }
    }
  };
</script>
