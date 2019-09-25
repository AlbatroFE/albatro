import TzSpin from "./TzSpin";
import fetchJsonp from "fetch-jsonp";
import { CustomJsonpSource } from './TzCustomSearch';

export namespace TzFetch {
    export function Post(url: string, data: any, isSpinner: boolean = true) {
        var promise = new Promise((resolve, reject) => {
            if (isSpinner) {
                TzSpin.show()
            }

            fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    reject(`${url}: ${res.statusText}(${res.status}) `)
                }
            }).then(res => {
                TzSpin.close()
                resolve(res)
            }).catch((e) => {
                TzSpin.close()
                reject(e)
            })
        });

        return promise;
    }

    export function Get(url: string, isSpinner: boolean = true) {
        var promise = new Promise((resolve, reject) => {
            if (isSpinner) {
                TzSpin.show()
            }

            fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    reject(`${url}: ${res.statusText}(${res.status}) `)
                }
            }).then(res => {
                TzSpin.close()
                resolve(res)
            }).catch(e => {
                TzSpin.close()
                reject(e)
            })
        });

        return promise;
    }

    export async function Jsonp(url: string, options?: CustomJsonpSource, isSpinner: boolean = true): Promise<any> {
        var promise = new Promise((resolve, reject) => {
            if (isSpinner) {
                TzSpin.show()
            }

            fetchJsonp(url, {
                timeout: options && options.timeout ? options.timeout : 30000,
                //jsonpCallbackFunction: options && options.callbackFunction ? options.callbackFunction : "callback"
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    reject(`${url}: fetch error`)
                }
            }).then(res => {
                TzSpin.close()
                resolve(res)
            }).catch(e => {
                TzSpin.close()
                reject(e)
            })
        });

        return promise;
    }
}

// try {
//     let getText = async () => {
//         let promise = await fetchJsonp(url, {
//             jsonpCallbackFunction: jsonpCallbackFunction
//         });
//         let dataS = promise.json();
//         dataS.then(data => {
//             console.log(data);
//         })
//     };
//     getText()
// } catch (error) {
//     console.log(`错误为${error}`)
// }