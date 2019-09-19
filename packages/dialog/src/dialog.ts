import { MessageBox } from "element-ui";
import "element-ui/lib/theme-chalk/index.css"
import { VNode } from "vue";
import { MessageBoxData, MessageBoxCloseAction, ElMessageBoxComponent } from "element-ui/types/message-box";
import { MessageType } from "element-ui/types/message";

interface IDialog {
    alert(message: string, title: string, confirmButtonText: string): Promise<any>;
    confirm(message: string, title: string, type: MessageType, confirmButtonText: string, cancelButtonText: string): Promise<any>;
    show(message: VNode, title: any, confirmButtonText: string, cancelButtonText: string, showCancelButton: boolean, showConfirmButton: boolean, beforeClose: Function, propsData: any): Promise<any>;
}

class Dialog implements IDialog {

    alert(message: string, title: string, confirmButtonText: string = "Ok"): Promise<any> {
        var promise = new Promise((resolve, reject) => {
            MessageBox.alert(message, title, {
                confirmButtonText: confirmButtonText
            }).then((data: MessageBoxData) => {
                if (data === "confirm") {
                    resolve();
                }
            })
        });

        return promise;
    }

    confirm(message: string, title: string, type: MessageType, confirmButtonText: string, cancelButtonText: string): Promise<any> {
        var promise = new Promise((resolve, reject) => {
            MessageBox.confirm(message, title, {
                confirmButtonText: confirmButtonText,
                cancelButtonText: cancelButtonText,
                type: type
            }).then((res) => {
                resolve(res);
            }).catch((e) => {
                reject(e)
            })
        });

        return promise;
    }

    show(message: VNode, title: any, confirmButtonText: string, cancelButtonText: string, showCancelButton: boolean, showConfirmButton: boolean, beforeClose?: Function): Promise<any> {
        var promise = new Promise((resolve, reject) => {
            MessageBox({
                message: message,
                title: title,
                confirmButtonText: confirmButtonText,
                cancelButtonText: cancelButtonText,
                showConfirmButton: showConfirmButton,
                showCancelButton: showCancelButton,
                beforeClose: (action: MessageBoxCloseAction, instance: ElMessageBoxComponent, done: (() => void)) => {
                    if (action == "confirm" && beforeClose) {
                        beforeClose(action, instance);
                    }

                    done();
                },
                customClass: 'al-dialog'
            }).then((res) => {
                resolve(res);
            }).catch((e) => {
                reject(e)
            });
        });

        return promise;
    }

    close() {
        MessageBox.close()
    }
}

export default new Dialog();