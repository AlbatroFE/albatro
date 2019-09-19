
export interface IUrlParameterSchema {
    [key: string]: string | number;
}

export function encodeQueryData(data: IUrlParameterSchema) {
    let ret: string[] = [];
    if (data) {
        for (let d in data) {
            if (d && data[d] !== undefined) {
                ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d].toString()))
            }
        }
    }
    
    return ret.join('&');
}