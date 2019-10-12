import { AlbatroUIComponent, AlbatroUIComponentSize } from "./component"

/** Button type */
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info" | "text"

/** Same as native button"s type */
export type ButtonNativeType = "button" | "submit" | "reset" | "menu"

/** Button Component */
export declare class AlButton extends AlbatroUIComponent {
  /** Button size */
  size: AlbatroUIComponentSize

  /** Button type */
  type: ButtonType

  /** Determine whether it"s a plain button */
  plain: boolean

  /** Determine whether it"s a round button */
  round: boolean

  /** Determine whether it"s a circle button */
  circle: boolean

  /** Determine whether it"s loading */
  loading: boolean

  /** Disable the button */
  disabled: boolean

  /** Button icon, accepts an icon name of Albatro icon component */
  icon: string

  /** Same as native button"s autofocus */
  autofocus: boolean

  /** Same as native button"s type */
  nativeType: ButtonNativeType
}