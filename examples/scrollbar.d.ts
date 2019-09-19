import Vue from "vue"
import { ElementUIComponent } from "element-ui/types/component";

declare class ElScrollbar extends ElementUIComponent {
  native: boolean
  wrapStyle: any
  wrapClass: any
  viewClass: any
  viewStyle: any
  noresize: boolean
  tag: string
}

declare module "element-ui/types" {
  interface Scrollbar extends ElScrollbar {}
  export class Scrollbar extends ElScrollbar {}
}