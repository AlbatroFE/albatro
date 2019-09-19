import Vue from "vue"

import { AlButton } from "./button"
import { AlCol } from "./col"
import { AlRow } from "./row"

import { AlContainer } from "./container"
import { AlHeader } from "./header"
import { AlAside } from "./aside"
import { AlMain } from "./main"
import { AlFooter } from "./footer"

/** The version of albatro-ui */
export const version: string

/**
 * Install all albatro-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(AlbatroUI)` to install.
 */
export function install (vue: typeof Vue, options: any): void

/** Button Component */
export class Button extends AlButton {}

/** Colunm Layout Component */
export class Col extends AlCol {}

/** Row Layout Component */
export class Row extends AlRow {}

/** CContainer Component */
export class Container extends AlContainer {}

/** CContainer Component */
export class Header extends AlHeader {}

/** Aside Component */
export class Aside extends AlAside {}

/** Aside Component */
export class Main extends AlMain {}

/** Aside Component */
export class Footer extends AlFooter {}