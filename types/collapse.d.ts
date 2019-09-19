import { AlbatroUIComponent } from "./component"

/** Collapse Component */
export declare class AlCollapse extends AlbatroUIComponent {
    /** Whether to activate accordion mode */
    accordion: boolean

    /** Currently active panel */
    value: string | number | string[] | number[]
}
