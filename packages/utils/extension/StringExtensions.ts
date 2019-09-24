interface StringConstructor {  
    isNullOrEmpty: (val: any) => boolean;
    formatMoney: (val: string, n: number) => string;
}

String.isNullOrEmpty = function (val: any): boolean {  
    if (val === undefined || val === null || val.trim() === '') {
        return true;
    }
    return false;
};
