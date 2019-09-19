declare module 'highlight.js' {
    export function highlightBlock(block:any):void;
}

declare module 'albatro-ui/src/locale' {
    export function use(arg: any): void;
}

declare module 'albatro-ui/src/locale/lang/zh-CN' {
    export const zhLocale: any;
}

declare module 'albatro-ui/src/locale/lang/en' {
    export const enLocale: any;
}

// declare module "lib/packages/al-button" {
//     export class Button extends require("vue").Vue {
//         install (vue: typeof Vue): void
//     }
// }