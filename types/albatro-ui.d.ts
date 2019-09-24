import Vue from "vue"
import { AlbatroUIComponent, AlbatroUIComponentSize, AlbatroUIHorizontalAlignment } from './component'

/**
 * import component type files
 */
import { AlAside } from "./aside";
import { AlButton } from "./button";
import { AlCol } from "./col";
import { AlContainer } from "./container";
import { AlDialog } from './dialog';
import { AlFooter } from "./footer";
import { AlGrid } from "./grid";
import { AlHeader } from "./header";
import { AlMain } from "./main";
import { AlMessage } from './message';
import { AlRow } from "./row";
import { AlSuperForm } from "./super-form";
import { AlTable } from "./table";

export interface InstallationOptions {
    locale: any,
    i18n: any,
    size: string
}

/** The version of albatro-ui */
export const version: string

/**
 * Install all albatro-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(AlbatroUI)` to install.
 */
export function install(vue: typeof Vue, options: InstallationOptions): void

/** AlbatroUI component common definition */
export type Component = AlbatroUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = AlbatroUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = AlbatroUIHorizontalAlignment

/** Aside Component */
export class Aside extends AlAside { }

/** Button Component */
export class Button extends AlButton { }

/** Colunm Layout Component */
export class Col extends AlCol { }

/** Container Component */
export class Container extends AlContainer { }

/** Dialog Component */
export const Dialog: AlDialog

/** Footer Component */
export class Footer extends AlFooter { }

/** Grid Component */
export class Grid extends AlGrid { }

/** Header Component */
export class Header extends AlHeader { }

/** Main Component */
export class Main extends AlMain { }

/** Message Component */
export const Message: AlMessage

/** Row Layout Component */
export class Row extends AlRow { }

/** SuperForm Component */
export class SuperForm extends AlSuperForm { }

/** Table Component */
export class Table extends AlTable { }