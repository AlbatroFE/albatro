import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css"
import { MessageType } from "element-ui/types/message";

interface IMessage {
    show(message: string, type?: MessageType, showClose?: boolean, duration?: number): void;
    success(message: string, showClose?: boolean, duration?: number): void;
    error(message: string, showClose?: boolean, duration?: number): void;
    info(message: string, showClose?: boolean, duration?: number): void;
    warning(message: string, showClose?: boolean, duration?: number): void;
}

class Messages implements IMessage {

    show(message: string, type?: MessageType, showClose?: boolean, duration?: number) {
        Message({
            type: type ? type : "info",
            message: message,
            showClose: showClose,
            customClass: "al-message",
            duration: duration
        });
    }

    success(message: string, showClose?: boolean, duration?: number) {
        this.show(message, "success", showClose, duration);
    }

    error(message: string, showClose?: boolean, duration?: number) {
        this.show(message, "error", showClose, duration);
    }

    info(message: string, showClose?: boolean, duration?: number) {
        this.show(message, "info", showClose, duration);
    }

    warning(message: string, showClose?: boolean, duration?: number) {
        this.show(message, "warning", showClose, duration);
    }

    closeAll() {
        (Message as any).closeAll()
    }
}

export default new Messages();