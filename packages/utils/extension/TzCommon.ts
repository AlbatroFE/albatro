export const TzConst = {
    RowNumber: 'RowNumber',  //序号列
    Percent: 100,
    MinNumber: -999999999999999,
    MaxNumber: 999999999999999,
    DefaultDigit: 2,
    TWO: 2,
    THREE: 3,
    FORE: 4,
}

export const TzMessageConst = {
    DATA_FAIL_MESSAGE: "数据获取失败，请稍后重试！"
}

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
