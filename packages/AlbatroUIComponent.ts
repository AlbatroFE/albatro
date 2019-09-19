import Vue from "vue";

export default abstract class AlbatroUIComponent extends Vue {
    /** Install component into Vue */
    abstract install(vue: typeof Vue): void
}