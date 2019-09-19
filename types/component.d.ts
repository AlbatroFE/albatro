import Vue from "vue"

/** AlbatroUI component common definition */
export declare class AlbatroUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type AlbatroUIComponentSize = "large" | "medium" | "small" | "mini"

/** Horizontal alignment */
export type AlbatroUIHorizontalAlignment = "left" | "center" | "right"