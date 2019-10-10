import Vue, { VNode } from 'vue'

export type MessageType = 'success' | 'warning' | 'info' | 'error'

export declare class AlMessageComponent extends Vue {
    /** Close the Loading instance */
    close(): void
}

export interface AlMessage {
    /** Show a common message */
    show(message: string, type?: MessageType, showClose?: boolean, duration?: number): AlMessageComponent

    /** Show a success message */
    success(message: string, showClose?: boolean, duration?: number): AlMessageComponent

    /** Show a warning message */
    warning(message: string, showClose?: boolean, duration?: number): AlMessageComponent

    /** Show an info message */
    info(message: string, showClose?: boolean, duration?: number): AlMessageComponent

    /** Show an error message */
    error(message: string, showClose?: boolean, duration?: number): AlMessageComponent

    /** Close all message */
    closeAll()
}

declare module 'vue/types/vue' {
    interface Vue {
        /** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
        $messages: AlMessage
    }
}
