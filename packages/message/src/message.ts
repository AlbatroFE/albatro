import { Message } from "element-ui";
import { MessageType, ElMessageComponent } from "element-ui/types/message";

interface IMessage {
    show(message: string, type?: MessageType, showClose?: boolean, duration?: number): ElMessageComponent;
    success(message: string, showClose?: boolean, duration?: number): ElMessageComponent;
    error(message: string, showClose?: boolean, duration?: number): ElMessageComponent;
    info(message: string, showClose?: boolean, duration?: number): ElMessageComponent;
    warning(message: string, showClose?: boolean, duration?: number): ElMessageComponent;
}

class Messages implements IMessage {

    show(message: string, type?: MessageType, showClose?: boolean, duration?: number): ElMessageComponent{
        if(!duration) {
            duration = 3000
        }

        return Message({
            type: type ? type : "info",
            message: message,
            showClose: showClose,
            customClass: "al-message",
            duration: duration
        });
    }

    success(message: string, showClose?: boolean, duration?: number): ElMessageComponent {
        return this.show(message, "success", showClose, duration);
    }

    error(message: string, showClose?: boolean, duration?: number): ElMessageComponent {
        return this.show(message, "error", showClose, duration);
    }

    info(message: string, showClose?: boolean, duration?: number): ElMessageComponent {
        return this.show(message, "info", showClose, duration);
    }

    warning(message: string, showClose?: boolean, duration?: number): ElMessageComponent {
        return this.show(message, "warning", showClose, duration);
    }

    closeAll() {
        (Message as any).closeAll()
    }
}

export default new Messages();