import Vue, { VNode } from 'vue'
import { MessageType } from './message'

export interface AlDialog {
    /** Show an alert message box */
    alert(message: string, title: string, confirmButtonText: string): Promise<any>;

    /** Show a confirm message box */
    confirm(message: string, title: string, type: MessageType, confirmButtonText: string, cancelButtonText: string): Promise<any>;

    /** Show a dialog */
    show(message: VNode, title: any, confirmButtonText: string, cancelButtonText: string, showConfirmButton: boolean, showCancelButton: boolean, beforeClose: Function, propsData: any): Promise<any>;
}

declare module 'vue/types/vue' {
    interface Vue {
        /** Show a dialog */
        $dialog: AlDialog
    }
}
