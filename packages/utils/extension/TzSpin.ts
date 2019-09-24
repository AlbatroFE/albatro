import { Loading } from "element-ui";
var unique: any;
export default {
    show() {
        let opt = { body: true, text: '加载中...' };
        if (!unique) unique = Loading.service(opt);
    },
    close() {
        if (unique) {
            unique.close();
            unique = null;
        }
    },
    resolve(resolve: Function) {
        return function (component: Function) {            
            if (unique) {
                unique.close();
                unique = null;
            }
            resolve(component)
        }
    }
}