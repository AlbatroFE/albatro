<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { use } from "albatro-ui/src/locale";
import zhLocale from "albatro-ui/src/locale/lang/zh-CN";
import enLocale from "albatro-ui/src/locale/lang/en";

@Component
export default class App extends Vue {
  get lang() {
    return this.$route.path.split("/")[1] || "zh-CN";
  }
  get isComponent() {
    return /^component-/.test(this.$route.name || "");
  }

  created() {
    const lang = location.hash.replace("#", "").split("/")[1] || "zh-CN";
    this.localize(lang);
  }

  mounted() {
    this.localize(this.lang);
  }

  localize(lang: any) {
    switch (lang) {
      case "zh-CN":
        use(zhLocale);
        break;
      case "en-US":
        use(enLocale);
        break;
      default:
        use(zhLocale);
    }
  }

  @Watch("lang", { immediate: true, deep: true })
  onLangChanged(val: string, oldVal: string) {
    this.localize(val);
  }
}
</script>
